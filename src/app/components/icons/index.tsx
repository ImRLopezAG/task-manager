import { cn } from '@/lib/utils'

interface IconProps {
  className?: string
}

export const LayoutShitIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={cn('size-5', className)} width='24' height='24' viewBox='0 0 24 24' strokeWidth='2' stroke='currentColor' fill='none' strokeLinecap='round' strokeLinejoin='round'><path stroke='none' d='M0 0h24v24H0z' fill='none'/><path d='M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z' /><path d='M4 12h8' /><path d='M12 15h8' /><path d='M12 9h8' /><path d='M12 4v16' /></svg>
)

export const EditLayoutIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={cn('size-5', className)} viewBox='0 0 20 20' fill='none'><rect x='4' y='3' width='12' height='2' rx='1' fill='currentColor'/><rect x='4' y='7' width='12' height='2' rx='1' fill='currentColor'/><rect x='4' y='11' width='3' height='2' rx='1' fill='currentColor'/><rect x='4' y='15' width='4' height='2' rx='1' fill='currentColor'/><rect x='8.5' y='11' width='3' height='2' rx='1' fill='currentColor'/><path d='M17.154 11.346a1.182 1.182 0 00-1.671 0L11 15.829V17.5h1.671l4.483-4.483a1.182 1.182 0 000-1.671z' fill='currentColor'/></svg>
)
