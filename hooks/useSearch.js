import { useState, useEffect } from 'react';
import { searchBooks } from '../services/books';
import { SEARCH_DEBOUNCE_MS } from '../constants/config';

/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║  TODO 6 — Hook useSearch avec debounce (15 pts)              ║
 * ╠══════════════════════════════════════════════════════════════╣
 * ║                                                              ║
 * ║  Le state query/setQuery est déjà fourni ci-dessous.         ║
 * ║  Compléter le reste du hook.                                 ║
 * ║                                                              ║
 * ║  Attendu :                                                   ║
 * ║    1. Ajouter les states : results ([]), loading (false),    ║
 * ║       error (null)                                           ║
 * ║    2. useEffect qui dépend de [query] :                      ║
 * ║       - Si query.trim() est vide → vider results, return    ║
 * ║       - Sinon, créer un setTimeout de SEARCH_DEBOUNCE_MS    ║
 * ║       - Dans le timeout : appeler searchBooks(query)         ║
 * ║       - Gérer loading, error                                ║
 * ║    3. La cleanup function doit clearTimeout                  ║
 * ║    4. Retourner { query, setQuery, results, loading, error } ║
 * ║                                                              ║
 * ╚══════════════════════════════════════════════════════════════╝
 */

export function useSearch() {
  const [query, setQuery] = useState('');

  // TODO 6 : Ajouter les states manquants

  // TODO 6 : Implémenter le useEffect avec debounce

  // TODO 6 : Compléter le return
  return { query, setQuery, results: [], loading: false, error: null };
}
