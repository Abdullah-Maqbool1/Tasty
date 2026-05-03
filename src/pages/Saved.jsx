import { useNavigate } from 'react-router-dom';
import { useFavorites } from '../hooks/useFavorites';
import MealCard from '../components/MealCard';
import { Button, EmptyState, Section } from '../components';

const Saved = () => {
  const navigate = useNavigate();
  const { favorites, removeFavorite } = useFavorites();

  return (
    <div className="w-full space-y-6 sm:space-y-8 lg:space-y-10">
      <Section
        title="SAVED RECIPES"
        subtitle="Your personal collection of saved meals is shown below."
      />

      {favorites.length === 0 ? (
        <EmptyState
          icon="🥡"
          title="No saved recipes yet."
          message="Browse the Explore page to add meals to your favorites."
          action={
            <Button
              variant="primary"
              size="md"
              onClick={() => navigate('/browse')}
            >
              Browse recipes
            </Button>
          }
        />
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
