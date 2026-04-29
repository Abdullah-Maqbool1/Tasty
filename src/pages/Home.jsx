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
        setPopular(response.data.meals.slice(0, 6));
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
    <div className="w-full space-y-10">
      <section className="w-full rounded-[2rem] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-6 sm:p-8">
        <div className="space-y-6">
          <span className="inline-flex rounded-full bg-emerald-500/15 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-emerald-300">
            Recipe & food discovery
          </span>
          <h1 className="text-4xl font-semibold text-white sm:text-5xl">Discover recipes that make every meal feel delicious.</h1>
          <p className="max-w-2xl text-slate-300">
            Browse meals by category, explore full recipes, save your favorites, and contact us for suggestions.
          </p>
          <form onSubmit={handleSearch} className="flex flex-col gap-3 sm:flex-row">
            <label className="sr-only" htmlFor="hero-search">
              Search recipes
            </label>
            <input
              id="hero-search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search by meal name..."
              className="min-w-0 flex-1 rounded-3xl border border-slate-800 bg-slate-950 px-5 py-4 text-white outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20"
            />
            <button className="rounded-3xl bg-emerald-500 px-6 py-4 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400">
              Search
            </button>
          </form>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-white">Categories</h2>
            <p className="text-slate-400">Quick access to popular recipe collections.</p>
          </div>
          <button
            type="button"
            onClick={() => navigate('/browse')}
            className="rounded-full border border-slate-800 bg-slate-900 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-emerald-400 hover:text-white"
          >
            Browse all
          </button>
        </div>

        <div className="flex flex-wrap gap-3">
          {featuredCategories.map((category) => (
            <button
              type="button"
              key={category}
              onClick={() => navigate(`/browse?c=${encodeURIComponent(category)}`)}
              className="rounded-full border border-slate-800 bg-slate-900 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-emerald-400 hover:text-white"
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-white">Popular Today</h2>
            <p className="text-slate-400">A selection of tasty meals from TheMealDB.</p>
          </div>
        </div>

        {loading ? (
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 text-center text-slate-400">Loading popular meals…</div>
        ) : error ? (
          <div className="rounded-3xl border border-rose-500 bg-rose-500/10 p-8 text-center text-rose-200">{error}</div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
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
