import { View, Text, ScrollView, ActivityIndicator, Image } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Screen } from "../components/Screen";
import { Stack } from "expo-router";
import { useState, useEffect } from "react";
import { getProduct } from "../lib/Api";

export default function Detail() {
  const { id } = useLocalSearchParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (id) {
      getProduct(id).then((data) => {
        console.log("Producto recibido:", data);
        setProduct(data);
      });
    }
  }, [id]);

  return (
    <Screen>
      <Stack.Screen 
        options={{ 
          headerStyle: { backgroundColor: "yellow" },
          headerTintColor: "black",
          headerTitleAlign: "center",
          headerTitleStyle: { fontSize: 20, fontWeight: "bold" },
          headerLeft: () => {},
          headerTitle: product?.name ?? "Detalle",
          headerRight: () => (
            <View className="mr-2">
              {product && (
                <Text className="font-bold">
                  {product.status === "Alive" ? "🟢" : product.status === "Dead" ? "🔴" : "⚪"}
                </Text>
              )}
            </View>
          )
        }} 
      />
      <View className="flex-1 items-center bg-black">
        {!product ? (
          <ActivityIndicator size="large" color="#fff" />
        ) : (
          <ScrollView className="w-full">
            <View className="flex-col items-center pt-6 px-4 pb-10">
              <View className="relative mb-6">
                <Image 
                  source={{ uri: product.image }} 
                  className="w-80 h-80 rounded-2xl" 
                  resizeMode="cover"
                />
                <View className="absolute bottom-0 right-0 bg-yellow-500 px-3 py-1 rounded-tl-xl rounded-br-xl">
                  <Text className="font-bold text-black">
                    {product.status === "Alive" ? "Vivo" : product.status === "Dead" ? "Muerto" : "Desconocido"}
                  </Text>
                </View>
              </View>
              
              <View className="w-full bg-gray-800 rounded-xl p-5 mb-6">
                <Text className="text-yellow-400 text-3xl font-bold text-center mb-4">{product.name || "Sin nombre"}</Text>
                <View className="flex-row justify-between mb-3">
                  <View className="w-1/2">
                    <Text className="text-gray-400 text-sm">Especie</Text>
                    <Text className="text-white text-lg font-semibold">{product.species || "Desconocida"}</Text>
                  </View>
                  <View className="w-1/2">
                    <Text className="text-gray-400 text-sm">Género</Text>
                    <Text className="text-white text-lg font-semibold">{product.gender || "Desconocido"}</Text>
                  </View>
                </View>
                <View className="flex-row justify-between mb-3">
                  <View className="w-1/2">
                    <Text className="text-gray-400 text-sm">Tipo</Text>
                    <Text className="text-white text-lg font-semibold">{product.type && product.type !== "" ? product.type : "Desconocido"}</Text>
                  </View>
                  <View className="w-1/2">
                    <Text className="text-gray-400 text-sm">Episodios</Text>
                    <Text className="text-white text-lg font-semibold">{product.episode ? product.episode.length : 0}</Text>
                  </View>
                </View>
              </View>
              
              <View className="w-full bg-gray-800 rounded-xl p-5">
                <Text className="text-yellow-400 text-xl font-bold mb-3">Ubicación</Text>
                <View className="bg-gray-700 rounded-lg p-3 mb-4">
                  <Text className="text-gray-400 text-sm">Actual</Text>
                  <Text className="text-white text-lg font-semibold">{product.location ? product.location.name : "Desconocida"}</Text>
                </View>
                <View className="bg-gray-700 rounded-lg p-3">
                  <Text className="text-gray-400 text-sm">Origen</Text>
                  <Text className="text-white text-lg font-semibold">
                    {product.origin && product.origin.name !== "unknown" ? product.origin.name : "Desconocido"}
                  </Text>
                </View>
              </View>
            </View>
          </ScrollView>
        )}
      </View>
    </Screen>
  );
}
