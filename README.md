# 📚 Évaluation — BookShelf

**Formation React Native & Expo — Évaluation finale**

| | |
|---|---|
| **Durée** | 2 heures |
| **Documents autorisés** | Documentation officielle uniquement (reactnative.dev, docs.expo.dev) |
| **Rendu** | Projet complet zippé, envoyé par email |
| **Barème** | /100 points |

---

## Contexte

Vous devez compléter **BookShelf**, une application de découverte de livres.
L'application est partiellement construite : la navigation, les couleurs et les données sont en place.

**Votre travail** : compléter les **7 fichiers marqués `// TODO`** pour rendre l'application fonctionnelle.

Chaque TODO est numéroté, localisé dans un fichier précis, et décrit ce qui est attendu.
Les points sont indiqués pour chaque TODO.

---

## Lancer le projet

```bash
npm install
npx expo start
```

---

## Architecture du projet

```
app/                           ← Navigation (fournie)
├── (tabs)/
│   ├── _layout.js             ✅ Complet
│   ├── index.js               📝 Utilise TODO 1, 2, 5
│   ├── search.js              📝 Contient TODO 6
│   └── favorites.js           📝 Utilise TODO 7
├── detail/
│   └── [id].js                📝 Contient TODO 3
└── _layout.js                 ✅ Complet

components/
└── BookCard.js                📝 TODO 1

services/
└── books.js                   📝 TODO 4

hooks/
├── useBooks.js                📝 TODO 5
└── useSearch.js               📝 TODO 6

contexts/
└── FavoritesContext.js         📝 TODO 7

constants/                     ✅ Complet
data/books.json                ✅ Données fournies
utils/                         ✅ Complet
```

---

## Les 7 TODO

### TODO 1 — Composant BookCard (15 pts)
📄 **Fichier** : `components/BookCard.js`

Créer un composant `BookCard` qui affiche une carte de livre avec :
- L'image de couverture (prop `cover`, affichée via `Image` avec une URI)
- Le titre du livre (prop `title`)
- L'auteur (prop `author`)
- La note (prop `rating`, affichée avec `★` et la valeur numérique)
- Un `Pressable` englobant avec feedback visuel (opacity) et un `onPress`
- Styles via `StyleSheet.create()` en utilisant les couleurs de `constants/colors.js`

**Props attendues** : `{ title, author, cover, rating, onPress }`

---

### TODO 2 — FlatList (10 pts)
📄 **Fichier** : `app/(tabs)/index.js`

Remplacer le commentaire TODO par une `FlatList` qui :
- Affiche les livres en grille (2 colonnes)
- Utilise `keyExtractor` avec l'id du livre
- A un `contentContainerStyle` avec du padding
- Gère le `columnWrapperStyle` pour l'espacement
- Affiche un `ListEmptyComponent` quand il n'y a pas de données

---

### TODO 3 — Navigation détail (10 pts)
📄 **Fichier** : `app/detail/[id].js`

Compléter l'écran de détail :
- Récupérer le paramètre `id` avec `useLocalSearchParams()`
- Trouver le livre correspondant dans les données
- Afficher : titre, auteur, description, couverture, note, nombre de pages
- Gérer le cas où le livre n'est pas trouvé (message d'erreur)

---

### TODO 4 — Service API (15 pts)
📄 **Fichier** : `services/books.js`

Compléter les 3 fonctions du service :
- `getPopularBooks()` : retourne la liste des livres depuis `data/books.json`
- `getBookById(id)` : retourne un livre par son id
- `searchBooks(query)` : filtre les livres dont le titre ou l'auteur contient la query

Chaque fonction doit :
- Être `async`
- Simuler un délai réseau avec le `delay()` fourni
- Utiliser le pattern `try/catch` avec gestion d'erreur

---

### TODO 5 — Custom Hook useBooks (15 pts)
📄 **Fichier** : `hooks/useBooks.js`

Créer un hook `useBooks` qui :
- Gère 3 states : `books`, `loading`, `error`
- Appelle `getPopularBooks()` du service au montage
- Expose une fonction `refresh` pour recharger les données
- Retourne `{ books, loading, error, refresh }`

---

### TODO 6 — Hook useSearch avec debounce (15 pts)
📄 **Fichier** : `hooks/useSearch.js`

Compléter le hook `useSearch` :
- Le state `query` et `setQuery` sont fournis
- Implémenter le debounce à 300ms avec `setTimeout`
- La cleanup function doit annuler le timer
- Si query est vide, vider les résultats sans appeler le service
- Gérer `loading` pendant la recherche

---

### TODO 7 — FavoritesContext (20 pts)
📄 **Fichier** : `contexts/FavoritesContext.js`

Compléter le système de favoris :
- Écrire le `reducer` avec les actions `ADD`, `REMOVE`
- Compléter le `FavoritesProvider` avec `useReducer`
- Implémenter les fonctions `addFavorite`, `removeFavorite`, `isFavorite`
- Exposer le tout via le Context

---

## Barème récapitulatif

| TODO | Compétence | Points |
|------|-----------|--------|
| 1 | Core Components + StyleSheet | 15 |
| 2 | FlatList | 10 |
| 3 | Navigation (Expo Router) | 10 |
| 4 | Service API (async/await) | 15 |
| 5 | Custom Hook (useState + useEffect) | 15 |
| 6 | Debounce (setTimeout + cleanup) | 15 |
| 7 | Context API + useReducer | 20 |
| | **Total** | **100** |

---

## Critères de qualité (bonus, jusqu'à +5 pts)

- Code propre et lisible (nommage, indentation)
- Gestion complète des cas d'erreur
- Utilisation systématique de `StyleSheet.create()`
- Respect de l'architecture 3 couches

---

**Bon courage ! 🚀**
