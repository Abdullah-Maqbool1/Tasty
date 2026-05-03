import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col">
      {/* Header wrapper needs 'relative' for the absolute mobile menu */}
      <header className="sticky top-0 z-30 border-b-4 border-black dark:border-white bg-white dark:bg-slate-950 px-4 py-3 md:px-8">
        <div className="relative mx-auto flex w-full items-center justify-between">
          <Header title="TASTY" />
          <Navbar />
        </div>
      </header>

      <main className="w-full flex-1 px-4 py-6 md:px-8">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;