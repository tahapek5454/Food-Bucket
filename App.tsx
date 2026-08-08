import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import NativeBottomTab from "@/components/nativeBottomTab";
import { PortalHost } from "@rn-primitives/portal";
import { useTheme } from "@/hooks/useTheme";
import "@/i18n";

export default function App() {
  const { currentTheme } = useTheme();
  return (
    <NavigationContainer>
      <StatusBar
        barStyle={currentTheme === "light" ? "dark-content" : "light-content"}
        backgroundColor="transparent"
        translucent
      />
      <NativeBottomTab />
      <PortalHost />
    </NavigationContainer>
  );
}
