import { NavigationContainer } from "@react-navigation/native";
import NativeBottomTab from "@/components/nativeBottomTab";
import "@/i18n";

export default function App() {
  return (
    <NavigationContainer>
      <NativeBottomTab />
    </NavigationContainer>
  );
}
