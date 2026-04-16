import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import SectionTitle from './SectionTitle'

function About({ bio, location }) {
  return (
    <section id="a-propos" className="section-shell">
      <SectionTitle eyebrow="À propos" title="Mon profil" subtitle="Une vision produit + technique pour livrer des solutions utiles." />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="card-panel"
      >
        <p className="text-base leading-relaxed text-slate-700 sm:text-lg dark:text-slate-100">{bio}</p>
        <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-50/80 px-4 py-2 text-sm text-slate-700 dark:border-slate-600 dark:bg-slate-900/70 dark:text-slate-200">
          <MapPin size={14} />
          {location}
        </div>
      </motion.div>
    </section>
  )
}

export default About
