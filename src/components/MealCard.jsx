import { Link } from 'react-router-dom';

const MealCard = ({ meal, actionLabel, onAction, isFavorite }) => {
  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-xl shadow-slate-950/30 transition hover:-translate-y-1 hover:border-slate-700">
      <Link to={`/recipe/${meal.idMeal}`} className="block">
        <img alt={meal.strMeal} src={meal.strMealThumb} className="h-56 w-full object-cover transition duration-300 group-hover:scale-105" />
      </Link>
      <div className="space-y-3 p-4">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-lg font-semibold text-white">{meal.strMeal}</h3>
          {typeof isFavorite === 'boolean' ? (
            <span className="rounded-full bg-emerald-500 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-950">
              {isFavorite ? 'Saved' : 'Save'}
            </span>
          ) : null}
        </div>
        {actionLabel ? (
          <button
            type="button"
            onClick={() => onAction?.(meal)}
            className="w-full rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-white"
          >
            {actionLabel}
          </button>
        ) : null}
      </div>
    </article>
  );
};

export default MealCard;
