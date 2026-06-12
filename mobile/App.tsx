import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "./src/screens/HomeScreen";
import { ExploreScreen } from "./src/screens/ExploreScreen";
import { DetailScreen } from "./src/screens/DetailScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#0F172A",
          },
          headerTintColor: "#FFFFFF",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 15,
          },
          cardStyle: {
            backgroundColor: "#FAF9F6",
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Explore"
          component={ExploreScreen}
          options={{ title: "Explore Experiences" }}
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{ title: "Experience Details" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
