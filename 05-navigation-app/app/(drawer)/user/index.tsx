import GoBackButton from "@/components/shared/GoBackButton";
import { Text, View } from "react-native";

const UserScreen = () => {
  return (
    <View className="flex-1 bg-blue-50 items-center justify-center">
      <Text className="text-2xl font-bold text-blue-900">User Screen</Text>
      <Text className="text-lg text-gray-600 mt-2">
        Welcome to the User Screen.
      </Text>

      <GoBackButton />
    </View>
  );
};

export default UserScreen;
