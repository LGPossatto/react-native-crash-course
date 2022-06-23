import { useEffect } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { useRestaurants } from "../hooks/useRestaurants";
import { RestaurantItem } from "./RestaurantItem";

interface props {
  term: string;
  navigation: any;
}

//@ts-ignore
export const Restaurants = ({ term, navigation }: props) => {
  const [{ data, loading, error }, searchRestaurants] = useRestaurants();

  useEffect(() => {
    searchRestaurants(term);
  }, [term]);

  if (loading) return <ActivityIndicator size="large"></ActivityIndicator>;

  if (error)
    return (
      <View style={styles.container}>
        <Text style={styles.textHeader}>{error}</Text>
      </View>
    );

  return (
    <View style={styles.container}>
      <Text style={styles.textHeader}>Top Restaurants</Text>
      {data && (
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <RestaurantItem
              restaurant={item}
              navigation={navigation}
            ></RestaurantItem>
          )}
          showsVerticalScrollIndicator={false}
          keyExtractor={({ name, image_url }) => `${name}${image_url}`}
        ></FlatList>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 24,
  },
  textHeader: {
    fontWeight: "700",
    fontSize: 24,
  },
});
