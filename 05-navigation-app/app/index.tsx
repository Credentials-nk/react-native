import { Link, Redirect } from "expo-router";
import { SafeAreaView, Text, View } from "react-native";

const App = () => {
  return <Redirect href="/(stack)/home" />;

  // return (
  //   <SafeAreaView>
  //     <View className="mt-6 mx-5">
  //       <Text className="text-3xl" style={{ fontFamily: "WorkSans-Black" }}>
  //         Hello world
  //       </Text>

  //       <Text className="text-3xl font-work-Light text-terciary">
  //         Hello world
  //       </Text>

  //       <Text className="text-5xl font-work-Medium text-secondary-100 ">
  //         Hello world
  //       </Text>

  //       <Text className="text-5xl ">Hello world</Text>

  //       <Link href="/products">Products</Link>
  //     </View>
  //   </SafeAreaView>
  // );
};

export default App;
