import CustomButton from "@/components/shared/CustomButton";
import { DrawerActions } from "@react-navigation/native";
import { Link, router, useNavigation } from "expo-router";
import { SafeAreaView, View } from "react-native";

const HomeScreen = () => {
  const navigation = useNavigation();

  const onToggleDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer);
  };

  return (
    <SafeAreaView>
      <View className="px-10 pt-10">
        <CustomButton
          variant="contained"
          color="default-light"
          clasName="mb-2"
          onPress={() => router.push("/products")}
          onLongPress={() => console.log("On long press...")}
        >
          Productos
        </CustomButton>

        <CustomButton
          bg="secondary"
          clasName="mb-2"
          onPress={() => router.push("/profile")}
          onLongPress={() => console.log("On long press...")}
        >
          Profile
        </CustomButton>

        <CustomButton
          bg="terciary"
          onPress={() => router.push("/settings")}
          onLongPress={() => console.log("On long press...")}
        >
          Settings
        </CustomButton>

        <Link href="/products" asChild>
          <CustomButton
            variant="text"
            color="primary"
            onPress={() => router.push("/products")}
          >
            Productos
          </CustomButton>
        </Link>

        <CustomButton onPress={onToggleDrawer}>Abrir Menu</CustomButton>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
