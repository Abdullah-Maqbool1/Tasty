import { useFavorites } from '../hooks/useFavorites';
import MealCard from '../components/MealCard';

const Saved = () => {
  const { favorites, removeFavorite } = useFavorites();

  return (
    <div className="w-full space-y-10">
      <section className="w-full border-4 border-black dark:border-white bg-white dark:bg-black p-8">
        <h1 className="text-4xl md:text-5xl font-black text-black dark:text-white">SAVED RECIPES</h1>
        <p className="mt-4 text-lg font-bold text-black dark:text-white">Your personal collection of saved meals is shown below.</p>
      </section>

      {favorites.length === 0 ? (
        <div className="w-full border-4 border-black dark:border-white bg-white dark:bg-black p-8 sm:p-10 text-center">
          <p className="text-2xl font-black text-black dark:text-white">No saved recipes yet.</p>
          <p className="mt-4 text-lg font-bold text-black dark:text-white">Browse the Explore page to add meals to your favorites.</p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {favorites.map((meal) => (
            <MealCard
              key={meal.idMeal}
              meal={meal}
              actionLabel="REMOVE"
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
