import GoBackButton from "@/components/shared/GoBackButton";
import { Text, View } from "react-native";

const ScheduleScreen = () => {
  return (
    <View className="flex-1 bg-green-50 items-center justify-center">
      <Text className="text-2xl font-bold text-green-900">Schedule Screen</Text>
      <Text className="text-lg text-gray-600 mt-2">
        Here is your scheduled timetable.
      </Text>

      <GoBackButton />
    </View>
  );
};

export default ScheduleScreen;
