import { View } from "react-native";
import { PortalHost } from "@rn-primitives/portal";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { useThemeToggle } from "@/hooks/useThemeToggle";


function Home() {
  const { toggleTheme } = useThemeToggle();
  return (
    <View className="flex-1 flex-col space-y-4 items-center justify-center bg-background">
      <Text className="text-xl font-bold text-foreground">Home Page</Text>
      <Button onPress={toggleTheme}>
        <Text className="font-inter">Tema Değiştir</Text>
      </Button>
       <Text className="font-comic">Tema Değiştir</Text>
      <PortalHost />
    </View>
  );
}

export default Home;
