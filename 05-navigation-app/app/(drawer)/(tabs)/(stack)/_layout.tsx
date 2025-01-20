import { Ionicons } from "@expo/vector-icons";
import { DrawerActions, StackActions } from "@react-navigation/native";
import { router, Stack, useNavigation } from "expo-router";

const StackLayout = () => {
  const navigation = useNavigation();

  const onHeaderLeftClick = (canGoBack?: boolean) => {
    canGoBack ? router.back() : navigation.dispatch(DrawerActions.toggleDrawer);
  };

  return (
    <Stack
      screenOptions={{
        // headerShown: false,
        headerShadowVisible: false,
        contentStyle: {
          backgroundColor: "white",
        },
        headerLeft: ({ tintColor, canGoBack }) => (
          <Ionicons
            color={tintColor}
            onPress={() => onHeaderLeftClick(canGoBack)}
            name={canGoBack ? "arrow-back-sharp" : "menu"}
            size={20}
            className="mr-5"
          />
        ),
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
