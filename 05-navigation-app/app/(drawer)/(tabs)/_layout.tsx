import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        // headerShadowVisible: false,
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "grey", // Gris claro para íconos inactivos
        tabBarShowLabel: false, // Ocultar etiquetas
        tabBarStyle: { backgroundColor: "black", paddingTop: 10 }, // Azul como fondo
      }}
    >
      <Tabs.Screen
        name="(stack)"
        options={{
          headerShown: false,
          title: "Stack",
          headerTitleAlign: "center",
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name="apps-sharp" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="home/index"
        options={{
          title: "Home Screen",
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="favorites/index"
        options={{
          title: "Favorites Screen",
          tabBarIcon: ({ color }) => (
            <Ionicons size={28} name="star" color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
