import { StyleSheet, Text } from "react-native";

export const Rating = ({ rating }) => {
  const newRating = rating / 2;
  const fullStars = Math.round(newRating);
  const emptyStars = 5 - fullStars;
  const stars = "★".repeat(fullStars) + "☆".repeat(emptyStars);

  return <Text style={styles.ratingText}>{stars}</Text>;
};

const styles = StyleSheet.create({
  ratingText: {
    fontSize: 16,
    color: "#F59E0B",
    fontWeight: "600",
  },
});
