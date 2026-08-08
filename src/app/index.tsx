import { View } from "react-native";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { useTheme } from "@/hooks/useTheme";
import { useLanguage } from "@/hooks/useLanguage";
import HomeHeader from "@/components/home/homeHeader";

function Home() {
  const { toggleTheme } = useTheme();
  const { toggleLanguage, t } = useLanguage();
  return (
    <View className="flex-1 flex-col space-y-4 items-center justify-start  bg-background">
      <HomeHeader />

      <Button onPress={toggleTheme}>
        <Text>{t("common.changeTheme")}</Text>
      </Button>
      <Button onPress={toggleLanguage}>
        <Text>{t("common.changeLanguage")}</Text>
      </Button>
    </View>
  );
}

export default Home;
