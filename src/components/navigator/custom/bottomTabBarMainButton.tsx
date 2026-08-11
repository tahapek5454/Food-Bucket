import { View } from "react-native";
import { PlatformPressable } from "@react-navigation/elements";
import type { BottomTabBarButtonProps } from "@react-navigation/bottom-tabs";
import FontAwesomeFreeSolid from "@react-native-vector-icons/fontawesome-free-solid";

function BottomTabBarMainButton({ style, ...props }: BottomTabBarButtonProps) {
  return (
    <PlatformPressable
      {...props}
      style={[style, { top: -20, backgroundColor: "transparent" }]}
      pressOpacity={0.85}
      android_ripple={{ color: "rgba(255, 255, 255, 0.15)", borderless: true, radius: 28 }}
    >
      <View className="h-11 w-11 items-center justify-center rounded-full border-2 border-white bg-orange-600 shadow-lg shadow-black/30">
        <FontAwesomeFreeSolid name="list" size={22} color="#ffffff" />
      </View>
    </PlatformPressable>
  );
}

export default BottomTabBarMainButton;