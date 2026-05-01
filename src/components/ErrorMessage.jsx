/**
 * Error message component
 * @param {Object} props
 * @param {string} props.message - Error message to display
 * @param {Function} props.onDismiss - Callback when error is dismissed
 */
const ErrorMessage = ({ message, onDismiss }) => {
  return (
    <div className="w-full bg-red-50 dark:bg-red-900/20 border-l-4 border-red-600 p-4 rounded">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <span className="text-red-600 dark:text-red-400 text-xl flex-shrink-0">⚠️</span>
          <p className="text-red-700 dark:text-red-300 text-sm">{message}</p>
        </div>
        {onDismiss && (
          <button
            onClick={onDismiss}
            className="text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 flex-shrink-0"
            aria-label="Dismiss error"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );
};

export default ErrorMessage;
