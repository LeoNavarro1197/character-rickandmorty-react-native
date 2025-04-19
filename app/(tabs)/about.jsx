import { View, Text, Pressable } from "react-native";
import { Link, Stack } from "expo-router";
import { HomeIcon } from "../../components/icons/icons";
import { Screen } from "../../components/Screen";

export default function About() {
  return (
    <Screen>
      <Stack.Screen 
        options={{ 
          headerStyle: { backgroundColor: "blue" },
          headerTintColor: "black",
          headerLeft: () => {},
          headerRight: () => {},
          headerTitle: "About"
        }} 
      />
      <View className="flex-1 items-center justify-center">
        <Text className="text-white text-4xl font-bold">About</Text>
      </View>
    </Screen>
  );
}
