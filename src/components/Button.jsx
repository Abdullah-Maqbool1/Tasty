/**
 * Reusable button component
 * @param {Object} props
 * @param {string} props.variant - Button style variant: 'primary', 'secondary', 'danger'
 * @param {string} props.size - Button size: 'sm', 'md', 'lg'
 * @param {boolean} props.fullWidth - Whether button should span full width
 * @param {boolean} props.loading - Show loading state
 * @param {ReactNode} props.children - Button content
 */
const Button = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  loading = false,
  disabled = false,
  className = '',
  ...props
}) => {
  const baseClasses = 'font-black transition focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variants = {
    primary: 'border-4 border-black dark:border-white bg-yellow-300 text-black hover:bg-yellow-400 dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white',
    secondary: 'border-4 border-black dark:border-white bg-white dark:bg-black text-black dark:text-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black',
    danger: 'border-4 border-black dark:border-white bg-red-600 text-white hover:bg-red-700',
    outline: 'border-4 border-black dark:border-white bg-white dark:bg-black text-black dark:text-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black',
  };

  const sizes = {
    sm: 'px-3 py-2 text-xs',
    md: 'px-4 py-3 text-sm',
    lg: 'px-6 py-4 text-base',
  };

  const widthClass = fullWidth ? 'w-full' : '';
  const disabledClass = disabled || loading ? 'opacity-50 cursor-not-allowed' : '';

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${widthClass} ${disabledClass} ${className}`.trim()}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? '⏳ Loading...' : props.children}
    </button>
  );
};

export default Button;
