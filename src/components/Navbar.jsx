import ThemeToggle from './ThemeToggle'

const navItems = [
  { href: '#a-propos', label: 'À propos' },
  { href: '#competences', label: 'Compétences' },
  { href: '#projets', label: 'Projets' },
  { href: '#experience', label: 'Expérience' },
  { href: '#formation', label: 'Formation' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#contact', label: 'Contact' },
]

function Navbar({ theme, toggleTheme }) {
  return (
    <header className="sticky top-0 z-50 border-b border-amber-200/70 bg-[#f6f1ea]/85 backdrop-blur dark:border-slate-700/70 dark:bg-slate-950/85">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4 lg:px-8">
        <a href="#accueil" className="text-sm font-bold uppercase tracking-[0.2em] text-brand-400 dark:text-brand-100">
          Rayane
        </a>
        <nav className="hidden items-center gap-4 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-slate-600 transition hover:text-brand-400 dark:text-slate-300 dark:hover:text-brand-200"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </div>
    </header>
  )
}

export default Navbar
