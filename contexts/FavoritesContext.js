import { createContext, useContext, useReducer } from 'react';

/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║  TODO 7 — FavoritesContext (20 pts)                          ║
 * ╠══════════════════════════════════════════════════════════════╣
 * ║                                                              ║
 * ║  Compléter le système de favoris.                            ║
 * ║                                                              ║
 * ║  Partie A — Le reducer (8 pts)                               ║
 * ║    - Action 'ADD'    : ajouter action.payload au state       ║
 * ║    - Action 'REMOVE' : retirer l'item dont l'id              ║
 * ║                        === action.payload du state            ║
 * ║    - Default         : retourner le state inchangé           ║
 * ║                                                              ║
 * ║  Partie B — Le Provider (12 pts)                             ║
 * ║    - Utiliser useReducer avec le reducer et [] comme initial ║
 * ║    - Implémenter addFavorite(book) : dispatch ADD            ║
 * ║    - Implémenter removeFavorite(id) : dispatch REMOVE        ║
 * ║    - Implémenter isFavorite(id) : retourne true/false        ║
 * ║    - Passer dans value : favorites, addFavorite,             ║
 * ║      removeFavorite, isFavorite                              ║
 * ║                                                              ║
 * ╚══════════════════════════════════════════════════════════════╝
 */

const FavoritesContext = createContext();

/**
 * Le reducer gère les actions sur la liste de favoris.
 * state = tableau de livres [{ id, title, author, ... }, ...]
 */
function favoritesReducer(state, action) {
  // TODO 7a : Implémenter le switch/case
  // action.type peut être 'ADD' ou 'REMOVE'
  // 'ADD'    → action.payload est un objet livre complet
  // 'REMOVE' → action.payload est l'id (string) du livre à retirer
  return state;
}

export function FavoritesProvider({ children }) {
  // TODO 7b : Utiliser useReducer

  // TODO 7b : Implémenter les 3 fonctions
  const addFavorite = (book) => {
    // dispatch l'action ADD
  };

  const removeFavorite = (id) => {
    // dispatch l'action REMOVE
  };

  const isFavorite = (id) => {
    // retourner true si le livre est dans les favoris
    return false;
  };

  // TODO 7b : Compléter la value du Provider
  return (
    <FavoritesContext.Provider value={{
      favorites: [],
      addFavorite,
      removeFavorite,
      isFavorite,
    }}>
      {children}
    </FavoritesContext.Provider>
  );
}

/**
 * Hook d'accès au contexte (fourni, ne pas modifier).
 */
export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites doit être utilisé dans un FavoritesProvider');
  }
  return context;
}
