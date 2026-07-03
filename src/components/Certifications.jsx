const LINKEDIN_CERTS_URL = 'https://www.linkedin.com/in/jerwin-tugas-674818275/details/certifications/'

const CERTS = [
  {
    title: 'Claude in Amazon Bedrock',
    issuer: 'Anthropic',
    date: 'May 2026',
    credentialId: '534pdcrypdo',
    verifyUrl: LINKEDIN_CERTS_URL,
    badge: '🤖',
  },
  {
    title: 'Digital Transformation Insights: Transportation and Aviation Services',
    issuer: 'Skillsoft',
    date: 'Apr 2026',
    credentialId: '19836J4413',
    verifyUrl: LINKEDIN_CERTS_URL,
    badge: '✈️',
  },
  {
    title: 'Certificate of Completion: AI Fluency Framework & Foundations',
    issuer: 'Anthropic',
    date: 'Apr 2026',
    credentialId: 'b2i5e-mp5J',
    verifyUrl: LINKEDIN_CERTS_URL,
    badge: '🤖',
  },
  {
    title: 'Certificate of Completion: Introduction to Subagents',
    issuer: 'Anthropic',
    date: 'Apr 2026',
    credentialId: 'a9c0dm9yys',
    verifyUrl: LINKEDIN_CERTS_URL,
    badge: '🤖',
  },
  {
    title: 'Certificate of Completion: Introduction to Agent Skills',
    issuer: 'Anthropic',
    date: 'Apr 2026',
    credentialId: 'veqzvoejpz',
    verifyUrl: LINKEDIN_CERTS_URL,
    badge: '🤖',
  },
  {
    title: 'Certificate of Completion: Claude 101',
    issuer: 'Anthropic',
    date: 'Feb 2026',
    credentialId: 'cymcSnwuyp',
    verifyUrl: LINKEDIN_CERTS_URL,
    badge: '🤖',
  },
  {
    title: 'Partner Training – Retail and Consumer Goods Industry Specialization for Gen AI & LLM',
    issuer: 'Databricks',
    date: 'Feb 2026',
    credentialId: '17.5J203712',
    verifyUrl: LINKEDIN_CERTS_URL,
    badge: '🔥',
  },
  {
    title: 'Primerli – Travel Industry Foundations',
    issuer: 'Primerli',
    date: 'Jan 2025',
    credentialId: 'PRI-TIF-2025',
    verifyUrl: LINKEDIN_CERTS_URL,
    badge: '🌍',
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6 max-w-5xl mx-auto">
      <p className="section-subline">05. credentials</p>
      <h2 className="section-heading">Certifications</h2>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {CERTS.map((cert) => (
          <div
            key={cert.credentialId}
            className="group bg-slate-900 border border-slate-800 rounded-xl p-6 flex gap-4 hover:border-accent/50 transition-colors duration-200"
          >
            {/* Badge icon */}
            <div className="shrink-0 w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center text-2xl">
              {cert.badge}
            </div>

            <div className="min-w-0">
              <h3 className="text-white font-semibold text-sm leading-snug group-hover:text-accent-light transition-colors">
                {cert.title}
              </h3>
              <p className="text-slate-400 text-sm mt-0.5">{cert.issuer}</p>

              <div className="flex items-center justify-between gap-4 mt-3">
                <div className="flex items-center gap-2">
                  {/* Verified badge */}
                  <span className="inline-flex items-center gap-1 text-xs text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full">
                    <svg className="w-3 h-3" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Verified
                  </span>
                  <span className="font-mono text-xs text-slate-500">{cert.date}</span>
                </div>

                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-accent hover:text-accent-light font-medium transition-colors shrink-0"
                >
                  View credential →
                </a>
              </div>

              {cert.credentialId && (
                <p className="font-mono text-xs text-slate-600 mt-1">ID: {cert.credentialId}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
