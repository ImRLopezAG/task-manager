import { cn } from '@/lib/utils'

interface IconProps {
  className?: string
}

export const LayoutShitIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={cn('size-5', className)} width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M4 12h8" /><path d="M12 15h8" /><path d="M12 9h8" /><path d="M12 4v16" /></svg>
)
