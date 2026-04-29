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
    return <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 text-center text-slate-400">Loading recipe details…</div>;
  }

  if (error || !meal) {
    return <div className="rounded-3xl border border-rose-500 bg-rose-500/10 p-8 text-center text-rose-200">{error || 'Recipe not found.'}</div>;
  }

  return (
    <div className="w-full space-y-10" ref={detailRef}>
      <section className="grid w-full gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[2rem] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-6 sm:p-8">
          <img alt={meal.strMeal} src={meal.strMealThumb} className="w-full rounded-3xl object-cover" />
          <div className="mt-6 space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-emerald-300">{meal.strCategory}</span>
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-400">{meal.strArea}</span>
            </div>
            <h1 className="text-4xl font-semibold text-white">{meal.strMeal}</h1>
            <p className="text-slate-300">{meal.strTags ? meal.strTags.split(',').join(' · ') : 'Detailed cooking instructions, ingredients, and a video tutorial.'}</p>
            <button
              type="button"
              onClick={() => (isFavorite(meal.idMeal) ? removeFavorite(meal) : addFavorite(meal))}
              className="rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
            >
              {isFavorite(meal.idMeal) ? 'Remove from saved' : 'Save recipe'}
            </button>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-[2rem] border border-slate-800 bg-slate-900/90 p-8 shadow-xl shadow-slate-950/20">
            <h2 className="text-2xl font-semibold text-white">Ingredients</h2>
            <ul className="mt-4 grid gap-2 text-slate-300 sm:grid-cols-2">
              {ingredients.map((item) => (
                <li key={item} className="rounded-2xl border border-slate-800 bg-slate-950 px-4 py-3">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {videoEmbed ? (
            <div className="rounded-[2rem] border border-slate-800 bg-slate-900/90 p-0 shadow-xl shadow-slate-950/20">
              <iframe
                title="Cooking tutorial"
                src={videoEmbed}
                allowFullScreen
                className="h-72 w-full rounded-[2rem]"
              />
            </div>
          ) : null}
        </div>
      </section>

      <section className="rounded-[2rem] border border-slate-800 bg-slate-900/90 p-8 shadow-xl shadow-slate-950/20">
        <h2 className="text-2xl font-semibold text-white">Instructions</h2>
        <p className="mt-4 whitespace-pre-line text-slate-300">{meal.strInstructions}</p>
      </section>
    </div>
  );
};

export default RecipeDetail;
