import { Tabs } from 'expo-router';
import { Colors } from '../../constants/colors';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: { backgroundColor: Colors.surface },
        headerTintColor: Colors.text,
        tabBarStyle: {
          backgroundColor: Colors.surface,
          borderTopColor: Colors.border,
        },
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.textMuted,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{ title: 'Découvrir', tabBarLabel: 'Découvrir' }}
      />
      <Tabs.Screen
        name="search"
        options={{ title: 'Recherche', tabBarLabel: 'Recherche' }}
      />
      <Tabs.Screen
        name="favorites"
        options={{ title: 'Favoris', tabBarLabel: 'Favoris' }}
      />
    </Tabs>
  );
}
