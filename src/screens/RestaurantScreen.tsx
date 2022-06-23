import { useEffect } from "react";
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { useRestaurant } from "../hooks/useRestaurant";

//@ts-ignore
export const RestaurantScreen = ({ route }) => {
  const { id } = route.params;
  const [{ data, loading, error }, searchRestaurant] = useRestaurant();
  console.log(id);

  useEffect(() => {
    searchRestaurant(id);
  }, [id]);

  const dimensions = Dimensions.get("window");
  const imageHeight = Math.round((dimensions.width * 9) / 16);
  const imageWidth = dimensions.width;

  if (loading)
    return (
      <View>
        <ActivityIndicator size="large"></ActivityIndicator>
      </View>
    );

  if (error)
    return (
      <View style={styles.container}>
        <Text style={styles.textHeader}>{error}</Text>
      </View>
    );

  return (
    <View style={styles.container}>
      {data && (
        <FlatList
          //@ts-ignore
          data={data.photos}
          keyExtractor={(photo) => photo}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {
            console.log({ item });
            return (
              <View style={styles.imageView}>
                <Image
                  style={{ height: imageHeight, width: imageWidth }}
                  source={{ uri: item }}
                />
              </View>
            );
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 24,
  },
  imageView: {
    marginVertical: 24,
    overflow: "hidden",
    borderRadius: 40,
  },
  textHeader: {
    fontWeight: "700",
    fontSize: 24,
  },
});
