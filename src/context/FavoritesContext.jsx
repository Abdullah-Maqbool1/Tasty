import { createContext, useState } from 'react';

const FavoritesContext = createContext();

export { FavoritesContext };

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (meal) => {
    if (!favorites.find(f => f.idMeal === meal.idMeal)) {
      setFavorites([...favorites, meal]);
    }
  };

  const removeFavorite = (meal) => {
    setFavorites(favorites.filter(f => f.idMeal !== meal.idMeal));
  };

  const isFavorite = (id) => favorites.some(f => f.idMeal === id);

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};