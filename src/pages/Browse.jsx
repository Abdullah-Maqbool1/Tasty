import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import MealCard from '../components/MealCard';
import { useFavorites } from '../hooks/useFavorites';

const availableCategories = ['Beef', 'Chicken', 'Dessert', 'Lamb', 'Pasta', 'Seafood', 'Vegetarian'];

const Browse = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchInput, setSearchInput] = useState(searchParams.get('q') || '');
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  const category = searchParams.get('c') || 'Beef';
  const query = searchParams.get('q') || '';

  useEffect(() => {
    const fetchMeals = async () => {
      setLoading(true);
      setError('');

      try {
        const response = query
          ? await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURIComponent(query)}`)
          : await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${encodeURIComponent(category)}`);

        setMeals(response.data.meals || []);
      } catch {
        setError('Unable to load meals. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchMeals();
  }, [category, query]);

  const handleSearch = (event) => {
    event.preventDefault();
    const trimmed = searchInput.trim();
    if (trimmed) {
      setSearchParams({ q: trimmed });
    } else {
      setSearchParams({ c: category });
    }
  };

  const handleCategoryChange = (selectedCategory) => {
    setSearchInput('');
    setSearchParams({ c: selectedCategory });
  };

  const resultsMessage = useMemo(() => {
    if (loading) return 'Loading recipes…';
    if (error) return error;
    if (meals.length === 0) return 'No meals found for this query.';
    return `${meals.length} meals found`;
  }, [loading, error, meals.length]);

  return (
    <div className="w-full space-y-10">
      <section className="w-full rounded-[2rem] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-6 sm:p-8">
        <h1 className="text-3xl font-semibold text-white">Explore Recipes</h1>
        <p className="mt-2 text-slate-400">Filter by category or search by name to find meals from TheMealDB.</p>

        <form onSubmit={handleSearch} className="mt-6 flex flex-col gap-3 sm:flex-row">
          <input
            value={searchInput}
            onChange={(event) => setSearchInput(event.target.value)}
            placeholder="Search recipes"
            className="min-w-0 flex-1 rounded-3xl border border-slate-800 bg-slate-950 px-5 py-4 text-white outline-none transition focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20"
          />
          <button className="rounded-3xl bg-emerald-500 px-6 py-4 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400">
            Search
          </button>
        </form>

        <div className="mt-6 flex flex-wrap gap-3">
          {availableCategories.map((option) => (
            <button
              type="button"
              key={option}
              onClick={() => handleCategoryChange(option)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${option === category ? 'bg-emerald-500 text-slate-950' : 'border border-slate-800 bg-slate-900 text-slate-300 hover:border-emerald-400 hover:text-white'}`}
            >
              {option}
            </button>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-white">Results</h2>
            <p className="text-slate-400">{resultsMessage}</p>
          </div>
        </div>

        {loading ? (
          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 text-center text-slate-400">Loading meals…</div>
        ) : error ? (
          <div className="rounded-3xl border border-rose-500 bg-rose-500/10 p-8 text-center text-rose-200">{error}</div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {meals.map((meal) => (
              <MealCard
                key={meal.idMeal}
                meal={meal}
                actionLabel={isFavorite(meal.idMeal) ? 'Remove' : 'Save'}
                onAction={(item) => (isFavorite(item.idMeal) ? removeFavorite(item) : addFavorite(item))}
                isFavorite={isFavorite(meal.idMeal)}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Browse;
