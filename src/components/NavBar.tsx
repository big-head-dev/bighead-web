import { useState, useEffect } from 'react'
import { cn } from '../utils/cn'
import bhLogo from '/logo-white.svg'

type Props = {
  className?: string
  children?: React.ReactNode
}
export const NavBar = ({ className, children, ...props }: Props) => {
  const [scrolled, setScrolled] = useState(false)

  const handleScroll = () => setScrolled(window.scrollY > 0)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav
      className={cn(
        'inline-flex gap-4 px-5 md:px-10 md:py-5 py-2 h-sm w-full transition-colors duration-300 ease-in',
        scrolled ? 'bg-gradient-to-b from-bh-dblue to-bh-dblue/70 hover:to-bh-dblue/90' : 'bg-transparent',
        className
      )}
      {...props}>
      <img fetchpriority="high" src={bhLogo} alt="bighead development" className="w-30 md:w-50" />
      {children}
    </nav>
  )
}
