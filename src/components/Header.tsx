import { Text, View, StyleSheet } from "react-native";

export const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.lightHeader}>Grab your</Text>
      <Text style={styles.boldHeader}>delicious meal!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginTop: 60, marginHorizontal: 24 },
  lightHeader: { fontSize: 32 },
  boldHeader: { fontSize: 40, fontWeight: "700" },
});
