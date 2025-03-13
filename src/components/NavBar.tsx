import { cn } from '../utils/cn'
import bhLogo from '/logo-white.svg'

type Props = {
  className?: string
  children?: React.ReactNode
}
export const NavBar = ({ className, children, ...props }: Props) => (
  <nav className={cn('inline-flex gap-4 px-5 md:px-10 md:py-5 py-2 h-sm w-full', className)} {...props}>
    <img fetchPriority="high" src={bhLogo} alt="bighead development" className="w-30 md:w-50" />
    {children}
  </nav>
)
