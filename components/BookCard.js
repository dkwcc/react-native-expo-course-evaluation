import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Rating } from "./Rating";

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
    <Pressable onPress={onPress}>
      <View>
        <Image
          source={{
            uri: cover,
          }}
        />
      </View>

      <View>
        <Text numberOfLines={2}>{title}</Text>

        {rating > 0 && (
          <View style={styles.rating}>
            <Text style={styles.ratingText}>
              <Rating rating={rating.toFixed(1)} /> {rating.toFixed(1)}
            </Text>
          </View>
        )}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  rating: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  ratingText: {
    fontSize: 16,
    color: "#F59E0B",
    fontWeight: "600",
  },
});
