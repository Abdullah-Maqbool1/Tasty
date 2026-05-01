import { Link } from 'react-router-dom';

/**
 * Header component - displays the site logo/branding
 * @param {Object} props
 * @param {string} props.title - The header title/logo text
 */
const Header = ({ title = 'TASTY' }) => {
  return (
    <Link to="/" className="text-xl sm:text-2xl font-semibold text-slate-900 dark:text-white hover:opacity-80 transition">
      {title}
    </Link>
  );
};

export default Header;
