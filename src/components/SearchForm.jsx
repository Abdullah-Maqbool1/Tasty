import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * Search form component for finding recipes
 * @param {Object} props
 * @param {Function} props.onSearch - Callback when search is submitted
 * @param {string} props.placeholder - Input placeholder text
 */
const SearchForm = ({ onSearch, placeholder = 'Search recipes...' }) => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (search.trim()) {
      if (onSearch) {
        onSearch(search.trim());
      } else {
        navigate(`/browse?q=${encodeURIComponent(search.trim())}`);
      }
      setSearch('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <div className="flex gap-2 sm:gap-3">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={placeholder}
          className="flex-1 px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border-2 border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-lg focus:outline-none focus:border-emerald-600 dark:focus:border-emerald-400"
          aria-label="Search for recipes"
        />
        <button
          type="submit"
          disabled={!search.trim()}
          className="px-4 sm:px-6 py-2 sm:py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
