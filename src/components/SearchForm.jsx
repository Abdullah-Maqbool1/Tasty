import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * Search form component for finding recipes
 * @param {Object} props
 * @param {Function} props.onSearch - Callback when search is submitted
 * @param {string} props.placeholder - Input placeholder text
 * @param {string} props.buttonLabel - Submit button label
 * @param {string} props.value - Controlled search input value
 * @param {Function} props.onChange - Controlled search input change handler
 */
const SearchForm = ({ onSearch, placeholder = 'Search recipes...', buttonLabel = 'Search', value, onChange }) => {
  const [internalSearch, setInternalSearch] = useState('');
  const navigate = useNavigate();
  const searchValue = value !== undefined ? value : internalSearch;

  const handleChange = (event) => {
    const nextValue = event.target.value;
    if (onChange) {
      onChange(nextValue);
    } else {
      setInternalSearch(nextValue);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (searchValue.trim()) {
      if (onSearch) {
        onSearch(searchValue.trim());
      } else {
        navigate(`/browse?q=${encodeURIComponent(searchValue.trim())}`);
      }

      if (value === undefined) {
        setInternalSearch('');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 sm:gap-3 sm:flex-row w-full max-w-md">
      <label className="sr-only" htmlFor="shared-search-input">
        Search recipes
      </label>
      <input
        id="shared-search-input"
        type="text"
        value={searchValue}
        onChange={handleChange}
        placeholder={placeholder}
        className="min-w-0 flex-1 border-4 border-black dark:border-white bg-white dark:bg-black px-3 sm:px-5 py-3 sm:py-4 text-sm sm:text-base text-black dark:text-white font-bold outline-none focus:bg-black dark:focus:bg-white focus:text-white dark:focus:text-black"
      />
      <button
        type="submit"
        disabled={!searchValue.trim()}
        className="border-4 border-black dark:border-white bg-yellow-300 px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-black text-black transition hover:bg-yellow-400 active:translate-x-1 active:translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {buttonLabel}
      </button>
    </form>
  );
};

export default SearchForm;
