const SKILL_GROUPS = [
  {
    category: 'Data Engineering',
    skills: ['Data Pipelines', 'ETL', 'SQL', 'AWS Lambda', 'DynamoDB', 'DevOps', 'CloudWatch'],
  },
  {
    category: 'AI & Prompt Engineering',
    skills: ['Prompt Engineering'],
  },
  {
    category: 'Backend',
    skills: ['Python', 'Java', 'Spring Boot', 'PHP', 'Laravel', 'MySQL', 'REST APIs'],
  },
  {
    category: 'Frontend & Web',
    skills: ['JavaScript', 'HTML5', 'CSS', 'Ajax', 'WordPress', 'Flask', 'React'],
  },
  {
    category: 'Tools',
    skills: ['Jira','Github','GitFlow','Trello','Bitbucket'],
  },
]

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-5xl mx-auto">
      <p className="section-subline">01. about me</p>
      <h2 className="section-heading">About Me</h2>

      {/* Bio */}
      <div className="max-w-3xl mt-8 space-y-4 text-slate-400 leading-relaxed">
        <p>
          Hello! I'm Jerwin, a Data Engineering Management &amp; Governance Analyst at Accenture
          based in the Philippines. I specialize in building scalable cloud data solutions,
          designing governance frameworks, and delivering reliable data pipelines for enterprise
          analytics workloads.
        </p>
        <p>
          My background spans backend development, cloud platforms, and AI tooling — giving me
          a full-stack view of how data moves from raw ingestion to actionable insight. I enjoy
          turning complex data problems into clean, maintainable solutions.
        </p>
        <p>
          When I'm not working on data infrastructure, I'm exploring new AI tools, tinkering
          with side projects, or leveling up on system design.
        </p>
      </div>

      {/* Skills grouped by category */}
      <div className="mt-12 space-y-6">
        <p className="text-sm font-mono text-slate-500">Technologies &amp; skills:</p>
        {SKILL_GROUPS.map(({ category, skills }) => (
          <div key={category} className="flex flex-col sm:flex-row sm:items-start gap-3">
            <span className="shrink-0 w-44 text-xs font-mono text-slate-500 pt-0.5">
              {category}
            </span>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs font-mono text-accent-light bg-accent/10 border border-accent/20 px-3 py-1 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
