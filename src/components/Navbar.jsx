import { useState } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Navbar = ({
  links = [
    { path: '/', label: 'Home' },
    { path: '/browse', label: 'Explore' },
    { path: '/saved', label: 'Saved' },
    { path: '/contact', label: 'Contact' },
  ],
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center gap-2">
      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-2">
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className="border-4 border-black dark:border-white bg-white dark:bg-black px-3 py-2 text-sm font-black text-black dark:text-white transition hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black"
          >
            {link.label}
          </Link>
        ))}
      </div>

      <ThemeToggle />

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 border-4 border-black dark:border-white bg-white dark:bg-black text-black dark:text-white"
        aria-label="Toggle Menu"
      >
        <span className={`block w-5 h-0.5 bg-current transition-transform ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
        <span className={`block w-5 h-0.5 bg-current transition-opacity ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
        <span className={`block w-5 h-0.5 bg-current transition-transform ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
      </button>

      {/* Mobile Dropdown Overlay */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 border-b-4 border-black dark:border-white bg-white dark:bg-black p-4 flex flex-col gap-2 md:hidden">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="px-4 py-3 text-lg font-black border-2 border-transparent hover:border-black dark:hover:border-white"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;