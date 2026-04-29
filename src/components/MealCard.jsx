import { Link } from 'react-router-dom';

const MealCard = ({ meal, actionLabel, onAction, isFavorite }) => {
  return (
    <article className="border-4 border-black dark:border-white bg-white dark:bg-black shadow-lg dark:shadow-[8px_8px_0_rgba(255,255,255,0.3)] hover:shadow-xl hover:translate-x-1 hover:-translate-y-1 transition">
      <Link to={`/recipe/${meal.idMeal}`} className="block overflow-hidden">
        <img alt={meal.strMeal} src={meal.strMealThumb} className="w-full h-48 object-cover hover:scale-110 transition duration-500" />
      </Link>
      <div className="p-4 border-t-4 border-black dark:border-white space-y-3">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-black text-black dark:text-white leading-tight">{meal.strMeal}</h3>
          {typeof isFavorite === 'boolean' ? (
            <span className="bg-yellow-300 text-black px-3 py-1 text-xs font-black uppercase">
              {isFavorite ? '★' : '☆'}
            </span>
          ) : null}
        </div>
        {actionLabel ? (
          <button
            type="button"
            onClick={() => onAction?.(meal)}
            className="w-full border-4 border-black dark:border-white px-4 py-3 text-sm font-black text-black dark:text-black bg-yellow-300 dark:bg-white transition hover:bg-black hover:text-white dark:hover:bg-black dark:hover:text-white active:translate-x-1 active:translate-y-1"
          >
            {actionLabel}
          </button>
        ) : null}
      </div>
    </article>
  );
};

export default MealCard;
