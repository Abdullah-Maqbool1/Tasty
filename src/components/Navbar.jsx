import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

/**
 * Navigation bar component
 * Displays navigation links and theme toggle
 * @param {Array} props.links - Navigation link objects with path and label
 */
const Navbar = ({
  links = [
    { path: '/', label: 'Home' },
    { path: '/browse', label: 'Explore' },
    { path: '/saved', label: 'Saved' },
    { path: '/contact', label: 'Contact' },
  ],
}) => {
  return (
    <nav className="flex flex-wrap items-center gap-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 sm:gap-2 md:gap-3">
      {links.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          className="rounded-full px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm transition hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white"
        >
          {link.label}
        </Link>
      ))}
      <ThemeToggle />
    </nav>
  );
};

export default Navbar;
