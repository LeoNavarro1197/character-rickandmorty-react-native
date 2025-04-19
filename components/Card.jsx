import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { Animated, useEffect, useRef } from "react";
import { Platform } from "react-native";
import { Link } from "expo-router";

export function Card({ product }) {

  const viewStyle = Platform.select({
    web : { marginRight : 10, marginLeft : 10},
    default : { margin : 0}
  })
    return (
      <Link href={`/${product.id}`} asChild>
        <Pressable>
          <View style={viewStyle} className="flex-row bg-neutral-600 p-4 mb-4 rounded-lg gap-4" >
            <Image className="w-24 h-24 rounded-lg" source={{ uri: product.image }} />
            <View className="flex-col justify-center">
            <Text className="text-white">{"Nombre: " + product.name}</Text>
            <Text numberOfLines={1} className="text-white">{"Estatus: " + product.status}</Text> 
            <Text className="text-white">{"Especie: " + product.species}</Text>
            </View>
          </View>
        </Pressable>
      </Link>
    )
}

export function AnimatedCard({ product, index }) {
    const opacity = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 500,
            delay: index * 100,
            useNativeDriver: true
        }).start();
    }, [opacity, index]);

    return (
      <Animated.View style={{ opacity }}>
        <Card product={product} />
      </Animated.View>
    )
}

const styles = StyleSheet.create({
  image: {
    width: 24,
    height: 24,
    borderRadius: 12,
  },
});