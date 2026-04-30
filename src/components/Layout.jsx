import { Link } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';

const Layout = ({ children }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <header className="sticky top-0 z-30 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950/95 px-2 sm:px-3 py-3 sm:py-4 backdrop-blur-sm md:px-6 lg:px-8">
        <div className="mx-auto flex w-full items-center justify-between gap-2 sm:gap-4">
          <Link to="/" className="text-xl sm:text-2xl font-semibold text-slate-900 dark:text-white">
            TASTY
          </Link>
          <nav className="flex flex-wrap items-center gap-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 sm:gap-2 md:gap-3">
            <Link to="/" className="rounded-full px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm transition hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white">
              Home
            </Link>
            <Link to="/browse" className="rounded-full px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm transition hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white">
              Explore
            </Link>
            <Link to="/saved" className="rounded-full px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm transition hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white">
              Saved
            </Link>
            <Link to="/contact" className="rounded-full px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm transition hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white">
              Contact
            </Link>
            <button
              type="button"
              onClick={toggleTheme}
              className="rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm text-slate-900 dark:text-slate-100 transition hover:bg-slate-50 dark:hover:bg-slate-800"
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
          </nav>
        </div>
      </header>

      <main className="w-full px-2 py-4 sm:px-3 sm:py-6 md:py-8 md:px-6 lg:px-8">{children}</main>

      <footer className="border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 mt-12 sm:mt-16">
        <div className="mx-auto w-full px-2 py-6 sm:px-3 sm:py-8 md:px-6 md:py-10 lg:px-8">
          <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-2 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white mb-3 sm:mb-4">TASTY</h3>
              <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm">
                Discover recipes that make every meal feel delicious. Browse, save, and cook with confidence.
              </p>
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white mb-3 sm:mb-4">Navigation</h4>
              <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                <li><Link to="/" className="hover:text-slate-900 dark:hover:text-white">Home</Link></li>
                <li><Link to="/browse" className="hover:text-slate-900 dark:hover:text-white">Explore</Link></li>
                <li><Link to="/saved" className="hover:text-slate-900 dark:hover:text-white">Saved</Link></li>
                <li><Link to="/contact" className="hover:text-slate-900 dark:hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white mb-3 sm:mb-4">Categories</h4>
              <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                <li><Link to="/browse?c=Beef" className="hover:text-slate-900 dark:hover:text-white">Beef</Link></li>
                <li><Link to="/browse?c=Chicken" className="hover:text-slate-900 dark:hover:text-white">Chicken</Link></li>
                <li><Link to="/browse?c=Dessert" className="hover:text-slate-900 dark:hover:text-white">Dessert</Link></li>
                <li><Link to="/browse?c=Seafood" className="hover:text-slate-900 dark:hover:text-white">Seafood</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white mb-3 sm:mb-4">Connect</h4>
              <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm">
                Have feedback? Reach out via our contact form.
              </p>
              <Link
                to="/contact"
                className="inline-block mt-2 text-xs sm:text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300"
              >
                Get in touch →
              </Link>
            </div>
          </div>
          <div className="border-t border-slate-200 dark:border-slate-800 mt-6 sm:mt-8 pt-4 sm:pt-6 md:pt-8 text-center text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            <p>&copy; 2026 TASTY. Built with React and TheMealDB API.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
