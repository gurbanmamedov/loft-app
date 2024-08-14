import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import SharedLayout from './components/SharedLayout';
import TestimonialsSection from './components/Testimonials/TestimonialsSection';
import Home from './components/pages/Home';
import Contacts from './components/pages/Contacts';
import Mortgage from './components/pages/Mortgage';
import Loader from './components/Loader/Loader';

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const isFirstVisit = localStorage.getItem('firstVisit') === null;

    if (isFirstVisit) {
      const timer = setTimeout(() => {
        setLoading(false);
        localStorage.setItem('firstVisit', 'false');
      }, 1800);
      return () => clearTimeout(timer);
    } else {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="/mortgage" element={<Mortgage />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="testimonials" element={<TestimonialsSection />} />
          </Route>
        </Routes>
      )}
    </>
  );
}

export default App;
