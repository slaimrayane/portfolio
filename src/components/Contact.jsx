import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Send } from 'lucide-react'
import SectionTitle from './SectionTitle'

function Contact({ email, objective }) {
  const [form, setForm] = useState({ name: '', subject: '', message: '' })

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const subject = encodeURIComponent(form.subject || 'Prise de contact portfolio')
    const body = encodeURIComponent(`Nom : ${form.name}\n\nMessage :\n${form.message}`)
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="section-shell pb-20">
      <SectionTitle
        eyebrow="Contact"
        title="Discutons de votre prochain projet"
        subtitle="Formulaire rapide ou contact direct par email."
      />

      <div className="grid gap-4 lg:grid-cols-[1fr_1.1fr]">
        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="card-panel"
        >
          <p className="text-sm uppercase tracking-widest text-brand-400 dark:text-brand-200">Email direct</p>
          <a
            href={`mailto:${email}`}
            className="mt-4 inline-flex items-center gap-2 text-lg font-semibold text-slate-900 transition hover:text-brand-400 dark:text-white dark:hover:text-brand-100"
          >
            <Mail size={18} />
            {email}
          </a>
          <p className="mt-5 text-sm leading-relaxed text-slate-700 dark:text-slate-200">{objective}</p>
        </motion.article>

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.05 }}
          onSubmit={handleSubmit}
          className="card-panel"
        >
          <label className="form-label" htmlFor="name">
            Nom
          </label>
          <input id="name" name="name" value={form.name} onChange={handleChange} className="form-input" required />

          <label className="form-label mt-4" htmlFor="subject">
            Sujet
          </label>
          <input
            id="subject"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            className="form-input"
            required
          />

          <label className="form-label mt-4" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            className="form-input min-h-32"
            required
          />

          <button
            type="submit"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-300 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-400"
          >
            Envoyer
            <Send size={15} />
          </button>
        </motion.form>
      </div>
    </section>
  )
}

export default Contact
