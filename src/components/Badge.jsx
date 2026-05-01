/**
 * Badge component - displays a small label or tag
 * @param {Object} props
 * @param {ReactNode} props.children - Badge content
 * @param {string} props.variant - Badge style: 'primary', 'secondary', 'success', 'warning', 'danger'
 * @param {string} props.size - Badge size: 'sm', 'md'
 * @param {string} props.className - Additional CSS classes
 */
const Badge = ({ children, variant = 'primary', size = 'md', className = '' }) => {
  const variants = {
    primary: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400',
    secondary: 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300',
    success: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400',
    warning: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-600',
    danger: 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400',
  };

  const sizes = {
    sm: 'px-2 py-0.5 text-xs font-semibold rounded-full',
    md: 'px-3 py-1 text-sm font-semibold rounded-full',
  };

  return (
    <span className={`inline-block ${variants[variant]} ${sizes[size]} ${className}`.trim()}>
      {children}
    </span>
  );
};

export default Badge;
