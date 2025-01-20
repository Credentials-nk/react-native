import { Stack } from "expo-router";

const StackLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        headerShadowVisible: false,
        contentStyle: {
          backgroundColor: "white",
        },
      }}
    >
      <Stack.Screen
        name="home/index"
        options={{
          title: "Home",
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="products/index"
        options={{
          title: "Products Screen",
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="products/[id]"
        options={{
          title: "Product Screen",
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="profile/index"
        options={{
          title: "Profile Screen",
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="settings/index"
        options={{
          title: "Settings Screen",
          headerTitleAlign: "center",
        }}
      />
    </Stack>
  );
};

export default StackLayout;
