import { useState, useEffect } from 'react'

const SOCIAL_LINKS = [
  {
    label: 'GitHub',
    href: 'https://github.com/Jerwinnnn',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/jerwin-tugas-674818275/',
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    href: 'mailto:tugasjerwin7@gmail.com',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
]

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* Back to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
        className={`fixed bottom-6 right-6 z-40 w-10 h-10 rounded-full bg-slate-800 border border-slate-700
          hover:border-accent hover:text-accent text-slate-400 flex items-center justify-center
          transition-all duration-300 ${showTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
        </svg>
      </button>

      <footer className="border-t border-slate-800 pt-12 pb-8 px-6 mt-12">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-10">
            {/* Brand */}
            <div>
              <a href="#hero" className="font-mono text-accent-light font-medium text-sm">
                jerwin.dev
              </a>
              <p className="text-xs text-slate-500 mt-2 max-w-xs leading-relaxed">
                Data Engineer & Governance Analyst · Available for freelance projects.
              </p>
              <div className="flex items-center gap-4 mt-4">
                {SOCIAL_LINKS.map(({ label, href, icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="text-slate-500 hover:text-accent-light transition-colors"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick nav */}
            <div>
              <p className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-3">Navigation</p>
              <ul className="space-y-2">
                {NAV_LINKS.map(({ label, href }) => (
                  <li key={href}>
                    <a href={href} className="text-xs text-slate-400 hover:text-white transition-colors">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div>
              <p className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-3">Get In Touch</p>
              <a
                href="mailto:tugasjerwin7@gmail.com"
                className="text-xs text-slate-400 hover:text-white transition-colors block mb-2"
              >
                tugasjerwin7@gmail.com
              </a>
              <a
                href="/Jerwin_Tugas_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-accent hover:text-accent-light transition-colors font-medium mt-1"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                </svg>
                Download CV
              </a>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-slate-800/60 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
            <p className="font-mono text-xs text-slate-600">
              Designed &amp; Built by <span className="text-slate-500">Jerwin Tugas</span>
              {' · '}
              <span>{new Date().getFullYear()}</span>
            </p>
            <p className="font-mono text-xs text-slate-700">
              Built with React + Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
