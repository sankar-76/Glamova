import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { gsap } from 'gsap'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Collections' },
  { to: '/doctors', label: 'Experts' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const navRef = useRef(null)
  const mobileRef = useRef(null)
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    gsap.fromTo(navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power4.out', delay: 0.3 }
    )
  }, [])

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => { setOpen(false) }, [location])

  useEffect(() => {
    if (!mobileRef.current) return
    if (open) {
      gsap.fromTo('.mob-link',
        { x: -30, opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.07, duration: 0.5, ease: 'power3.out', delay: 0.2 }
      )
    }
  }, [open])

  const isDark = !scrolled
  const textColor = isDark ? 'text-white' : 'text-charcoal'
  const logoColor = isDark ? 'text-white' : 'text-rose'

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'navbar-scrolled py-3' : 'py-5 bg-transparent'}`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <rect width="32" height="32" rx="8" fill="#c97b84"/>
              <path d="M16 8c-4 0-7 3-7 7 0 5 7 9 7 9s7-4 7-9c0-4-3-7-7-7z" fill="white" opacity="0.9"/>
              <circle cx="16" cy="15" r="2.5" fill="#c97b84"/>
            </svg>
            <span className={`font-display text-2xl font-semibold tracking-wide transition-colors duration-300 ${logoColor}`}>
              Glamova
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`text-sm font-medium tracking-wide transition-all duration-300 relative group ${
                  location.pathname === to ? 'text-rose' : `${textColor} hover:text-rose`
                }`}
              >
                {label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-rose transition-all duration-300 ${location.pathname === to ? 'w-full' : 'w-0 group-hover:w-full'}`}/>
              </Link>
            ))}
            <Link to="/contact" className="btn-primary text-sm py-2.5 px-6">
              Shop Now
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className={`md:hidden flex flex-col gap-[6px] p-2 ${open ? 'ham-open' : ''} ${scrolled ? 'text-charcoal' : 'text-white'}`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span className="ham-line"></span>
            <span className="ham-line"></span>
            <span className="ham-line"></span>
          </button>
        </div>
      </nav>

      {/* Mobile fullscreen overlay */}
      <div
        ref={mobileRef}
        className={`mobile-menu md:hidden fixed inset-0 z-40 bg-charcoal flex flex-col justify-center px-8 ${open ? 'open' : ''}`}
      >
        <nav className="flex flex-col gap-1">
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`mob-link font-display text-5xl font-semibold py-3 border-b border-white/10 transition-colors ${
                location.pathname === to ? 'text-rose' : 'text-white hover:text-rose'
              }`}
            >
              {label}
            </Link>
          ))}
          <Link to="/contact" className="mob-link mt-8 btn-primary text-center text-base">
            Shop Now
          </Link>
        </nav>
        <p className="absolute bottom-8 left-8 text-white/30 text-xs font-body">Glamova Beauty © 2026</p>
      </div>
    </>
  )
}
