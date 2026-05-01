/**
 * Typography component for consistent heading styles
 * @param {Object} props
 * @param {ReactNode} props.children - Text content
 * @param {string} props.variant - Typography variant: 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'small'
 * @param {string} props.className - Additional CSS classes
 */
const Typography = ({ children, variant = 'p', className = '', ...props }) => {
  const variants = {
    h1: 'text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 dark:text-white',
    h2: 'text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white',
    h3: 'text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white',
    h4: 'text-xl sm:text-2xl font-semibold text-slate-900 dark:text-white',
    h5: 'text-lg sm:text-xl font-semibold text-slate-900 dark:text-white',
    h6: 'text-base sm:text-lg font-semibold text-slate-900 dark:text-white',
    p: 'text-base text-slate-700 dark:text-slate-300',
    small: 'text-xs sm:text-sm text-slate-600 dark:text-slate-400',
  };

  const Component = variant === 'p' ? 'p' : variant === 'small' ? 'small' : variant;

  return (
    <Component className={`${variants[variant]} ${className}`.trim()} {...props}>
      {children}
    </Component>
  );
};

export default Typography;
