import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";

import { restaurantType } from "../hooks/useRestaurants";
import { elevation } from "../common/styles";

interface props {
  restaurant: restaurantType;
  navigation: any;
}

export const RestaurantItem = ({ restaurant, navigation }: props) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Restaurant", { id: restaurant.id })}
    >
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{ uri: restaurant.image_url }}
        ></Image>
        <View>
          <Text style={styles.header}>{restaurant.name}</Text>
          <View style={styles.info}>
            <Text style={styles.rating}>{restaurant.rating}</Text>
            <Text style={styles.price}>{restaurant.price}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    ...elevation,
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    marginVertical: 12,
    borderRadius: 60,
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 40,
    marginTop: 2,
    marginRight: 12,
  },
  header: {
    fontWeight: "700",
    fontSize: 20,
  },
  info: {
    flexDirection: "row",
  },
  rating: {
    marginRight: 12,
    fontSize: 16,
  },
  price: {
    color: "#d1a72b",
    fontSize: 16,
    fontWeight: "700",
  },
});
