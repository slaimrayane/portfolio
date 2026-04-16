import { motion } from 'framer-motion'
import { ArrowRight, FolderGit2, Link, Mail } from 'lucide-react'

function Hero({ personalInfo, socialLinks }) {
  return (
    <section id="accueil" className="relative overflow-hidden pt-10 sm:pt-16">
      <div className="pointer-events-none absolute inset-x-8 top-8 h-72 rounded-full bg-brand-300/30 blur-3xl" aria-hidden="true" />
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 pb-16 sm:pb-20 lg:grid-cols-[1.3fr_1fr] lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
        >
          <p className="text-sm uppercase tracking-[0.3em] text-brand-400 dark:text-brand-200">Portfolio</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
            {personalInfo.fullName}
          </h1>
          <p className="mt-4 text-lg text-brand-400 sm:text-xl dark:text-brand-100">{personalInfo.title}</p>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-700 dark:text-slate-200">{personalInfo.bio}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-brand-300 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-400"
            >
              Me contacter
              <ArrowRight size={15} />
            </a>
            <a
              href={personalInfo.cv}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-white/80 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-brand-300 hover:text-brand-400 dark:border-slate-500 dark:bg-slate-900/65 dark:text-white dark:hover:border-brand-300 dark:hover:text-brand-100"
            >
              Voir mon CV
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3 text-sm">
            <a href={socialLinks.github} target="_blank" rel="noreferrer" className="social-link">
              <FolderGit2 size={16} />
              GitHub
            </a>
            <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" className="social-link">
              <Link size={16} />
              LinkedIn
            </a>
            <a href={`mailto:${personalInfo.email}`} className="social-link">
              <Mail size={16} />
              Email
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65, delay: 0.15 }}
          className="relative mx-auto w-full max-w-xs"
        >
          <div className="absolute -inset-2 rounded-[2rem] bg-gradient-to-b from-brand-300/70 to-transparent blur-lg" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-[2rem] border border-amber-200 bg-white/80 p-2 dark:border-slate-500 dark:bg-slate-900/70">
            <img
              src={personalInfo.profilePicture}
              alt={`Photo de ${personalInfo.fullName}`}
              className="h-[420px] w-full rounded-[1.5rem] object-cover object-center"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
