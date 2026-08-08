import { View } from "react-native";
import { Text } from "@/components/ui/text";
import { FontAwesomeFreeSolid } from "@react-native-vector-icons/fontawesome-free-solid";
import { truncate } from "@/lib/utils";

import { useTheme } from "@/hooks/useTheme";
import { useLanguage } from "@/hooks/useLanguage";
function HomeHeader() {
  const { t } = useLanguage();
  const { currentTheme } = useTheme();
  
  return (
    <View className="flex flex-row w-full h-[5%] mt-6 bg-background">
      <View className="flex-[3] flex-row gap-x-4 bg-foreground rounded-r-3xl justify-center items-center p-2">
        <FontAwesomeFreeSolid name="home" size={15} color={currentTheme === "light" ? "white" : "black"} />
        <Text className="font-bold text-background text-xs">
          {t("home.address")}
        </Text>
        <Text
          className="font-light text-background/80 text-xs shrink"
          numberOfLines={1}
        >
          {truncate(t("home.tempAddress"))}
        </Text>
        <FontAwesomeFreeSolid name="chevron-right" size={15} color={currentTheme === "light" ? "white" : "black"} />
      </View>
      <View className="flex-[1] bg-background flex-col justify-center items-center gap-y-1">
        <Text className="text-xs font-normal text-foreground">
          {t("common.estimatedArrivalTimeShort")}
        </Text>
        <Text className="text-xl font-bold text-foreground">
          13{t("common.minuteShort")}
        </Text>
      </View>
    </View>
  );
}

export default HomeHeader;
