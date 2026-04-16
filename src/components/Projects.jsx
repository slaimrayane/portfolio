import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ExternalLink, FolderGit2, X } from 'lucide-react'
import SectionTitle from './SectionTitle'

function projectMatchesFilter(project, filter) {
  if (filter === 'Tous') return true

  const groups = {
    JavaScript: ['React Native', 'Express.js', 'MongoDB', 'JavaScript'],
    Python: ['Python', 'Streamlit', 'FAISS', 'Google GenAI API'],
    Java: ['Java', 'Algorithmique'],
    Data: ['FAISS', 'Power BI', 'Data', 'Streamlit'],
    Mobile: ['React Native'],
  }

  return project.technologies.some((tech) => groups[filter]?.includes(tech))
}

function ProjectModal({ project, onClose }) {
  if (!project) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/75 px-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.98, opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="w-full max-w-2xl rounded-3xl border border-amber-200 bg-white p-6 dark:border-slate-600 dark:bg-slate-900"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{project.name}</h3>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-amber-300 p-2 text-slate-700 transition hover:text-brand-400 dark:border-slate-500 dark:text-slate-200 dark:hover:text-brand-200"
            aria-label="Fermer"
          >
            <X size={16} />
          </button>
        </div>

        <p className="mt-4 text-slate-700 dark:text-slate-200">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-amber-300 bg-amber-50/80 px-3 py-1 text-xs text-slate-700 dark:border-slate-500 dark:bg-slate-900/70 dark:text-slate-100"
            >
              {tech}
            </span>
          ))}
        </div>

        <p className="mt-5 text-sm text-brand-400 dark:text-brand-100">
          <span className="font-semibold text-brand-400 dark:text-brand-200">Rôle :</span> {project.role}
        </p>

        <ul className="mt-4 grid gap-2 text-sm text-slate-700 dark:text-slate-200">
          {project.features.map((feature) => (
            <li
              key={feature}
              className="rounded-xl border border-amber-200 bg-amber-50/60 px-3 py-2 dark:border-slate-700 dark:bg-slate-800/50"
            >
              {feature}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-3">
          {project.github ? (
            <a href={project.github} target="_blank" rel="noreferrer" className="social-link">
              <FolderGit2 size={15} />
              Code source
            </a>
          ) : null}
          {project.demo ? (
            <a href={project.demo} target="_blank" rel="noreferrer" className="social-link">
              <ExternalLink size={15} />
              Démo live
            </a>
          ) : null}
        </div>
      </motion.div>
    </motion.div>
  )
}

function Projects({ projects, filters }) {
  const [activeFilter, setActiveFilter] = useState('Tous')
  const [selectedProject, setSelectedProject] = useState(null)

  const visibleProjects = useMemo(
    () => projects.filter((project) => projectMatchesFilter(project, activeFilter)),
    [projects, activeFilter],
  )

  return (
    <section id="projets" className="section-shell">
      <SectionTitle
        eyebrow="Projets"
        title="Réalisations récentes"
        subtitle="Sélection de projets full-stack, data et IA avec impact mesurable."
      />

      <div className="mb-6 flex flex-wrap gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
              activeFilter === filter
                ? 'border-brand-300 bg-brand-300 text-white'
                : 'border-amber-300 bg-white/80 text-slate-700 hover:border-brand-300 hover:text-brand-400 dark:border-slate-500 dark:bg-slate-900/60 dark:text-slate-200'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        {visibleProjects.map((project, index) => (
          <motion.article
            key={project.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="card-panel"
          >
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{project.name}</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-200">{project.description}</p>
            <p className="mt-4 text-sm text-brand-400 dark:text-brand-100">{project.role}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-amber-300 bg-amber-50/80 px-3 py-1 text-xs text-slate-700 dark:border-slate-500 dark:bg-slate-900/70 dark:text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              <button type="button" onClick={() => setSelectedProject(project)} className="social-link">
                Voir détails
              </button>
              {project.github ? (
                <a href={project.github} target="_blank" rel="noreferrer" className="social-link">
                  <FolderGit2 size={15} />
                  GitHub
                </a>
              ) : null}
            </div>
          </motion.article>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject ? <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} /> : null}
      </AnimatePresence>
    </section>
  )
}

export default Projects
