import { useEffect, useState, useMemo, useRef } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
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
    <div className="w-full space-y-10" ref={detailRef}>
      <section className="grid w-full gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="border-4 border-black dark:border-white bg-white dark:bg-black p-8">
          <img alt={meal.strMeal} src={meal.strMealThumb} className="w-full object-cover" />
          <div className="mt-6 space-y-4 border-t-4 border-black dark:border-white pt-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="bg-yellow-300 px-3 py-1 text-xs font-black uppercase text-black">{meal.strCategory}</span>
              <span className="border-2 border-black dark:border-white px-3 py-1 text-xs font-black text-black dark:text-white">{meal.strArea}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-black dark:text-white leading-tight">{meal.strMeal}</h1>
            <p className="text-lg font-bold text-black dark:text-white">{meal.strTags ? meal.strTags.split(',').join(' · ') : 'Detailed cooking instructions, ingredients, and a video tutorial.'}</p>
            <button
              type="button"
              onClick={() => (isFavorite(meal.idMeal) ? removeFavorite(meal) : addFavorite(meal))}
              className="border-4 border-black dark:border-white bg-yellow-300 px-6 py-3 text-sm font-black text-black transition hover:bg-yellow-400 active:translate-x-1 active:translate-y-1"
            >
              {isFavorite(meal.idMeal) ? '★ SAVED' : '☆ SAVE'}
            </button>
          </div>
        </div>

        <div className="space-y-6">
          <div className="border-4 border-black dark:border-white bg-white dark:bg-black p-8">
            <h2 className="text-3xl font-black text-black dark:text-white">INGREDIENTS</h2>
            <ul className="mt-6 grid gap-3 text-black dark:text-white font-bold sm:grid-cols-2">
              {ingredients.map((item) => (
                <li key={item} className="border-3 border-black dark:border-white bg-white dark:bg-black px-3 py-2">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {videoEmbed ? (
            <div className="border-4 border-black dark:border-white bg-black p-0 overflow-hidden">
              <iframe
                title="Cooking tutorial"
                src={videoEmbed}
                allowFullScreen
                className="h-72 w-full"
              />
            </div>
          ) : null}
        </div>
      </section>

      <section className="border-4 border-black dark:border-white bg-white dark:bg-black p-8">
        <h2 className="text-3xl font-black text-black dark:text-white">INSTRUCTIONS</h2>
        <p className="mt-6 whitespace-pre-line text-lg font-bold text-black dark:text-white leading-relaxed">{meal.strInstructions}</p>
      </section>
    </div>
  );
};

export default RecipeDetail;
