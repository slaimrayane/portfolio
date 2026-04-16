import { motion } from 'framer-motion'
import SectionTitle from './SectionTitle'

function SkillTag({ label }) {
  return (
    <span className="rounded-full border border-amber-300 bg-amber-50/80 px-3 py-1 text-sm text-slate-700 dark:border-slate-500 dark:bg-slate-900/70 dark:text-slate-100">
      {label}
    </span>
  )
}

function Skills({ skills }) {
  return (
    <section id="competences" className="section-shell">
      <SectionTitle eyebrow="Compétences" title="Stack technique et soft skills" />
      <div className="grid gap-4 lg:grid-cols-3">
        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className="card-panel"
        >
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Techniques</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {skills.technical.map((skill) => (
              <SkillTag key={skill} label={skill} />
            ))}
          </div>
        </motion.article>

        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="card-panel"
        >
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Soft skills</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {skills.soft.map((skill) => (
              <SkillTag key={skill} label={skill} />
            ))}
          </div>
        </motion.article>

        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="card-panel"
        >
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Langues</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {skills.languages.map((language) => (
              <SkillTag key={language} label={language} />
            ))}
          </div>
        </motion.article>
      </div>
    </section>
  )
}

export default Skills
