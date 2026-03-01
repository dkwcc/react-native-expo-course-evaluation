import { View, Text, FlatList, Pressable, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors } from '../../constants/colors';
import BookCard from '../../components/BookCard';
import { useFavorites } from '../../contexts/FavoritesContext';

export default function FavoritesScreen() {
  const router = useRouter();
  const { favorites } = useFavorites();

  const handleBookPress = (book) => {
    router.push(`/detail/${book.id}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>
        {favorites.length} livre{favorites.length !== 1 ? 's' : ''} sauvegardé{favorites.length !== 1 ? 's' : ''}
      </Text>

      <FlatList
        data={favorites}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.list}
        columnWrapperStyle={styles.row}
        renderItem={({ item }) => (
          <BookCard
            title={item.title}
            author={item.author}
            cover={item.cover}
            rating={item.rating}
            onPress={() => handleBookPress(item)}
          />
        )}
        ListEmptyComponent={
          <View style={styles.empty}>
            <Text style={styles.emptyIcon}>📚</Text>
            <Text style={styles.emptyTitle}>Aucun favori</Text>
            <Text style={styles.emptyText}>
              Appuyez sur le cœur d'un livre{'\n'}pour l'ajouter à vos favoris.
            </Text>
            <Pressable
              style={styles.discoverButton}
              onPress={() => router.push('/')}
            >
              <Text style={styles.discoverText}>Découvrir des livres</Text>
            </Pressable>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  subtitle: {
    color: Colors.textSecondary,
    fontSize: 13,
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 4,
  },
  list: {
    padding: 16,
  },
  row: {
    gap: 12,
    marginBottom: 12,
  },
  empty: {
    alignItems: 'center',
    paddingVertical: 60,
    paddingHorizontal: 24,
  },
  emptyIcon: {
    fontSize: 56,
    marginBottom: 16,
  },
  emptyTitle: {
    color: Colors.textSecondary,
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  emptyText: {
    color: Colors.textMuted,
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 22,
  },
  discoverButton: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 10,
    marginTop: 20,
  },
  discoverText: {
    color: Colors.text,
    fontSize: 14,
    fontWeight: '600',
  },
});
