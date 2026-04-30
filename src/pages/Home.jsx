import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import MealCard from '../components/MealCard';

const featuredCategories = ['Beef', 'Chicken', 'Dessert', 'Seafood', 'Vegetarian'];

const Home = () => {
  const [search, setSearch] = useState('');
  const [popular, setPopular] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPopular = async () => {
      setLoading(true);
      setError('');

      try {
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood');
        setPopular(response.data.meals.slice(0, 30));
      } catch {
        setError('Unable to load featured meals.');
      } finally {
        setLoading(false);
      }
    };

    fetchPopular();
  }, []);

  const handleSearch = (event) => {
    event.preventDefault();

    if (search.trim()) {
      navigate(`/browse?q=${encodeURIComponent(search.trim())}`);
    }
  };

  return (
    <div className="w-full space-y-6 sm:space-y-8 lg:space-y-10">
      <section className="w-full border-4 border-black dark:border-white bg-white dark:bg-black p-4 sm:p-6 md:p-8">
        <div className="space-y-4 sm:space-y-5 md:space-y-6">
          <span className="inline-block border-4 border-black dark:border-white px-3 sm:px-4 py-1.5 sm:py-2 text-xs font-black uppercase text-black dark:text-white">
            🍳 Recipe & Food Discovery
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-black dark:text-white leading-tight">
            Discover recipes that make every meal feel delicious.
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-black dark:text-white max-w-2xl">
            Browse meals by category, explore full recipes, save your favorites, and contact us for suggestions.
          </p>
          <form onSubmit={handleSearch} className="flex flex-col gap-2 sm:gap-3 sm:flex-row">
            <label className="sr-only" htmlFor="hero-search">
              Search recipes
            </label>
            <input
              id="hero-search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search by meal name..."
              className="min-w-0 flex-1 border-4 border-black dark:border-white bg-white dark:bg-black px-3 sm:px-5 py-3 sm:py-4 text-sm sm:text-base text-black dark:text-white font-bold outline-none focus:bg-black dark:focus:bg-white focus:text-white dark:focus:text-black"
            />
            <button className="border-4 border-black dark:border-white bg-yellow-300 px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-black text-black transition hover:bg-yellow-400 active:translate-x-1 active:translate-y-1">
              SEARCH
            </button>
          </form>
        </div>
      </section>

      <section className="space-y-4 sm:space-y-6 lg:space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-black dark:text-white">CATEGORIES</h2>
            <p className="text-sm sm:text-base md:text-lg font-bold text-black dark:text-white">Quick access to popular recipe collections.</p>
          </div>
          <button
            type="button"
            onClick={() => navigate('/browse')}
            className="border-4 border-black dark:border-white bg-white dark:bg-black px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-black text-black dark:text-white transition hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black"
          >
            BROWSE ALL
          </button>
        </div>

        <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
          {featuredCategories.map((category) => (
            <button
              type="button"
              key={category}
              onClick={() => navigate(`/browse?c=${encodeURIComponent(category)}`)}
              className="border-4 border-black dark:border-white bg-white dark:bg-black px-3 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-black text-black dark:text-white transition hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black"
            >
              {category.toUpperCase()}
            </button>
          ))}
        </div>
      </section>

      <section className="space-y-4 sm:space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-black dark:text-white">POPULAR TODAY</h2>
            <p className="text-sm sm:text-base md:text-lg font-bold text-black dark:text-white">A selection of tasty meals from TheMealDB.</p>
          </div>
        </div>

        {loading ? (
          <div className="border-4 border-black dark:border-white bg-white dark:bg-black p-4 sm:p-6 md:p-8 text-center text-sm sm:text-base text-black dark:text-white font-black">Loading popular meals…</div>
        ) : error ? (
          <div className="border-4 border-red-600 bg-red-100 dark:bg-red-900 p-4 sm:p-6 md:p-8 text-center text-sm sm:text-base text-red-700 dark:text-red-200 font-black">{error}</div>
        ) : (
          <div className="grid gap-3 sm:gap-4 md:gap-6 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3">
            {popular.map((meal) => (
              <MealCard key={meal.idMeal} meal={meal} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;
