/**
 * Container component - wraps content with max-width and padding
 * Ensures consistent layout and centered content
 * @param {Object} props
 * @param {ReactNode} props.children - Container content
 * @param {string} props.size - Container size: 'sm', 'md', 'lg', 'xl', 'full'
 * @param {string} props.className - Additional CSS classes
 */
const Container = ({ children, size = 'lg', className = '' }) => {
  const sizes = {
    sm: 'max-w-md',
    md: 'max-w-2xl',
    lg: 'max-w-4xl',
    xl: 'max-w-6xl',
    full: 'w-full',
  };

  return (
    <div className={`mx-auto w-full ${sizes[size]} px-2 sm:px-4 md:px-6 lg:px-8 ${className}`.trim()}>
      {children}
    </div>
  );
};

export default Container;
