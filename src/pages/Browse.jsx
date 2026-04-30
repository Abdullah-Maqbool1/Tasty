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
    <div className="w-full space-y-6 sm:space-y-8 lg:space-y-10">
      <section className="w-full border-4 border-black dark:border-white bg-white dark:bg-black p-4 sm:p-6 md:p-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-black dark:text-white">EXPLORE RECIPES</h1>
        <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg font-bold text-black dark:text-white">Filter by category or search by name to find meals from TheMealDB.</p>

        <form onSubmit={handleSearch} className="mt-4 sm:mt-6 flex flex-col gap-2 sm:gap-3 sm:flex-row">
          <input
            value={searchInput}
            onChange={(event) => setSearchInput(event.target.value)}
            placeholder="Search recipes"
            className="min-w-0 flex-1 border-4 border-black dark:border-white bg-white dark:bg-black px-3 sm:px-5 py-3 sm:py-4 text-sm sm:text-base text-black dark:text-white font-bold outline-none focus:bg-black dark:focus:bg-white focus:text-white dark:focus:text-black"
          />
          <button className="border-4 border-black dark:border-white bg-yellow-300 px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-black text-black transition hover:bg-yellow-400 active:translate-x-1 active:translate-y-1">
            SEARCH
          </button>
        </form>

        <div className="mt-4 sm:mt-6 flex flex-wrap gap-2 sm:gap-3 md:gap-4">
          {availableCategories.map((option) => (
            <button
              type="button"
              key={option}
              onClick={() => handleCategoryChange(option)}
              className={`border-4 px-2.5 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-black transition ${option === category ? 'bg-yellow-300 text-black border-black dark:border-white' : 'border-black dark:border-white bg-white dark:bg-black text-black dark:text-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black'}`}
            >
              {option.toUpperCase()}
            </button>
          ))}
        </div>
      </section>

      <section className="space-y-4 sm:space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-black dark:text-white">RESULTS</h2>
            <p className="text-sm sm:text-base md:text-lg font-bold text-black dark:text-white">{resultsMessage}</p>
          </div>
        </div>

        {loading ? (
          <div className="border-4 border-black dark:border-white bg-white dark:bg-black p-4 sm:p-6 md:p-8 text-center text-sm sm:text-base text-black dark:text-white font-black">Loading meals…</div>
        ) : error ? (
          <div className="border-4 border-red-600 bg-red-100 dark:bg-red-900 p-4 sm:p-6 md:p-8 text-center text-sm sm:text-base text-red-700 dark:text-red-200 font-black">{error}</div>
        ) : (
          <div className="grid gap-3 sm:gap-4 md:gap-6 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3">
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
