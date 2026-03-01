import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors } from '../../constants/colors';
import BookCard from '../../components/BookCard';
import { useBooks } from '../../hooks/useBooks';

export default function HomeScreen() {
  const router = useRouter();
  const { books, loading, error, refresh } = useBooks();

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
      {/*
       * ╔══════════════════════════════════════════════════════════════╗
       * ║  TODO 2 — FlatList (10 pts)                                 ║
       * ╠══════════════════════════════════════════════════════════════╣
       * ║                                                              ║
       * ║  Remplacer ce commentaire par une FlatList qui :             ║
       * ║                                                              ║
       * ║  1. Affiche les livres (data={books})                       ║
       * ║  2. En grille de 2 colonnes (numColumns)                    ║
       * ║  3. Avec un keyExtractor basé sur l'id                      ║
       * ║  4. renderItem utilise <BookCard /> avec les bonnes props   ║
       * ║     → title, author, cover, rating, onPress                 ║
       * ║  5. contentContainerStyle avec du padding (16)              ║
       * ║  6. columnWrapperStyle avec un gap de 12                    ║
       * ║  7. ListEmptyComponent qui affiche "Aucun livre"            ║
       * ║  8. ItemSeparatorComponent ou gap vertical de 12            ║
       * ║                                                              ║
       * ╚══════════════════════════════════════════════════════════════╝
       */}
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
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.background,
  },
  errorText: {
    color: Colors.error,
    fontSize: 16,
  },
});
