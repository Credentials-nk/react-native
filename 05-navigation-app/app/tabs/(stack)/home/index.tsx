import CustomButton from "@/components/shared/CustomButton";
import { Link, router } from "expo-router";
import { SafeAreaView, View } from "react-native";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View className="px-10 pt-10">
        <CustomButton
          variant="contained"
          color="default-light"
          clasName="mb-2"
          onPress={() => router.push("/tabs/(stack)/products")}
          onLongPress={() => console.log("On long press...")}
        >
          Productos
        </CustomButton>

        <CustomButton
          bg="secondary"
          clasName="mb-2"
          onPress={() => router.push("/tabs/(stack)/profile")}
          onLongPress={() => console.log("On long press...")}
        >
          Profile
        </CustomButton>

        <CustomButton
          bg="terciary"
          onPress={() => router.push("/tabs/(stack)/settings")}
          onLongPress={() => console.log("On long press...")}
        >
          Settings
        </CustomButton>

        <Link href="/tabs/products" asChild>
          <CustomButton
            variant="text"
            color="primary"
            onPress={() => router.push("/tabs/products")}
          >
            Productos
          </CustomButton>
        </Link>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
