const STATS = [
  { value: '3+', label: 'Years Experience' },
  { value: '6+', label: 'Projects Shipped' },
  { value: '8', label: 'Certifications' },
]

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center px-6 max-w-5xl mx-auto pt-16"
    >
      {/* Availability badge */}
      <div className="animate-slide-up mb-6" style={{ animationDelay: '0s' }}>
        <span className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-3 py-1.5 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Available for freelance &amp; consulting
        </span>
      </div>

      <div className="animate-slide-up" style={{ animationDelay: '0.1s' }}>
        <p className="font-mono text-accent text-sm mb-4">Hi, my name is</p>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
          Jerwin Tugas.
        </h1>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-500 leading-tight mt-2">
          I engineer data at scale.
        </h2>
      </div>

      <p
        className="mt-8 max-w-xl text-slate-400 text-lg leading-relaxed animate-slide-up"
        style={{ animationDelay: '0.2s' }}
      >
        I'm a <span className="text-slate-200 font-medium">Data Engineering Management &amp; Governance Analyst</span> at Accenture,
        specializing in cloud data pipelines, governance frameworks, and AI-assisted workflows.
        I also build web applications and automation tools for clients as a freelancer.
      </p>

      <div
        className="mt-10 flex flex-wrap gap-4 animate-slide-up"
        style={{ animationDelay: '0.3s' }}
      >
        <a href="#projects" className="btn-primary">
          View My Work
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
        <a href="#contact" className="btn-outline">
          Hire Me
        </a>
      </div>

      {/* Stats row */}
      <div
        className="mt-16 flex flex-wrap gap-8 animate-slide-up"
        style={{ animationDelay: '0.4s' }}
      >
        {STATS.map(({ value, label }) => (
          <div key={label}>
            <p className="text-3xl font-bold text-white">{value}</p>
            <p className="text-xs font-mono text-slate-500 mt-0.5">{label}</p>
          </div>
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 text-slate-600 animate-fade-in" style={{ animationDelay: '1s' }}>
        <span className="text-xs font-mono">scroll</span>
        <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
