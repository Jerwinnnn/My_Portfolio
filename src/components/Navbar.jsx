import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-950/90 backdrop-blur border-b border-slate-800' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#hero" className="font-mono text-accent-light font-medium text-sm">
          jerwin.dev
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="text-sm text-slate-400 hover:text-white transition-colors duration-150"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="/Jerwin_Tugas_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex btn-outline text-sm py-1.5 px-4"
        >
          Resume
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-slate-400 hover:text-white p-1"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 px-6 pb-4">
          <ul className="flex flex-col gap-4 pt-4">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="block text-slate-300 hover:text-white transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-sm py-1.5 px-4 w-fit"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
