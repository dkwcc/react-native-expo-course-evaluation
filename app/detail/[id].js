import { View, Text, Image, ScrollView, Pressable, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors } from '../../constants/colors';
import books from '../../data/books.json';

/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║  TODO 3 — Navigation détail (10 pts)                        ║
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

export default function DetailScreen() {
  const router = useRouter();

  // TODO 3 : Récupérer l'id et trouver le livre correspondant

  // TODO 3 : Remplacer ce return par l'écran de détail complet
  return (
    <View style={styles.center}>
      <Text style={styles.placeholder}>TODO 3 : Écran de détail à compléter</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.background,
    padding: 24,
  },
  placeholder: {
    color: Colors.textMuted,
    fontSize: 16,
  },
});
