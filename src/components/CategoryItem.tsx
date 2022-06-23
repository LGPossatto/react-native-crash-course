import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { elevation } from "../common/styles";

interface props {
  name: string;
  ImageSource: ImageSourcePropType;
  index: number;
  active: boolean;
  handlePress: () => void;
}

export const CategoryItem = ({
  name,
  ImageSource,
  index,
  active,
  handlePress,
}: props) => {
  return (
    <TouchableOpacity onPress={handlePress}>
      <View
        style={[
          styles.container,
          index === 0 ? { marginLeft: 24 } : { marginLeft: 16 },
          active
            ? { backgroundColor: "#52439e" }
            : { backgroundColor: "white" },
        ]}
      >
        <View style={styles.imageView}>
          <Image style={styles.image} source={ImageSource}></Image>
        </View>
        <Text
          style={[
            styles.text,
            active ? { color: "white" } : { color: "black" },
          ]}
        >
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    ...elevation,
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "#fff",
    width: 80,
    height: 120,
    padding: 8,
    marginVertical: 24,
    borderRadius: 20,
  },
  imageView: {
    backgroundColor: "#fff",
    padding: 8,
    borderRadius: 20,
  },
  image: {
    width: 40,
    height: 40,
  },
  text: {
    fontSize: 16,
    fontWeight: "700",
  },
});
