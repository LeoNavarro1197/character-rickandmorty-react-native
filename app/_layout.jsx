import { Stack } from "expo-router";
import { View, Pressable} from "react-native";
import { Logo } from "../components/Logo";
import { InfoIcon } from "../components/icons/icons";
import { Link } from "expo-router";
import { StyleSheet } from "react-native";
import "../global.css";

export default function Layout() {
  return (
    <Stack
      screenOptions={{ 
        headerStyle: { backgroundColor: "black" },
        headerTintColor: "white",
        headerTitle: "",
        headerLeft: () => <Logo style={styles.logo} />,
        headerRight: () => (
          <Link className="mr-2" asChild href="/about">
            <Pressable>
              <InfoIcon style={styles.infoIcon} />
            </Pressable>
          </Link>
        ),
      }}
    />
  );
}

const styles = StyleSheet.create({
  logo: {
    alignItems: "center",
    justifyContent: "center",
    width: 150,
    height: 40,
  },
  infoIcon: {
    alignItems: "center",
    justifyContent: "center",
  },
});

