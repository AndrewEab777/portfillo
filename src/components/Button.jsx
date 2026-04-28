const variants = {
  primary:
    'bg-primary-500 hover:bg-primary-600 text-white shadow-lg shadow-primary-200 dark:shadow-primary-900/30',
  outline:
    'border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white',
  ghost:
    'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800',
};

export default function Button({ children, variant = 'primary', className = '', ...props }) {
  return (
    <button
      className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm
        transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer
        ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
