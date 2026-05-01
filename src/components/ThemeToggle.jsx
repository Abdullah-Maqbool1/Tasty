import { useTheme } from '../hooks/useTheme';

/**
 * Theme toggle button component
 * Allows users to switch between light and dark mode
 */
const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm text-slate-900 dark:text-slate-100 transition hover:bg-slate-50 dark:hover:bg-slate-800"
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  );
};

export default ThemeToggle;
