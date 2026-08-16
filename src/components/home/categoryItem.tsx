import {
  TouchableOpacity,
  ImageSourcePropType,
  Dimensions,
} from "react-native";
import { Text } from "@/components/ui/text";
import LazyImage from "@/components/lazyImage";
import { useNavigation } from "@react-navigation/native";
import type {
  ProductsScreenProp,
} from "@/components/navigator/home";


type CategoryItemProps = {
  id: string;
  image: ImageSourcePropType;
  title: string;
  width?: number;
  height?: number;
};

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

function CategoryItem({ id, image, title, width, height }: CategoryItemProps) {
  const itemWidth = width ?? windowWidth * 0.18;
  const itemHeight = height ?? windowHeight * 0.18;
  const navigation = useNavigation<ProductsScreenProp>();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("Products", { categoryId: id })}
      style={{ width: itemWidth }}
      className="flex flex-col items-center gap-2 rounded-xl"
    >
      <LazyImage
        className="rounded-xl"
        source={image}
        width={itemWidth}
        height={itemHeight}
      />
      <Text className="text-foreground text-xs text-center" numberOfLines={2}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

export default CategoryItem;
