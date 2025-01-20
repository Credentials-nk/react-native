import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Platform, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const GoBackButton = () => {
  return (
    <View
      style={{
        position: "absolute",
        top: Platform.OS === "ios" ? -30 : 15,
        left: 15,
        zIndex: 10,
      }}
    >
      <SafeAreaView />
      <Ionicons
        color="blue"
        name="arrow-back-sharp"
        size={20}
        className="mr-5"
        onPress={() => router.back()}
      />
    </View>
  );
};

export default GoBackButton;
