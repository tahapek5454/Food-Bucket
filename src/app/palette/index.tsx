import { ScrollView, View } from "react-native";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/useTheme";

const COLOR_TOKENS = [
  { name: "background", bgClass: "bg-background" },
  { name: "foreground", bgClass: "bg-foreground" },
  { name: "card", bgClass: "bg-card" },
  { name: "card-foreground", bgClass: "bg-card-foreground" },
  { name: "popover", bgClass: "bg-popover" },
  { name: "popover-foreground", bgClass: "bg-popover-foreground" },
  { name: "primary", bgClass: "bg-primary" },
  { name: "primary-foreground", bgClass: "bg-primary-foreground" },
  { name: "secondary", bgClass: "bg-secondary" },
  { name: "secondary-foreground", bgClass: "bg-secondary-foreground" },
  { name: "muted", bgClass: "bg-muted" },
  { name: "muted-foreground", bgClass: "bg-muted-foreground" },
  { name: "accent", bgClass: "bg-accent" },
  { name: "accent-foreground", bgClass: "bg-accent-foreground" },
  { name: "destructive", bgClass: "bg-destructive" },
  { name: "border", bgClass: "bg-border" },
  { name: "input", bgClass: "bg-input" },
  { name: "ring", bgClass: "bg-ring" },
  { name: "chart-1", bgClass: "bg-chart-1" },
  { name: "chart-2", bgClass: "bg-chart-2" },
  { name: "chart-3", bgClass: "bg-chart-3" },
  { name: "chart-4", bgClass: "bg-chart-4" },
  { name: "chart-5", bgClass: "bg-chart-5" },
] as const;

function Palette() {
  const { currentTheme, toggleTheme } = useTheme();

  return (
    <ScrollView className="flex-1 bg-background" contentContainerClassName="px-4 py-6">
      <View className="mb-6 gap-3">
        <Text variant="h3" className="text-left">
          Renk Paleti Önizleme
        </Text>
        <Text className="text-muted-foreground">
          Aktif tema: {currentTheme === "dark" ? "Dark" : "Light"}
        </Text>
        <Button onPress={toggleTheme} className="self-start">
          <Text>Temayı Değiştir</Text>
        </Button>
      </View>

      <View className="flex-row flex-wrap justify-between gap-y-5">
        {COLOR_TOKENS.map((token) => (
          <View key={token.name} className="w-[48%] items-center">
            <View className={`h-24 w-full rounded-lg border border-border ${token.bgClass}`} />
            <Text className="mt-2 text-center text-sm">{token.name}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

export default Palette;