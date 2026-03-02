import { Image, Pressable, StyleSheet } from "react-native";
import { Rating } from "./Rating";
import { Colors } from "../constants/colors";

/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║  TODO 1 — Composant BookCard (12 pts)                       ║
 * ╠══════════════════════════════════════════════════════════════╣
 * ║                                                              ║
 * ║  Créer un composant qui affiche une carte de livre.          ║
 * ║                                                              ║
 * ║  Props reçues :                                              ║
 * ║    - title (string)     : titre du livre                     ║
 * ║    - author (string)    : nom de l'auteur                    ║
 * ║    - cover (string)     : URL de l'image de couverture       ║
 * ║    - rating (number)    : note du livre (ex: 4.5)            ║
 * ║    - onPress (function) : callback au clic sur la carte      ║
 * ║                                                              ║
 * ║  Attendu :                                                   ║
 * ║    1. Pressable englobant avec feedback visuel (opacity)     ║
 * ║    2. Image de couverture (source={{ uri: cover }})          ║
 * ║    3. Titre du livre (gras, max 2 lignes)                   ║
 * ║    4. Nom de l'auteur (couleur secondaire)                  ║
 * ║    5. Note affichée avec ★ (ex: "★ 4.5")                   ║
 * ║    6. Styles via StyleSheet.create()                         ║
 * ║    7. Utiliser les couleurs depuis Colors                    ║
 * ║                                                              ║
 * ╚══════════════════════════════════════════════════════════════╝
 */

export default function BookCard({ title, author, cover, rating, onPress }) {
  // TODO 1 : Remplacer ce return par votre composant
  return (
    <Pressable style={styles.card} onPress={onPress}>
      <Image
        source={{
          uri: cover,
        }}
      />
      <View>
        <Text numberOfLines={1}>{title}</Text>
        <Text numberOfLines={1}>{author}</Text>

        {rating > 0 && (
          <View>
            <Text>
              <Rating rating={rating.toFixed(1)} /> {rating.toFixed(1)}
            </Text>
          </View>
        )}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.card,
    borderRadius: 12,
    overflow: "hidden",
  },
});
