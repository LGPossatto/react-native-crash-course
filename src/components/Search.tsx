import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

import { elevation } from "../common/styles";

interface props {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

export const Search = ({ value, setValue }: props) => {
  const [input, setInput] = useState("");

  const handleOnEndEditing = () => {
    if (!input) return;
    setValue(input);
    setInput("");
  };

  return (
    <View style={[styles.container, styles.elevation]}>
      <FontAwesome name="search" size={24}></FontAwesome>
      <TextInput
        style={styles.input}
        placeholder="Restaurants, foods..."
        value={input}
        onChangeText={(text) => {
          setInput(text);
        }}
        onEndEditing={handleOnEndEditing}
      ></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    marginTop: 16,
    marginHorizontal: 24,
    borderRadius: 40,
  },
  elevation,
  input: {
    marginLeft: 8,
    fontSize: 24,
  },
});
