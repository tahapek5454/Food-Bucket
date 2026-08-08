import { View } from "react-native";
import { PortalHost } from "@rn-primitives/portal";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { useThemeToggle } from "@/hooks/useThemeToggle";
import { useLanguage } from "@/hooks/useLanguageToogle";
import { useTranslation } from "react-i18next";


function Home() {
  const { toggleTheme } = useThemeToggle();
  const { toggleLanguage, t } = useLanguage();
  return (
    <View className="flex-1 flex-col space-y-4 items-center justify-center bg-background">
      <Text className="text-xl font-bold text-foreground">{t("home.title")}</Text>
      <Button onPress={toggleTheme}>
        <Text className="font-inter">Dil Değiştir</Text>
      </Button>
      <Button onPress={toggleLanguage}>
        <Text className="font-comic">Dil Değiştir</Text>
      </Button>
      <PortalHost />
    </View>
  );
}

export default Home;
