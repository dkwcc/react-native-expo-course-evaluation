import books from '../data/books.json';
import { delay } from '../utils';

/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║  TODO 4 — Service API (15 pts)                               ║
 * ╠══════════════════════════════════════════════════════════════╣
 * ║                                                              ║
 * ║  Compléter les 3 fonctions du service.                       ║
 * ║  Les données viennent de data/books.json (déjà importé).     ║
 * ║  La fonction delay() est fournie via utils.                  ║
 * ║                                                              ║
 * ║  Chaque fonction doit :                                      ║
 * ║    - Être async                                              ║
 * ║    - Appeler await delay(500) pour simuler le réseau         ║
 * ║    - Utiliser try/catch avec throw new Error(...)            ║
 * ║                                                              ║
 * ╚══════════════════════════════════════════════════════════════╝
 */

/**
 * Retourne la liste de tous les livres.
 * @returns {Promise<Array>} Liste des livres
 */
export async function getPopularBooks() {
  // TODO 4a : Simuler un délai, puis retourner les livres
  // En cas d'erreur, throw une Error avec un message explicite
}

/**
 * Retourne un livre par son id.
 * @param {string} id - L'identifiant du livre
 * @returns {Promise<Object>} Le livre trouvé
 */
export async function getBookById(id) {
  // TODO 4b : Simuler un délai, chercher le livre par id
  // Si non trouvé, throw new Error('Livre non trouvé')
}

/**
 * Recherche des livres par titre ou auteur.
 * @param {string} query - Le texte recherché
 * @returns {Promise<Array>} Les livres correspondants
 */
export async function searchBooks(query) {
  // TODO 4c : Simuler un délai, filtrer les livres
  // Le filtre doit chercher dans title ET author (insensible à la casse)
  // Astuce : .toLowerCase().includes(query.toLowerCase())
}
