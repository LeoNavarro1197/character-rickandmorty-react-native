import { Platform, StyleSheet, Text, View, Image, ScrollView, ActivityIndicator, FlatList, Pressable } from "react-native";
import { useState, useEffect } from "react";
import { getProducts } from "../lib/Api";
//import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Card } from "./Card";
import { Logo } from "./Logo";
import { Link } from "expo-router";
import { InfoIcon, HomeIcon } from "./icons/icons";
import { Screen } from "./Screen";

export default function Main() {
  const [products, setProducts] = useState([]);
  //const insets = useSafeAreaInsets();

  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
    });
  }, []);

  const viewStyle = Platform.select({
    web: { margin: 50, flex: 1, alignItems: "center" },
    /*default: { paddingTop: insets.top, paddingBottom: insets.bottom, flex: 1, alignItems: "center" },*/
  });

  return (
    <Screen>
      <View className="flex items-center" style={[viewStyle, {backgroundColor: "#000"}]}>
        {products.length === 0 ? (
          <ActivityIndicator size="large" color="#fff" />
        ) : (
          <FlatList
            data={products}
            keyExtractor={(product) => product.id.toString()}
            renderItem={({ item }) => <Card product={item} />}
            scrollEnabled={true}
          />
        )}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  logo: {
    justifyContent: "center",
    alignItems: "center",
    width: 200,
    height: 100,
  },
});

