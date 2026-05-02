import SearchForm from './SearchForm';

/**
 * Hero section component for the home page
 * @param {Object} props
 * @param {string} props.className - Additional CSS classes
 */
const HeroSection = ({ className = "" }) => {
return (
    <section className={`w-full relative overflow-hidden bg-slate-900 border border-slate-700/50 shadow-2xl min-h-[500px] ${className}`}>
      {/* Background image */}
      <img 
        src="/hero_bg.png" 
        alt="Hero background" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-slate-900/50"></div>

      <div className="relative p-6 sm:p-8 md:p-12 lg:p-16">
        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
          <span className="inline-block bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 px-4 py-2 text-sm font-semibold rounded-full backdrop-blur-sm">
            🍳 Recipe & Food Discovery
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight">
            Discover recipes that make every meal feel{' '}
            <span className="text-yellow-400">delicious</span>.
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-slate-300 max-w-2xl font-medium leading-relaxed">
            Browse meals by category, explore full recipes, save your favorites, and contact us for suggestions.
          </p>
          <SearchForm />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;