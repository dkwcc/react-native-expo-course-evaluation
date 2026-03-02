import { View, Text, StyleSheet } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Colors } from "../../constants/colors";
import { useBookDetails } from "../../hooks/useBookDetails";

/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║  TODO 3 — Navigation détail (8 pts)                         ║
 * ╠══════════════════════════════════════════════════════════════╣
 * ║                                                              ║
 * ║  Compléter cet écran de détail :                             ║
 * ║                                                              ║
 * ║  1. Importer useLocalSearchParams depuis expo-router         ║
 * ║  2. Récupérer le paramètre "id" depuis les params            ║
 * ║  3. Trouver le livre dans le tableau `books` importé         ║
 * ║     (books.find(...))                                        ║
 * ║  4. Si le livre n'est pas trouvé, afficher un message        ║
 * ║     d'erreur avec un bouton retour                           ║
 * ║  5. Si trouvé, afficher :                                    ║
 * ║     - Image de couverture (hauteur 300)                      ║
 * ║     - Titre (gras, 24px)                                     ║
 * ║     - Auteur                                                 ║
 * ║     - Note avec ★                                            ║
 * ║     - Nombre de pages                                        ║
 * ║     - Description complète                                   ║
 * ║     - Bouton retour (router.back())                          ║
 * ║                                                              ║
 * ╚══════════════════════════════════════════════════════════════╝
 */

/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║  TODO 11 — Sélecteur de statut de lecture (8 pts)            ║
 * ╠══════════════════════════════════════════════════════════════╣
 * ║                                                              ║
 * ║  Ajouter un sélecteur de statut sur l'écran de détail :      ║
 * ║                                                              ║
 * ║  1. Importer useReadingList et READING_STATUSES depuis       ║
 * ║     contexts/ReadingListContext                               ║
 * ║  2. Utiliser le hook pour accéder à : addToList,             ║
 * ║     updateStatus, removeFromList, getBookStatus, isInList    ║
 * ║  3. Afficher 3 boutons correspondant aux 3 statuts :         ║
 * ║     - "📖 À lire"       → READING_STATUSES.TO_READ          ║
 * ║     - "📚 En cours"     → READING_STATUSES.READING          ║
 * ║     - "✅ Terminé"      → READING_STATUSES.FINISHED         ║
 * ║  4. Le bouton du statut actuel doit être visuellement        ║
 * ║     distinct (couleur de fond différente, ex: primary)       ║
 * ║  5. Au press d'un bouton :                                   ║
 * ║     - Si le livre n'est PAS dans la liste → addToList(book,  ║
 * ║       status)                                                 ║
 * ║     - Si le livre est dans la liste → updateStatus(book.id,  ║
 * ║       status)                                                 ║
 * ║  6. Si le livre est dans la liste, afficher un bouton        ║
 * ║     "Retirer de ma liste" qui appelle removeFromList(id)     ║
 * ║                                                              ║
 * ╚══════════════════════════════════════════════════════════════╝
 */

/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║  TODO 13 — BONUS : ReadingProgress (+5 pts)                  ║
 * ╠══════════════════════════════════════════════════════════════╣
 * ║                                                              ║
 * ║  Si le livre est dans la liste de lecture, afficher le        ║
 * ║  composant <ReadingProgress status={...} /> sous le          ║
 * ║  sélecteur de statut.                                        ║
 * ║                                                              ║
 * ║  1. Importer ReadingProgress depuis components/              ║
 * ║  2. Récupérer le statut actuel via getBookStatus(id)         ║
 * ║  3. Si le livre est dans la liste, afficher :                ║
 * ║     <ReadingProgress status={currentStatus} />               ║
 * ║                                                              ║
 * ╚══════════════════════════════════════════════════════════════╝
 */

export default function DetailScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  const { book, loading, error } = useBookDetails(id);

  // TODO 3 : Récupérer l'id et trouver le livre correspondant

  // TODO 11 : Utiliser useReadingList() pour accéder aux fonctions de la liste de lecture

  // TODO 3 : Remplacer ce return par l'écran de détail complet
  // TODO 11 : Ajouter le sélecteur de statut (3 boutons) dans l'écran de détail
  // TODO 13 : Ajouter <ReadingProgress /> si le livre est dans la liste
  return (
    <View style={styles.center}>
      <Text style={styles.placeholder}>
        TODO 3 : Écran de détail à compléter
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.background,
    padding: 24,
  },
  placeholder: {
    color: Colors.textMuted,
    fontSize: 16,
  },
});
