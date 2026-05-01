/**
 * Empty state component - displays when no content is available
 * @param {Object} props
 * @param {string} props.icon - Emoji or icon to display
 * @param {string} props.title - Empty state title
 * @param {string} props.message - Empty state message
 * @param {ReactNode} props.action - Optional action button/element
 */
const EmptyState = ({ icon = '📭', title = 'Nothing here yet', message = '', action }) => {
  return (
    <div className="w-full py-12 px-4 text-center">
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2">
        {title}
      </h3>
      {message && (
        <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mb-4">
          {message}
        </p>
      )}
      {action && <div className="mt-6">{action}</div>}
    </div>
  );
};

export default EmptyState;
