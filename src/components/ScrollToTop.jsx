import { ArrowUpIcon } from '@heroicons/react/24/outline';
import { useScrollTop } from '../hooks/useScrollTop';

export default function ScrollToTop() {
  const [visible, scrollToTop] = useScrollTop(400);

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed bottom-6 right-6 z-50 p-3 rounded-full
        bg-primary-500 text-white shadow-lg shadow-primary-200 dark:shadow-primary-900/40
        hover:bg-primary-600 hover:scale-110 transition-all duration-300
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
    >
      <ArrowUpIcon className="w-5 h-5" />
    </button>
  );
}
