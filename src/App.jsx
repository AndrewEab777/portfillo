import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home       from './pages/Home';
import About      from './pages/About';
import Services   from './pages/Services';
import Projects   from './pages/Projects';
import Contact    from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/"         element={<Home />}     />
          <Route path="/about"    element={<About />}    />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact"  element={<Contact />}  />
          {/* 404 fallback */}
          <Route path="*" element={
            <div className="min-h-screen flex items-center justify-center text-center px-4">
              <div>
                <div className="text-8xl font-black text-primary-200 dark:text-primary-900 mb-4">404</div>
                <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Page Not Found</h1>
                <p className="text-gray-500 dark:text-gray-400 mb-6">The page you're looking for doesn't exist.</p>
                <a href="/" className="text-primary-500 hover:underline font-medium">← Back to Home</a>
              </div>
            </div>
          } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
