import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import MealCard from '../components/MealCard';
import HeroSection from '../components/common/HeroSection';
import { Button, Section } from '../components';

const featuredCategories = ['Beef', 'Chicken', 'Dessert', 'Seafood', 'Vegetarian'];

const Home = () => {
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

  const handleSearch = (query) => {
    if (query.trim()) {
      navigate(`/browse?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <div className="w-full space-y-6 sm:space-y-8 lg:space-y-10">
      <HeroSection onSearch={handleSearch} />

      <Section title="CATEGORIES" subtitle="Quick access to popular recipe collections.">
        <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
          {featuredCategories.map((category) => (
            <Button
              key={category}
              type="button"
              variant="outline"
              size="sm"
              className="border-4 border-black dark:border-white bg-white dark:bg-black text-black dark:text-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black"
              onClick={() => navigate(`/browse?c=${encodeURIComponent(category)}`)}
            >
              {category.toUpperCase()}
            </Button>
          ))}
        </div>
      </Section>

      <Section title="POPULAR TODAY" subtitle="A selection of tasty meals from TheMealDB.">
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
      </Section>
    </div>
  );
};

export default Home;
