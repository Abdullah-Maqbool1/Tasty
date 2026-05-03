import SearchForm from '../SearchForm';

const HeroSection = ({ className = '', onSearch }) => {
  return (
    <section 
      className={`w-full border-4 border-black dark:border-white p-4 sm:p-6 md:p-8 relative overflow-hidden ${className}`.trim()}
      style={{ minHeight: '450px' }}
    >
      {/* Background Layer: Toggles between Light and Dark images */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat transition-all duration-500
                   bg-[url('/hero_bg_light.png')] 
                   dark:bg-[url('/hero_bg_dark.png')]"
        style={{ filter: 'brightness(1.05) contrast(1.05)' }}
      />

      {/* Conditional Overlays: Darker for dark mode, lighter/sepia for light mode */}
      <div className="absolute inset-0 z-10 bg-black/10 dark:bg-black/50" />

      {/* Content Container */}
      <div className="relative z-20 space-y-4 sm:space-y-5 md:space-y-6">
        <span className="inline-block border-2 border-black dark:border-white bg-white dark:bg-black px-3 py-1 text-xs font-black uppercase text-black dark:text-white">
          🍳 Recipe & Food Discovery
        </span>
        
        <div className="max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight 
                         text-black dark:text-white 
                         drop-shadow-[2px_2px_0px_rgba(255,255,255,0.8)] 
                         dark:drop-shadow-[3px_3px_0px_rgba(0,0,0,1)]">
            Discover recipes that make <br className="hidden md:block" />
            every meal feel delicious.
          </h1>
        </div>
        
        <div className="max-w-2xl bg-white/40 dark:bg-black/40 backdrop-blur-sm p-4 border-l-4 border-black dark:border-white">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-black dark:text-white">
            Browse meals by category, explore full recipes, save your favorites, and contact us for suggestions.
          </p>
        </div>
        
        <div className="max-w-md pt-4">
           <SearchForm onSearch={onSearch} placeholder="Search by meal name..." buttonLabel="SEARCH" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;