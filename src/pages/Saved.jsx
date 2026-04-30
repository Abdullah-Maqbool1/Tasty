import { useFavorites } from '../hooks/useFavorites';
import MealCard from '../components/MealCard';

const Saved = () => {
  const { favorites, removeFavorite } = useFavorites();

  return (
    <div className="w-full space-y-6 sm:space-y-8 lg:space-y-10">
      <section className="w-full border-4 border-black dark:border-white bg-white dark:bg-black p-4 sm:p-6 md:p-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-black dark:text-white">SAVED RECIPES</h1>
        <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg font-bold text-black dark:text-white">Your personal collection of saved meals is shown below.</p>
      </section>

      {favorites.length === 0 ? (
        <div className="w-full border-4 border-black dark:border-white bg-white dark:bg-black p-4 sm:p-6 md:p-8 lg:p-10 text-center">
          <p className="text-lg sm:text-xl md:text-2xl font-black text-black dark:text-white">No saved recipes yet.</p>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg font-bold text-black dark:text-white">Browse the Explore page to add meals to your favorites.</p>
        </div>
      ) : (
        <div className="grid gap-3 sm:gap-4 md:gap-6 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3">
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
