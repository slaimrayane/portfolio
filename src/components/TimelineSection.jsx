import { motion } from 'framer-motion'
import SectionTitle from './SectionTitle'

function TimelineCard({ title, subtitle, date, description, accent, link }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45 }}
      className="card-panel"
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{title}</h3>
        <span className="rounded-full border border-amber-300 bg-amber-50/80 px-3 py-1 text-xs uppercase tracking-wider text-slate-700 dark:border-slate-500 dark:bg-slate-900/70 dark:text-slate-200">
          {date}
        </span>
      </div>
      <p className={`mt-2 text-sm font-medium ${accent}`}>{subtitle}</p>
      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-block text-sm leading-relaxed text-brand-400 underline decoration-brand-300/60 underline-offset-4 transition hover:text-brand-300 dark:text-brand-200"
        >
          {description}
        </a>
      ) : (
        <p className="mt-4 text-sm leading-relaxed text-slate-700 dark:text-slate-200">{description}</p>
      )}
    </motion.article>
  )
}

function ExperienceSection({ experience }) {
  return (
    <section id="experience" className="section-shell">
      <SectionTitle eyebrow="Expérience" title="Stages et missions" />
      <div className="grid gap-4">
        {experience.map((item) => (
          <TimelineCard
            key={`${item.company}-${item.role}`}
            title={item.company}
            subtitle={item.role}
            date={item.duration}
            description={`${item.responsibilities} ${item.achievements}`}
            accent="text-brand-400 dark:text-brand-200"
          />
        ))}
      </div>
    </section>
  )
}

function EducationSection({ education }) {
  return (
    <section id="formation" className="section-shell">
      <SectionTitle eyebrow="Formation" title="Parcours académique" />
      <div className="grid gap-4">
        {education.map((item) => (
          <TimelineCard
            key={`${item.school}-${item.degree}`}
            title={item.school}
            subtitle={item.degree}
            date={item.dates}
            description={item.description}
            accent="text-brand-400 dark:text-brand-200"
          />
        ))}
      </div>
    </section>
  )
}

function CertificationsSection({ certifications }) {
  return (
    <section id="certifications" className="section-shell">
      <SectionTitle eyebrow="Certifications" title="Formations certifiantes" />
      <div className="grid gap-4 md:grid-cols-2">
        {certifications.map((item) => (
          <TimelineCard
            key={`${item.name}-${item.organization}`}
            title={item.name}
            subtitle={item.organization}
            date={item.date}
            description={item.link ? 'Voir le certificat' : 'Certification validée'}
            link={item.link}
            accent="text-emerald-700 dark:text-emerald-200"
          />
        ))}
      </div>
    </section>
  )
}

export { ExperienceSection, EducationSection, CertificationsSection }
