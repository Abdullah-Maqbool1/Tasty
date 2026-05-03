import { useEffect, useState, useMemo, useRef } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Button, Card } from '../components';
import { useFavorites } from '../hooks/useFavorites';

const RecipeDetail = () => {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const detailRef = useRef(null);
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  useEffect(() => {
    const fetchMeal = async () => {
      setLoading(true);
      setError('');

      try {
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${encodeURIComponent(id)}`);
        setMeal(response.data.meals?.[0] || null);
      } catch {
        setError('Unable to load recipe details.');
      } finally {
        setLoading(false);
      }
    };

    fetchMeal();
  }, [id]);

  useEffect(() => {
    detailRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [meal]);

  const ingredients = useMemo(() => {
    if (!meal) return [];
    const list = [];

    for (let index = 1; index <= 20; index += 1) {
      const ingredient = meal[`strIngredient${index}`];
      const measure = meal[`strMeasure${index}`];

      if (ingredient && ingredient.trim()) {
        list.push(`${ingredient}${measure ? ` — ${measure.trim()}` : ''}`);
      }
    }

    return list;
  }, [meal]);

  const videoEmbed = meal?.strYoutube?.replace('watch?v=', 'embed/');

  if (loading) {
    return <div className="border-4 border-black dark:border-white bg-white dark:bg-black p-8 text-center text-black dark:text-white font-black">Loading recipe details…</div>;
  }

  if (error || !meal) {
    return <div className="border-4 border-red-600 bg-red-100 dark:bg-red-900 p-8 text-center text-red-700 dark:text-red-200 font-black">{error || 'Recipe not found.'}</div>;
  }

  return (
    <div className="w-full space-y-6 sm:space-y-8 lg:space-y-10" ref={detailRef}>
      <section className="grid w-full gap-4 sm:gap-6 md:gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <Card variant="outlined" className="bg-white dark:bg-black p-3 sm:p-4 md:p-6 lg:p-8">
          <img alt={meal.strMeal} src={meal.strMealThumb} className="w-full object-cover" />
          <div className="mt-3 sm:mt-4 md:mt-6 space-y-3 sm:space-y-4 border-t-4 border-black dark:border-white pt-3 sm:pt-4 md:pt-6">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <span className="bg-yellow-300 px-2 sm:px-3 py-0.5 sm:py-1 text-xs font-black uppercase text-black">{meal.strCategory}</span>
              <span className="border-2 border-black dark:border-white px-2 sm:px-3 py-0.5 sm:py-1 text-xs font-black text-black dark:text-white">{meal.strArea}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-black dark:text-white leading-tight">{meal.strMeal}</h1>
            <p className="text-sm sm:text-base md:text-lg font-bold text-black dark:text-white">{meal.strTags ? meal.strTags.split(',').join(' · ') : 'Detailed cooking instructions, ingredients, and a video tutorial.'}</p>
            <Button
              type="button"
              variant="outline"
              className="border-4 border-black dark:border-white bg-yellow-300 px-3 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm font-black text-black hover:bg-yellow-400 active:translate-x-1 active:translate-y-1"
              onClick={() => (isFavorite(meal.idMeal) ? removeFavorite(meal) : addFavorite(meal))}
            >
              {isFavorite(meal.idMeal) ? '★ SAVED' : '☆ SAVE'}
            </Button>
          </div>
        </Card>

        <div className="space-y-4 sm:space-y-6">
          <Card variant="outlined" className="bg-white dark:bg-black p-3 sm:p-4 md:p-6 lg:p-8">
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-black dark:text-white">INGREDIENTS</h2>
            <ul className="mt-3 sm:mt-4 md:mt-6 grid gap-2 sm:gap-3 text-black dark:text-white font-bold grid-cols-1 sm:grid-cols-2">
              {ingredients.map((item) => (
                <li key={item} className="border-3 border-black dark:border-white bg-white dark:bg-black px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </Card>

          {videoEmbed ? (
            <div className="border-4 border-black dark:border-white bg-black p-0 overflow-hidden">
              <iframe
                title="Cooking tutorial"
                src={videoEmbed}
                allowFullScreen
                className="w-full aspect-video"
              />
            </div>
          ) : null}
        </div>
      </section>

      <Card variant="outlined" className="bg-white dark:bg-black p-3 sm:p-4 md:p-6 lg:p-8">
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-black dark:text-white">INSTRUCTIONS</h2>
        <p className="mt-3 sm:mt-4 md:mt-6 whitespace-pre-line text-sm sm:text-base md:text-lg font-bold text-black dark:text-white leading-relaxed">{meal.strInstructions}</p>
      </Card>
    </div>
  );
};

export default RecipeDetail;
