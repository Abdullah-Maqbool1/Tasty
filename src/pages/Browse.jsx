import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import MealCard from '../components/MealCard';
import { SearchForm, Button, Section } from '../components';
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

  const handleSearch = (query) => {
    const trimmed = query.trim();
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

        <div className="mt-4 sm:mt-6">
          <SearchForm
            value={searchInput}
            onChange={setSearchInput}
            onSearch={handleSearch}
            placeholder="Search recipes"
            buttonLabel="SEARCH"
          />
        </div>

        <div className="mt-4 sm:mt-6 flex flex-wrap gap-2 sm:gap-3 md:gap-4">
          {availableCategories.map((option) => (
            <Button
              key={option}
              type="button"
              variant={option === category ? 'primary' : 'outline'}
              size="sm"
              className={option === category ? 'border-4 border-black dark:border-white bg-yellow-300 text-black' : 'border-4 border-black dark:border-white bg-white dark:bg-black text-black dark:text-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black'}
              onClick={() => handleCategoryChange(option)}
            >
              {option.toUpperCase()}
            </Button>
          ))}
        </div>
      </section>

      <Section title="RESULTS" subtitle={resultsMessage}>
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
      </Section>
    </div>
  );
};

export default Browse;
