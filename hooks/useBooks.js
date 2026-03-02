import { useEffect, useState } from "react";
import { getPopularBooks } from "../services/books";

/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║  TODO 5 — Custom Hook useBooks (12 pts)                      ║
 * ╠══════════════════════════════════════════════════════════════╣
 * ║                                                              ║
 * ║  Créer un hook qui charge les livres populaires.             ║
 * ║                                                              ║
 * ║  Attendu :                                                   ║
 * ║    1. Déclarer 3 states : books ([]), loading (true),        ║
 * ║       error (null)                                           ║
 * ║    2. Créer une fonction async fetchBooks() qui :            ║
 * ║       - Met loading à true et error à null                   ║
 * ║       - Appelle getPopularBooks() du service                 ║
 * ║       - Met le résultat dans books                           ║
 * ║       - Catch les erreurs et les met dans error              ║
 * ║       - Dans le finally, met loading à false                 ║
 * ║    3. Appeler fetchBooks() au montage via useEffect          ║
 * ║    4. Retourner { books, loading, error, refresh }           ║
 * ║       où refresh = fetchBooks                                ║
 * ║                                                              ║
 * ╚══════════════════════════════════════════════════════════════╝
 */

export function useBooks() {
  // TODO 5 : Implémenter le hook complet
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const loadData = async () => {
      try {
        setLoading(true);
        setError(null);
        const result = await getPopularBooks();
        if (isMounted) {
          setBooks(result);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message || "Une erreur est survenue");
          console.error(
            "Une erreur est survenue lors du chargement des données des films:",
            err,
          );
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadData();

    return () => {
      isMounted = false;
    };
  }, []);

  // Supprimer ce return temporaire une fois le hook implémenté
  return {
    books,
    loading,
    error,
  };
}
