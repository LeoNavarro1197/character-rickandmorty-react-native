import { Tabs } from "expo-router";
import { HomeIcon, AboutIcon } from "../../components/icons/icons";

export default function TabsLayout(){
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: "black",
                    borderTopWidth: 1,
                    borderTopColor: "gray",
                },
                tabBarActiveTintColor: "white",
                tabBarInactiveTintColor: "gray",
                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: "bold",
                },
                tabBarIconStyle: {
                    marginBottom: 0,
                },
                tabBarLabelPosition: "beside-icon",
            }}
        >
            <Tabs.Screen 
                name="index"
                options={{
                    title: "Home",
                    tabBarIcon: ({ color }) => <HomeIcon color={color} />
                }}
            />
            <Tabs.Screen 
                name="about"
                options={{
                    title: "About",
                    tabBarIcon: ({ color }) => <AboutIcon color={color} />
                }}
            />
        </Tabs>
    )
}