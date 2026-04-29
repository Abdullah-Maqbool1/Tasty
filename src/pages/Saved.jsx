import { useFavorites } from '../hooks/useFavorites';
import MealCard from '../components/MealCard';

const Saved = () => {
  const { favorites, removeFavorite } = useFavorites();

  return (
    <div className="w-full space-y-10">
      <section className="w-full rounded-[2rem] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-6 sm:p-8">
        <h1 className="text-3xl font-semibold text-slate-900 dark:text-white">Saved Recipes</h1>
        <p className="mt-2 text-slate-600 dark:text-slate-400">Your personal collection of saved meals is shown below.</p>
      </section>

      {favorites.length === 0 ? (
        <div className="w-full rounded-[2rem] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/90 p-8 sm:p-10 text-center text-slate-600 dark:text-slate-300">
          <p className="text-lg font-medium text-slate-900 dark:text-white">No saved recipes yet.</p>
          <p className="mt-2 text-slate-600 dark:text-slate-400">Browse the Explore page to add meals to your favorites.</p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {favorites.map((meal) => (
            <MealCard
              key={meal.idMeal}
              meal={meal}
              actionLabel="Remove"
              onAction={removeFavorite}
              isFavorite
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Saved;
