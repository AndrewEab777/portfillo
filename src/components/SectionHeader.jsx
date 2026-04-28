export default function SectionHeader({ title, subtitle }) {
  return (
    <div className="text-center mb-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
          {subtitle}
        </p>
      )}
      <div className="mt-5 mx-auto w-16 h-1.5 rounded-full bg-gradient-to-r from-primary-500 to-accent" />
    </div>
  );
}
