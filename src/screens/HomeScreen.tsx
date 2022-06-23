import { useState } from "react";
import { StatusBar, View } from "react-native";

import { Header } from "react-native/Libraries/NewAppScreen";
import { Categories } from "../components/Categories";
import { Restaurants } from "../components/Restaurants";
import { Search } from "../components/Search";

//@ts-ignore
export const HomeScreen = ({ navigation }) => {
  const [term, setTerm] = useState("Burger");
  const listData = [
    { name: "Burger", imageSource: require("../assets/images/burger.png") },
    { name: "Pizza", imageSource: require("../assets/images/pizza.png") },
    { name: "Steak", imageSource: require("../assets/images/steak.png") },
    { name: "Pasta", imageSource: require("../assets/images/pasta.png") },
    { name: "Dessert", imageSource: require("../assets/images/cake.png") },
    {
      name: "Drinks",
      imageSource: require("../assets/images/smoothies.png"),
    },
  ];

  return (
    <View>
      <Header></Header>
      <Search value={term} setValue={setTerm}></Search>
      <Categories
        categories={listData}
        term={term}
        setTerm={setTerm}
      ></Categories>
      <Restaurants term={term} navigation={navigation}></Restaurants>
      <StatusBar></StatusBar>
    </View>
  );
};
