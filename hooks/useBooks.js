import { useState, useEffect } from 'react';
import { getPopularBooks } from '../services/books';

/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║  TODO 5 — Custom Hook useBooks (15 pts)                      ║
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

  // Supprimer ce return temporaire une fois le hook implémenté
  return { books: [], loading: false, error: 'TODO 5 : hook à implémenter', refresh: () => {} };
}
