const JOBS = [
  {
    company: 'Accenture',
    role: 'Data Engineering Management & Governance Analyst',
    period: '2026 — Present',
    bullets: [
      'Designed and deployed scalable cloud data solutions on Azure / AWS / GCP, covering ingestion, storage, and processing layers.',
      'Implemented data governance frameworks including metadata cataloging, data lineage tracking, and access control policies to ensure compliance and data quality.',
      'Built and optimized ETL/ELT pipelines using cloud-native services (e.g. Azure Data Factory, Databricks, BigQuery) to support enterprise analytics workloads.',
      'Collaborated with data stewards, architects, and business stakeholders to define governance standards and enforce data classification policies across platforms.',
      'Monitored pipeline health and data quality metrics, proactively resolving issues to maintain SLA commitments for downstream consumers.',
    ],
  },
  {
    company: 'i.T Resources Corporation',
    role: 'Junior Software Developer',
    period: '2024 — 2026',
    bullets: [
      'Built and maintained client websites using WordPress, delivering responsive layouts aligned with brand guidelines.',
      'Integrated third-party APIs and plugins to extend site functionality and improve user experience.',
      'Coordinated with designers and project managers to deliver projects on schedule.',
    ],
  },
  {
    company: 'Paidesk Community',
    role: 'Junior Web Developer',
    period: '2024',
    bullets: [
      'Built and maintained the admin dashboard of the clients website using Laravel',
      'Creating RestAPI using Ajax',
      'Coordinated with team and project managers to deliver projects on schedule.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 max-w-5xl mx-auto">
      <p className="section-subline">03. where I've worked</p>
      <h2 className="section-heading">Experience</h2>

      <div className="mt-8 space-y-0">
        {JOBS.map((job, i) => (
          <div key={job.company} className="relative pl-8 pb-10 last:pb-0">
            {/* Timeline line */}
            {i < JOBS.length - 1 && (
              <div className="absolute left-[9px] top-6 bottom-0 w-px bg-slate-800" />
            )}
            {/* Timeline dot */}
            <div className="absolute left-0 top-1.5 w-[18px] h-[18px] rounded-full border-2 border-accent bg-slate-950" />

            <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-slate-700 transition-colors">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                <h3 className="text-white font-semibold">
                  {job.role}{' '}
                  <span className="text-accent">@ {job.company}</span>
                </h3>
                <span className="font-mono text-xs text-slate-500">{job.period}</span>
              </div>

              <ul className="mt-4 space-y-2">
                {job.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-sm text-slate-400 leading-relaxed">
                    <span className="text-accent mt-0.5 shrink-0">▸</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
