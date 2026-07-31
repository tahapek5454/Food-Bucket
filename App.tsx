import { View, } from "react-native";
import { PortalHost } from "@rn-primitives/portal";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { useThemeToggle } from "@/hooks/useThemeToggle";

export default function App() {
  const { toggleTheme } = useThemeToggle();

  return (
    <View className="flex-1 flex-col space-y-4 items-center justify-center bg-background">
      <Text className="text-xl font-bold text-foreground">
        Welcome to Nativewind!
      </Text>
      <Button onPress={toggleTheme}>
        <Text>Tema Değiştir</Text>
      </Button>
      <PortalHost />
    </View>
  );
}
