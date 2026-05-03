import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { FavoritesProvider } from './context/FavoritesContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import Browse from './pages/Browse';
import RecipeDetail from './pages/RecipeDetail';
import Contact from './pages/Contact';
import Saved from './pages/Saved';

function ScrollToTop() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [pathname, search]);

  return null;
}

function App() {
  return (
    <ThemeProvider>
      <FavoritesProvider>
        <Router>
          <ScrollToTop />
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/browse" element={<Browse />} />
              <Route path="/recipe/:id" element={<RecipeDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/saved" element={<Saved />} />
            </Routes>
          </Layout>
        </Router>
      </FavoritesProvider>
    </ThemeProvider>
  );
}

export default App;
