/**
 * Grid component for displaying items in a responsive grid
 * @param {Object} props
 * @param {ReactNode} props.children - Grid content
 * @param {number} props.cols - Number of columns on desktop (default: 4)
 * @param {string} props.gap - Gap between items: 'sm', 'md', 'lg'
 * @param {string} props.className - Additional CSS classes
 */
const Grid = ({ children, cols = 4, gap = 'md', className = '' }) => {
  const gaps = {
    sm: 'gap-2 sm:gap-3',
    md: 'gap-3 sm:gap-4 md:gap-6',
    lg: 'gap-4 sm:gap-6 md:gap-8',
  };

  const colClass = `grid-cols-1 sm:grid-cols-2 lg:grid-cols-${cols}`;

  return (
    <div className={`grid ${colClass} ${gaps[gap]} ${className}`.trim()}>
      {children}
    </div>
  );
};

export default Grid;
