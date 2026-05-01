import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';

/**
 * Main layout component
 * Wraps all pages with header, navbar, and footer
 * @param {Object} props
 * @param {ReactNode} props.children - Page content
 */
const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col">
      {/* Header and Navigation */}
      <header className="sticky top-0 z-30 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950/95 px-2 sm:px-3 py-3 sm:py-4 backdrop-blur-sm md:px-6 lg:px-8">
        <div className="mx-auto flex w-full items-center justify-between gap-2 sm:gap-4">
          <Header title="TASTY" />
          <Navbar />
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full flex-1 px-2 py-4 sm:px-3 sm:py-6 md:py-8 md:px-6 lg:px-8">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
