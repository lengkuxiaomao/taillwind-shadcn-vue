import ky, { type Options, type ResponsePromise } from 'ky'

/**
 * 业务系统通用的 API 响应结构
 */
export interface ApiResponse<T = unknown> {
  code: number
  data: T
  message: string
}

/**
 * HTTP 错误定义 (业务逻辑相关)
 */
export class HttpError extends Error {
  constructor(
    public code: number,
    public message: string,
    public originalResponse?: Response,
  ) {
    super(message)
    this.name = 'HttpError'
  }
}

/**
 * 默认配置
 */
const DEFAULT_PREFIX_URL = import.meta.env.VITE_API_BASE_URL || '/api'
const DEFAULT_TIMEOUT = 10000 // 10s

/**
 * 封装 Ky 实例
 * 提供极高的工程化隔离性与可扩展性
 */
export const requestInstance = ky.create({
  prefixUrl: DEFAULT_PREFIX_URL,
  timeout: DEFAULT_TIMEOUT,
  retry: {
    limit: 2,
    methods: ['get'],
    statusCodes: [408, 413, 429, 500, 502, 503, 504],
  },
  hooks: {
    beforeRequest: [
      (request) => {
        const token = localStorage.getItem('auth_token')
        if (token) {
          request.headers.set('Authorization', `Bearer ${token}`)
        }
      },
    ],
    afterResponse: [
      async (_request, _options, response) => {
        if (response.status === 401) {
          console.error('登录失效，请重新登录')
        }
      },
    ],
  },
})

/**
 * 内部辅助函数：统一处理业务响应拦截与数据解包
 */
async function handleBusinessResponse<T>(resPromise: ResponsePromise): Promise<T> {
  const res = await resPromise.json<ApiResponse<T>>()
  if (res.code !== 200 && res.code !== 0) {
    throw new HttpError(res.code, res.message)
  }
  return res.data
}

/**
 * 封装极其简捷的业务层调用模型
 * 逻辑复用性高，支持颗粒度可控的自定义请求
 */
export const http = {
  /**
   * 暴露原始实例，用于极少数需要完全掌控请求过程的场景
   */
  instance: requestInstance,

  /**
   * 通用请求方法，支持所有 Ky 配置 (用于快速扩展 headers, searchParams 等)
   */
  request: <T>(url: string | URL | Request, options?: Options) =>
    handleBusinessResponse<T>(requestInstance(url, options)),

  /**
   * 快捷 GET 请求
   */
  get: <T>(url: string, options?: Options) =>
    handleBusinessResponse<T>(requestInstance.get(url, options)),

  /**
   * 快捷 POST 请求
   */
  post: <T>(url: string, body?: unknown, options?: Options) =>
    handleBusinessResponse<T>(requestInstance.post(url, { ...options, json: body })),

  /**
   * 快捷 PUT 请求
   */
  put: <T>(url: string, body?: unknown, options?: Options) =>
    handleBusinessResponse<T>(requestInstance.put(url, { ...options, json: body })),

  /**
   * 快捷 DELETE 请求
   */
  delete: <T>(url: string, options?: Options) =>
    handleBusinessResponse<T>(requestInstance.delete(url, options)),
}

export default http
