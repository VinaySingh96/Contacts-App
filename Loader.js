import { View } from "react-native";

const Loader = () => (
  <View className="flex justify-center items-center py-3">
    <View className="animate-spin rounded-full h-20 w-20 border-b-2 border-red-700" />
  </View>
);

export default Loader;
