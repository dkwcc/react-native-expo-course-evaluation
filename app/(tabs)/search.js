import { View, Text, TextInput, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors } from '../../constants/colors';
import BookCard from '../../components/BookCard';
import { useSearch } from '../../hooks/useSearch';

export default function SearchScreen() {
  const router = useRouter();
  const { query, setQuery, results, loading, error } = useSearch();

  const handleBookPress = (book) => {
    router.push(`/detail/${book.id}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <Text style={styles.searchIcon}>🔍</Text>
        <TextInput
          style={styles.input}
          value={query}
          onChangeText={setQuery}
          placeholder="Rechercher un livre ou un auteur..."
          placeholderTextColor={Colors.textMuted}
        />
        {query.length > 0 && (
          <Text style={styles.clear} onPress={() => setQuery('')}>✕</Text>
        )}
      </View>

      {loading && (
        <View style={styles.center}>
          <ActivityIndicator size="large" color={Colors.primary} />
        </View>
      )}

      {error && (
        <View style={styles.center}>
          <Text style={styles.errorText}>⚠️ {error}</Text>
        </View>
      )}

      {!loading && !error && query.length > 0 && (
        <>
          <Text style={styles.count}>
            {results.length} résultat{results.length !== 1 ? 's' : ''} pour « {query} »
          </Text>
          <FlatList
            data={results}
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
                <Text style={styles.emptyIcon}>📖</Text>
                <Text style={styles.emptyText}>
                  Aucun résultat pour « {query} »
                </Text>
              </View>
            }
          />
        </>
      )}

      {!loading && query.length === 0 && (
        <View style={styles.center}>
          <Text style={styles.emptyIcon}>🔍</Text>
          <Text style={styles.hintText}>Tapez pour rechercher un livre</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.surface,
    margin: 16,
    marginBottom: 8,
    borderRadius: 12,
    paddingHorizontal: 14,
    height: 48,
    borderWidth: 1,
    borderColor: Colors.border,
  },
  searchIcon: {
    fontSize: 16,
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: Colors.text,
    fontSize: 15,
  },
  clear: {
    color: Colors.textMuted,
    fontSize: 16,
    padding: 4,
  },
  count: {
    color: Colors.textSecondary,
    fontSize: 13,
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  list: {
    padding: 16,
    paddingTop: 8,
  },
  row: {
    gap: 12,
    marginBottom: 12,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
  },
  empty: {
    alignItems: 'center',
    padding: 40,
  },
  emptyIcon: {
    fontSize: 48,
    marginBottom: 12,
  },
  emptyText: {
    color: Colors.textMuted,
    fontSize: 15,
    textAlign: 'center',
  },
  hintText: {
    color: Colors.textMuted,
    fontSize: 15,
    marginTop: 8,
  },
  errorText: {
    color: Colors.error,
    fontSize: 15,
  },
});
