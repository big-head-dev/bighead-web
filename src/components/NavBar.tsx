import { cn } from '../utils/cn'
import ghubLogo from '/github-mark.svg'
import xLogo from '/x-logo.svg'

type NavBarProps = {
  className?: string
  children?: React.ReactNode
}
export const NavBar = ({ className, children, ...props }: NavBarProps) => (
  <nav className={cn('inline-flex gap-4', className)} {...props}>
    <div className="order-1 text-4xl lg:text-5xl text-blue-950 transition duration-0 group hover:scale-x-[-1] hover:scale-y-[-1]">
      <span className="font-none group-hover:font-bold">big</span>
      <span className="font-bold group-hover:font-normal">head</span>
    </div>

    <ul className="inline-flex items-center gap-4">
      <li className="order-last transition duration-300 ease-out hover:-rotate-270">
        <a href="https://github.com/big-head-dev" target="_blank">
          <img
            fetchPriority="low"
            src={ghubLogo}
            className="size-8"
            alt="github logo"
          />
        </a>
      </li>
      <li className="order-first transition duration-300 ease-in-out hover:-rotate-270">
        <a href="https://x.com/thebigheaddev" target="_blank">
          <img
            fetchPriority="low"
            src={xLogo}
            className="size-8"
            alt="x logo"
          />
        </a>
      </li>
    </ul>
    {children}
  </nav>
)
