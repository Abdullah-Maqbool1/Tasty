import { Link } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';

const Layout = ({ children }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <header className="sticky top-0 z-30 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950/95 px-3 py-4 backdrop-blur-sm sm:px-4 md:px-6 lg:px-8">
        <div className="mx-auto flex w-full items-center justify-between gap-4">
          <Link to="/" className="text-2xl font-semibold text-slate-900 dark:text-white">
            TASTY
          </Link>
          <nav className="flex flex-wrap items-center gap-2 text-slate-600 dark:text-slate-300 sm:gap-3">
            <Link to="/" className="rounded-full px-3 py-2 text-sm sm:text-base transition hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white">
              Home
            </Link>
            <Link to="/browse" className="rounded-full px-3 py-2 text-sm sm:text-base transition hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white">
              Explore
            </Link>
            <Link to="/saved" className="rounded-full px-3 py-2 text-sm sm:text-base transition hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white">
              Saved
            </Link>
            <Link to="/contact" className="rounded-full px-3 py-2 text-sm sm:text-base transition hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white">
              Contact
            </Link>
            <button
              type="button"
              onClick={toggleTheme}
              className="rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-3 py-2 text-slate-900 dark:text-slate-100 transition hover:bg-slate-50 dark:hover:bg-slate-800"
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
          </nav>
        </div>
      </header>

      <main className="w-full px-3 py-8 sm:px-4 md:px-6 lg:px-8">{children}</main>

      <footer className="border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 mt-16">
        <div className="mx-auto w-full px-3 py-8 sm:px-4 md:px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">TASTY</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Discover recipes that make every meal feel delicious. Browse, save, and cook with confidence.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Navigation</h4>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li><Link to="/" className="hover:text-slate-900 dark:hover:text-white">Home</Link></li>
                <li><Link to="/browse" className="hover:text-slate-900 dark:hover:text-white">Explore</Link></li>
                <li><Link to="/saved" className="hover:text-slate-900 dark:hover:text-white">Saved</Link></li>
                <li><Link to="/contact" className="hover:text-slate-900 dark:hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Categories</h4>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li><Link to="/browse?c=Beef" className="hover:text-slate-900 dark:hover:text-white">Beef</Link></li>
                <li><Link to="/browse?c=Chicken" className="hover:text-slate-900 dark:hover:text-white">Chicken</Link></li>
                <li><Link to="/browse?c=Dessert" className="hover:text-slate-900 dark:hover:text-white">Dessert</Link></li>
                <li><Link to="/browse?c=Seafood" className="hover:text-slate-900 dark:hover:text-white">Seafood</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white mb-4">Connect</h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Have feedback? Reach out via our contact form.
              </p>
              <Link
                to="/contact"
                className="inline-block mt-2 text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300"
              >
                Get in touch →
              </Link>
            </div>
          </div>
          <div className="border-t border-slate-200 dark:border-slate-800 mt-8 pt-8 text-center text-sm text-slate-500 dark:text-slate-400">
            <p>&copy; 2026 TASTY. Built with React and TheMealDB API.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
