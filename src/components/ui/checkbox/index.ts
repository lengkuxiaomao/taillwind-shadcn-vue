// src/components/ui/checkbox/index.ts
import { cva, type VariantProps } from 'class-variance-authority'

export { default as Checkbox } from './Checkbox.vue'

export const checkboxVariants = cva(
  'peer size-4 shrink-0 rounded-[4px] border border-input shadow-xs transition-shadow outline-none focus-visible:ring-ring/50 focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary',
  {
    variants: {
      variant: {
        default: 'rounded-[4px]',
        circle: 'rounded-full', // 让复选框变成圆形
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

export type CheckboxVariants = VariantProps<typeof checkboxVariants>
