import { useState, useEffect } from "react";
import { getBookById } from "../services/books";

export const useBookDetails = (bookId) => {
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const loadBookDetails = async () => {
      if (!bookId) {
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        const result = await getBookById(bookId);
        if (isMounted) {
          setBook(result);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message || "Une erreur est survenue");
          console.error(
            "Une erreur est survenue lors du chargement des détails du livre:",
            err,
          );
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    loadBookDetails();

    return () => {
      isMounted = false;
    };
  }, [bookId]);

  return { book, loading, error };
};
