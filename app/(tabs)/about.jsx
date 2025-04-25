import { View, Text, Pressable, ScrollView, Image, Platform } from "react-native";
import { Link, Stack } from "expo-router";
import { HomeIcon } from "../../components/icons/icons";
import { Screen } from "../../components/Screen";

export default function About() {

  const viewStyle = Platform.select({
    web: { marginRight: 50, marginLeft: 50, alignItems: "center" },
    /*default: { paddingTop: insets.top, paddingBottom: insets.bottom, flex: 1, alignItems: "center" },*/
  });

  return (
    <Screen>
      <View className="flex-1 items-center" style={[viewStyle]}>
      <Stack.Screen 
        options={{ 
          headerStyle: { backgroundColor: "blue" },
          headerTintColor: "black",
          headerLeft: () => {},
          headerRight: () => {},
          headerTitle: "About"
        }} 
      />
        <ScrollView className="flex-1 px-4">
          <View className="items-center py-2">
            <Text className="text-white text-4xl font-bold mb-6">Sobre esta App</Text>
            
            <Image 
              source={{ uri: "https://rickandmortyapi.com/api/character/avatar/1.jpeg" }} 
              className="w-40 h-40 rounded-full mb-6" 
            />
            
            <Text className="text-white text-lg mb-4 text-center">
              Esta aplicación fue creada como un proyecto de demostración utilizando React Native y Expo.
            </Text>
            
            <Text className="text-white text-lg mb-4 text-center">
              Utiliza la API pública de Rick and Morty para mostrar información sobre los personajes de la serie.
            </Text>
            
            <View className="bg-gray-800 p-4 rounded-lg mb-4 w-full">
              <Text className="text-white text-xl font-bold mb-2">Tecnologías utilizadas:</Text>
              <Text className="text-white">• React Native</Text>
              <Text className="text-white">• Expo Router</Text>
              <Text className="text-white">• TailwindCSS (NativeWind)</Text>
              <Text className="text-white">• Rick and Morty API</Text>
            </View>
            
            <View className="bg-gray-800 p-4 rounded-lg mb-4 w-full">
              <Text className="text-white text-xl font-bold mb-2">Características:</Text>
              <Text className="text-white">• Navegación por pestañas</Text>
              <Text className="text-white">• Visualización de personajes</Text>
              <Text className="text-white">• Detalles de cada personaje</Text>
              <Text className="text-white">• Diseño responsivo</Text>
            </View>
            
            <Text className="text-white text-lg italic text-center mt-4">
              "Wubba Lubba Dub Dub!" - Rick Sanchez
            </Text>
          </View>
        </ScrollView>
      </View>
    </Screen>
  );
}
