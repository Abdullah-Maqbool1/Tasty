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
      className="rounded-full border-4 border-black dark:border-white bg-white dark:bg-black px-3 py-2 text-xs sm:text-sm font-black text-black dark:text-white transition hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black"
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  );
};

export default ThemeToggle;
