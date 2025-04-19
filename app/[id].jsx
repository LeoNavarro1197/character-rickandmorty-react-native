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
          headerStyle: { backgroundColor: "green" },
          headerTintColor: "black",
          headerLeft: () => {},
          headerTitle: product?.name ?? "Detalle",
          headerRight: () => {}
        }} 
      />
      <View className="flex-1 items-center bg-black">
        {!product ? (
          <ActivityIndicator size="large" color="#fff" />
        ) : (
          <ScrollView>
            <View className="flex-col justify-center items-center pt-4 gap-y-1">
                <Image source={{ uri: product.image }} className="w-72 h-72 justify-center items-center rounded-lg" />
                <Text className="text-white text-wrap font-bold text-2xl">{"Nombre: " + (product.name ? product.name : "No tiene nombre")}</Text>
                <Text className="text-white text-wrap font-bold text-2xl">{"Especie: " + (product.species ? product.species : "No tiene especie")}</Text>
                <Text className="text-white text-wrap font-bold text-2xl">{"Estado: " + (product.status ? product.status === "unknown" ? "No tiene estado" : product.status : "No tiene estado")}</Text>
                <Text className="text-white text-wrap font-bold text-2xl">{"Genero: " + (product.gender ? product.gender : "No tiene genero")}</Text>
                <Text className="text-white text-wrap font-bold text-2xl">{"Locación: " + (product.location ? product.location.name : "No tiene locación")}</Text>
                <Text className="text-white text-wrap font-bold text-2xl">{"Origen: " + (product.origin ? product.origin.name === "unknown" ? "No tiene origen" : product.origin.name : "No tiene origen")}</Text>
                <Text className="text-white text-wrap font-bold text-2xl">{"Tipo: " + (product.type ? product.type === "" ? "No tiene tipo" : product.type : "No tiene tipo")}</Text>
                <Text className="text-white text-wrap font-bold text-2xl">{"Episodios: " + (product.episode ? product.episode.length : "No tiene episodios")}</Text>
            </View>
          </ScrollView>
        )}
      </View>
    </Screen>
  );
}
