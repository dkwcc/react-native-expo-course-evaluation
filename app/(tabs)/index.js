import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router";
import { Colors } from "../../constants/colors";
import { useBooks } from "../../hooks/useBooks";
import BookCard from "../../components/BookCard";

/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║  TODO 8 — Filtres par genre (5 pts)                          ║
 * ╠══════════════════════════════════════════════════════════════╣
 * ║                                                              ║
 * ║  Ajouter un système de filtrage par genre :                  ║
 * ║                                                              ║
 * ║  1. Extraire dynamiquement les genres disponibles depuis     ║
 * ║     la liste de livres (avec useMemo)                        ║
 * ║  2. Ajouter un state pour le genre sélectionné               ║
 * ║  3. Afficher des chips horizontaux (ScrollView horizontal)   ║
 * ║     permettant de sélectionner un genre                      ║
 * ║  4. Ajouter un chip "Tous" pour réinitialiser le filtre      ║
 * ║  5. Filtrer la FlatList en fonction du genre sélectionné     ║
 * ║     (avec useMemo)                                           ║
 * ║                                                              ║
 * ╚══════════════════════════════════════════════════════════════╝
 */

/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║  TODO 9 — Tri des livres (5 pts)                             ║
 * ╠══════════════════════════════════════════════════════════════╣
 * ║                                                              ║
 * ║  Ajouter un système de tri sur l'écran d'accueil :           ║
 * ║                                                              ║
 * ║  1. Proposer plusieurs options de tri : par défaut,          ║
 * ║     note croissante, note décroissante, titre A-Z,           ║
 * ║     titre Z-A                                                ║
 * ║  2. Ajouter un state pour l'option de tri sélectionnée       ║
 * ║  3. Afficher les options sous forme de chips horizontaux     ║
 * ║  4. Appliquer le tri sur la liste filtrée (compatible        ║
 * ║     avec le filtre genre du TODO 8)                          ║
 * ║  5. Utiliser useMemo pour optimiser le calcul                ║
 * ║                                                              ║
 * ╚══════════════════════════════════════════════════════════════╝
 */

export default function HomeScreen() {
  const router = useRouter();
  const { books, loading, error, refresh } = useBooks();

  // TODO 8 : Extraire les genres avec useMemo et ajouter un state selectedGenre
  // TODO 9 : Ajouter un state pour l'option de tri sélectionnée
  // TODO 8 : Filtrer les livres par genre avec useMemo
  // TODO 9 : Trier les livres filtrés avec useMemo

  const handleBookPress = (book) => {
    router.push(`/detail/${book.id}`);
  };

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>⚠️ {error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* TODO 8 : Ajouter ici les chips de filtrage par genre (ScrollView horizontal) */}
      {/* TODO 9 : Ajouter ici les chips de tri (ScrollView horizontal) */}
      {/*
       * ╔══════════════════════════════════════════════════════════════╗
       * ║  TODO 2 — Sections horizontales par genre (10 pts)           ║
       * ╠══════════════════════════════════════════════════════════════╣
       * ║                                                              ║
       * ║  Afficher les livres regroupés par genre, chaque genre       ║
       * ║  formant une section avec un titre et un défilement          ║
       * ║  horizontal (style Netflix).                                 ║
       * ║                                                              ║
       * ║  1. Regrouper les livres par genre avec useMemo.             ║
       * ║     Format attendu : [{ genre: 'Fantasy', data: [...] },    ║
       * ║                       { genre: 'Sci-Fi', data: [...] }]     ║
       * ║  2. Utiliser un ScrollView vertical englobant.               ║
       * ║  3. Pour chaque section, afficher :                          ║
       * ║     - Un <Text> avec le nom du genre (style titre)          ║
       * ║     - Une <FlatList horizontal> contenant les BookCards      ║
       * ║  4. Chaque FlatList horizontale doit avoir :                 ║
       * ║     - horizontal={true}                                      ║
       * ║     - showsHorizontalScrollIndicator={false}                 ║
       * ║     - keyExtractor basé sur l'id du livre                    ║
       * ║     - contentContainerStyle avec du padding                  ║
       * ║     - ItemSeparatorComponent (gap de 12)                     ║
       * ║  5. Chaque BookCard reçoit : title, author, cover,          ║
       * ║     rating, onPress                                          ║
       * ║  6. Les cartes dans les listes horizontales doivent avoir    ║
       * ║     une largeur fixe (ex: width: 160)                       ║
       * ║                                                              ║
       * ║  Indice : sections.map((section) => ( ... ))                 ║
       * ║                                                              ║
       * ╚══════════════════════════════════════════════════════════════╝
       */}
      <FlatList
        data={books}
        renderItem={({ item, index }) => (
          <BookCard
            title={item.title}
            author={item.author}
            cover={item.cover}
            onPress={handleBookPress(item.id)}
            rating={item.rating}
          />
        )}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.background,
  },
  errorText: {
    color: Colors.error,
    fontSize: 16,
  },
});
