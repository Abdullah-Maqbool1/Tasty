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
    <nav className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-black dark:text-white">
      {links.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          className="rounded-none border-4 border-black dark:border-white bg-white dark:bg-black px-3 py-2 text-xs sm:text-sm font-black text-black dark:text-white transition hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black"
        >
          {link.label}
        </Link>
      ))}
      <ThemeToggle />
    </nav>
  );
};

export default Navbar;