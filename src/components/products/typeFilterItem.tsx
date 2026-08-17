import { View } from "react-native";
import { Text } from "@/components/ui/text";
import { Button } from "@/components/ui/button";

export type TypeFilterItemProps = {
  name: string;
  isSelected: boolean;
  id: string;
  selectSubCategory?: (id: string) => void;
};

function TypeFilterItem({ name, isSelected, id, selectSubCategory }: TypeFilterItemProps) {
  return (
    <View className="h-full flex items-center justify-center mx-2">
      <Button onPress={() => {selectSubCategory?.(id)}} variant={isSelected ? "secondary" : "default"}>
        <Text>{name}</Text>
      </Button>
    </View>
  );
}

export default TypeFilterItem;
