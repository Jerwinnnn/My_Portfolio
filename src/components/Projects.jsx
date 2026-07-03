const PROJECTS = [
  {
    title: 'Instant Feedback System (IFS)',
    description:
      'A web and mobile application supporting cleaners and supervisors at Changi Airport to manage toilet cleaning activities and fault reporting in real time.',
    tech: ['Python', 'AWS', 'OutSystems'],
    github: null,
    live: null,
    status: 'live',
  },
  {
    title: 'W Express',
    description:
      'A full-featured logistics website with an intuitive design, efficient shipment tracking system, and seamless experience for both customers and administrators.',
    tech: ['PHP', 'WordPress', 'MySQL', 'Elementor'],
    github: null,
    live: 'https://www.wwwexpress.com.ph/',
    status: 'live',
  },
  {
    title: 'Feati University',
    description:
      'A fully responsive university website with online application, enrollment management, and real-time news and events.',
    tech: ['PHP', 'WordPress', 'MySQL', 'Java', 'Custom Theme'],
    github: null,
    live: 'https://www.featiu.edu.ph/',
    status: 'live',
  },
  {
    title: 'Feati Schools Inc. (FSI)',
    description:
      'Responsive website built with a custom WordPress theme and Advanced Custom Fields for flexible, dynamic content management.',
    tech: ['PHP', 'WordPress', 'Custom Theme', 'ACF'],
    github: null,
    live: null,
    status: 'in-progress',
  },
  {
    title: "Napalinga's Children Clinic",
    description:
      'A web-based appointment system for a pediatric clinic, enabling patients to book and manage appointments online.',
    tech: ['Flask', 'Python', 'MongoDB'],
    github: null,
    live: null,
    status: 'in-progress',
  },
  {
    title: "Sabbi's Burger",
    description:
      'A responsive web-based POS (Point of Sale) system for a burger restaurant, covering order management and sales tracking.',
    tech: ['Flask', 'Python', 'MongoDB'],
    github: null,
    live: null,
    status: 'in-progress',
  },
]

function ExternalIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  )
}

function GithubIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

function StatusBadge({ status }) {
  if (status === 'live') {
    return (
      <span className="inline-flex items-center gap-1 text-xs font-mono text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 px-2 py-0.5 rounded-full">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
        Live
      </span>
    )
  }
  return (
    <span className="inline-flex items-center gap-1 text-xs font-mono text-amber-400 bg-amber-400/10 border border-amber-400/20 px-2 py-0.5 rounded-full">
      <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
      In Progress
    </span>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-5xl mx-auto">
      <p className="section-subline">02. what I've built</p>
      <h2 className="section-heading">Featured Projects</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {PROJECTS.map((project) => (
          <article
            key={project.title}
            className="group flex flex-col bg-slate-900 border border-slate-800 rounded-xl p-6
                       hover:border-accent/40 hover:-translate-y-1 transition-all duration-200"
          >
            {/* Top row */}
            <div className="flex items-start justify-between mb-4">
              <StatusBadge status={project.status} />
              <div className="flex items-center gap-3 text-slate-500">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                    className="hover:text-white transition-colors" aria-label="GitHub">
                    <GithubIcon />
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer"
                    className="hover:text-white transition-colors" aria-label="Live demo">
                    <ExternalIcon />
                  </a>
                )}
              </div>
            </div>

            <h3 className="text-lg font-semibold text-white group-hover:text-accent-light transition-colors mb-2">
              {project.title}
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed flex-1">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-5">
              {project.tech.map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="text-center mt-12">
        <a href="https://github.com/Jerwinnnn" target="_blank" rel="noopener noreferrer"
          className="btn-outline">
          View More on GitHub
          <ExternalIcon />
        </a>
      </div>
    </section>
  )
}
