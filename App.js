import { Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { useFonts } from "expo-font";

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator>
        <Stack.Screen />
        <Stack.Screen />
      </StackNavigator>
    </NavigationContainer>
  );
}
