import { Link } from 'react-router-dom';

/**
 * Sub-components to keep code DRY (Don't Repeat Yourself)
 */
const FooterHeading = ({ children }) => (
  <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white mb-3 sm:mb-4">
    {children}
  </h3>
);

const FooterLink = ({ to, children }) => (
  <li>
    <Link to={to} className="hover:text-slate-900 dark:hover:text-white transition">
      {children}
    </Link>
  </li>
);

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 mt-12 sm:mt-16">
      <div className="mx-auto w-full px-2 py-6 sm:px-3 sm:py-8 md:px-6 md:py-10 lg:px-8">
        
        <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-2 sm:grid-cols-2 lg:grid-cols-4">
          
          {/* Brand Section */}
          <div>
            <FooterHeading>TASTY</FooterHeading>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm">
              Discover recipes that make every meal feel delicious. Browse, save, and cook with confidence.
            </p>
          </div>

          {/* Navigation Section */}
          <div>
            <FooterHeading>Navigation</FooterHeading>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/browse">Explore</FooterLink>
              <FooterLink to="/saved">Saved</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
            </ul>
          </div>

          {/* Categories Section */}
          <div>
            <FooterHeading>Categories</FooterHeading>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              <FooterLink to="/browse?c=Beef">Beef</FooterLink>
              <FooterLink to="/browse?c=Chicken">Chicken</FooterLink>
              <FooterLink to="/browse?c=Dessert">Dessert</FooterLink>
              <FooterLink to="/browse?c=Seafood">Seafood</FooterLink>
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <FooterHeading>Connect</FooterHeading>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm">
              Have feedback? Reach out via our contact form.
            </p>
            <Link 
              to="/contact" 
              className="inline-block mt-2 text-xs sm:text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition"
            >
              Get in touch →
            </Link>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-slate-200 dark:border-slate-800 mt-6 sm:mt-8 pt-4 sm:pt-6 md:pt-8 text-center text-xs sm:text-sm text-slate-500 dark:text-slate-400">
          <p>&copy; {new Date().getFullYear()} TASTY. Built with React and TheMealDB API.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
