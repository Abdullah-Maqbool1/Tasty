/**
 * Card component - wraps content in a styled card
 * @param {Object} props
 * @param {ReactNode} props.children - Card content
 * @param {boolean} props.hoverable - Add hover effect
 * @param {string} props.variant - Card style: 'default', 'elevated', 'outlined'
 * @param {string} props.className - Additional CSS classes
 */
const Card = ({ children, hoverable = false, variant = 'default', className = '' }) => {
  const variants = {
    default: 'bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg',
    elevated: 'bg-white dark:bg-slate-900 shadow-md dark:shadow-lg rounded-lg',
    outlined: 'border-2 border-black dark:border-white bg-white dark:bg-black rounded-lg',
  };

  const hoverClass = hoverable ? 'hover:shadow-lg dark:hover:shadow-xl transition-shadow hover:-translate-y-1' : '';

  return (
    <div className={`${variants[variant]} ${hoverClass} ${className}`.trim()}>
      {children}
    </div>
  );
};

export default Card;
