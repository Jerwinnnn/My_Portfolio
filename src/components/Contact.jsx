import { useState, useEffect, useRef } from 'react'

function Toast({ type, onClose }) {
  useEffect(() => {
    const t = setTimeout(onClose, 5000)
    return () => clearTimeout(t)
  }, [onClose])

  const isSuccess = type === 'success'
  return (
    <div className={`fixed bottom-6 right-6 z-50 flex items-start gap-3 px-5 py-4 rounded-xl shadow-2xl border
      animate-slide-up max-w-sm
      ${isSuccess
        ? 'bg-slate-900 border-emerald-500/40'
        : 'bg-slate-900 border-red-500/40'
      }`}
    >
      {/* Icon */}
      <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center
        ${isSuccess ? 'bg-emerald-400/10' : 'bg-red-400/10'}`}>
        {isSuccess ? (
          <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        ) : (
          <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        )}
      </div>

      {/* Text */}
      <div className="flex-1 pt-0.5">
        <p className={`text-sm font-semibold ${isSuccess ? 'text-emerald-400' : 'text-red-400'}`}>
          {isSuccess ? 'Message sent successfully!' : 'Something went wrong'}
        </p>
        <p className="text-xs text-slate-400 mt-0.5">
          {isSuccess
            ? "Thanks for reaching out — I'll get back to you within 24 hours."
            : 'Please try again or email me directly at tugasjerwin7@gmail.com'}
        </p>
      </div>

      {/* Close */}
      <button onClick={onClose} className="shrink-0 text-slate-600 hover:text-slate-300 transition-colors mt-0.5">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  )
}

export default function Contact() {
  const [toast, setToast] = useState(null) // 'success' | 'error' | null
  const [sending, setSending] = useState(false)
  const formRef = useRef(null)

  async function handleSubmit(e) {
    e.preventDefault()
    setSending(true)
    const FORMSPREE_ID = 'xpzgnkab'
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(Object.fromEntries(new FormData(e.target))),
      })
      if (res.ok) {
        setToast('success')
        formRef.current?.reset()
      } else {
        setToast('error')
      }
    } catch {
      setToast('error')
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contact" className="py-24 px-6 max-w-5xl mx-auto">
      <p className="section-subline">06. what's next</p>
      <h2 className="section-heading">Get In Touch</h2>

      {/* Availability banner */}
      <div className="mt-6 mb-8 inline-flex items-center gap-3 bg-emerald-400/5 border border-emerald-400/20 rounded-xl px-5 py-3">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
        <p className="text-sm text-slate-300">
          <span className="text-emerald-400 font-medium">Available for freelance projects.</span>
          {' '}I typically respond within 24 hours.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Left — copy */}
        <div>
          <p className="text-slate-400 leading-relaxed mb-6">
            Whether you need a data pipeline built, a web application developed, or just want
            to discuss a project idea — drop me a message and I'll get back to you.
          </p>

          <ul className="space-y-3 text-sm text-slate-400">
            {[
              'Data pipeline & ETL development',
              'Cloud data solutions (AWS / GCP)',
              'Web application development',
              'WordPress sites & custom themes',
              'AI workflow integration',
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-accent">▸</span> {item}
              </li>
            ))}
          </ul>

          {/* Social links */}
          <div className="mt-10 flex items-center gap-5 text-slate-500">
            <a href="https://github.com/Jerwinnnn" target="_blank" rel="noopener noreferrer"
              className="hover:text-white transition-colors" aria-label="GitHub">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/jerwin-tugas-674818275/" target="_blank" rel="noopener noreferrer"
              className="hover:text-white transition-colors" aria-label="LinkedIn">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="mailto:tugasjerwin7@gmail.com"
              className="hover:text-white transition-colors text-xs font-mono" aria-label="Email">
              tugasjerwin7@gmail.com
            </a>
          </div>
        </div>

        {/* Right — form */}
        <div>
          <form ref={formRef} className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm text-slate-400 mb-1.5">Name</label>
                <input id="name" name="name" type="text" required placeholder="Your name"
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-sm
                             text-slate-200 placeholder-slate-600 focus:outline-none focus:border-accent transition-colors" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-slate-400 mb-1.5">Email</label>
                <input id="email" name="email" type="email" required placeholder="you@example.com"
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-sm
                             text-slate-200 placeholder-slate-600 focus:outline-none focus:border-accent transition-colors" />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm text-slate-400 mb-1.5">Subject</label>
              <input id="subject" name="subject" type="text" required placeholder="Project inquiry / question"
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-sm
                           text-slate-200 placeholder-slate-600 focus:outline-none focus:border-accent transition-colors" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm text-slate-400 mb-1.5">Message</label>
              <textarea id="message" name="message" rows={5} required placeholder="Tell me about your project..."
                className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-sm
                           text-slate-200 placeholder-slate-600 focus:outline-none focus:border-accent transition-colors resize-none" />
            </div>
            <button type="submit" disabled={sending} className="btn-primary disabled:opacity-60">
              {sending ? 'Sending…' : 'Send Message'}
              {!sending && (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              )}
            </button>
          </form>
        </div>
      </div>

      {/* Toast notification */}
      {toast && <Toast type={toast} onClose={() => setToast(null)} />}
    </section>
  )
}
