/**
 * Section wrapper component
 * Provides consistent spacing and layout for page sections
 * @param {Object} props
 * @param {ReactNode} props.children - Section content
 * @param {string} props.title - Optional section title
 * @param {string} props.subtitle - Optional section subtitle
 * @param {string} props.className - Additional CSS classes
 */
const Section = ({ children, title, subtitle, className = '', as: Component = 'section' }) => {
  return (
    <Component className={`w-full space-y-4 sm:space-y-6 ${className}`.trim()}>
      {(title || subtitle) && (
        <div className="space-y-2">
          {title && <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-black dark:text-white">{title}</h2>}
          {subtitle && <p className="text-sm sm:text-base md:text-lg font-bold text-black dark:text-white">{subtitle}</p>}
        </div>
      )}
      {children}
    </Component>
  );
};

export default Section;
