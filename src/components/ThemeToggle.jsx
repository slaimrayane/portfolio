import { Moon, Sun } from 'lucide-react'

function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-white/80 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-brand-300 hover:text-brand-400 dark:border-slate-600 dark:bg-slate-900/60 dark:text-slate-100 dark:hover:border-brand-300 dark:hover:text-brand-200"
      aria-label="Basculer le thème"
    >
      {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
      {theme === 'dark' ? 'Mode clair' : 'Mode sombre'}
    </button>
  )
}

export default ThemeToggle
