/**
 * Loading spinner component
 * @param {Object} props
 * @param {string} props.size - Spinner size: 'sm', 'md', 'lg'
 * @param {string} props.message - Loading message to display
 */
const LoadingSpinner = ({ size = 'md', message = 'Loading...' }) => {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  return (
    <div className="flex flex-col items-center justify-center gap-3 py-8">
      <div className={`${sizes[size]} border-4 border-slate-300 dark:border-slate-700 border-t-emerald-600 dark:border-t-emerald-400 rounded-full animate-spin`}></div>
      {message && <p className="text-slate-600 dark:text-slate-400 text-sm">{message}</p>}
    </div>
  );
};

export default LoadingSpinner;
