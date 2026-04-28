export default function PageLoader() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white dark:bg-gray-950">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 rounded-full border-4 border-primary-100 border-t-primary-500 animate-spin" />
        <span className="text-sm font-medium text-gray-500 dark:text-gray-400 animate-pulse">
          Loading...
        </span>
      </div>
    </div>
  );
}
