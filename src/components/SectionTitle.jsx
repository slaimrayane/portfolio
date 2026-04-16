import { motion } from 'framer-motion'

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="mb-8"
    >
      <p className="text-xs uppercase tracking-[0.25em] text-brand-400 dark:text-brand-200">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl dark:text-white">{title}</h2>
      {subtitle ? (
        <p className="mt-3 max-w-2xl text-sm text-slate-600 sm:text-base dark:text-slate-300">{subtitle}</p>
      ) : null}
    </motion.div>
  )
}

export default SectionTitle
