import { LayoutChangeEvent, View } from "react-native";
import { Text } from "@/components/ui/text";

export type CategoryFilterItemProps = {
  title: string;
  isSelected?: boolean;
  onLayout?: ((event: LayoutChangeEvent) => void) | undefined
};

function CategoryFilterItem({ title, isSelected, onLayout }: CategoryFilterItemProps) {
  return (
    <View onLayout={onLayout} className="flex flex-col px-2 items-center justify-center bg-primary" 
    style={ isSelected ? { borderBottomColor: '#ea580c', borderBottomWidth: 2.5 } : undefined }>
      <Text className="text-primary-foreground text-xs font-light" style={ isSelected ? { color: '#ea580c' } : undefined }>{title}</Text>
    </View>
  );
}

export default CategoryFilterItem;
