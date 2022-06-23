import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { HomeScreen } from "./src/screens/HomeScreen";
import { RestaurantScreen } from "./src/screens/RestaurantScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerMode: "screen",
          headerTintColor: "white",
          headerStyle: { backgroundColor: "#52439e", alignContent: "center" },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "BusinessSearch",
          }}
        />
        <Stack.Screen
          name="Restaurant"
          component={RestaurantScreen}
          options={{
            title: "Restaurant",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
