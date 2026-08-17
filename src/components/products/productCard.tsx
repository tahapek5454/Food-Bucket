import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import RippledPressable from "@/components/ui/rippledPressable";
import { Text } from "@/components/ui/text";
import LazyImage from "@/components/lazyImage";
import { ImageSourcePropType, useWindowDimensions, View } from "react-native";
import { FontAwesomeFreeSolid } from "@react-native-vector-icons/fontawesome-free-solid";

export type ProductCardProps = {
  image: ImageSourcePropType;
  name: string;
  quantity: string;
  price: number;
  discountedPrice: number;
};

function ProductCard({
  image,
  name,
  quantity,
  price,
  discountedPrice,
}: ProductCardProps) {
  const { width: windowWidth } = useWindowDimensions();
  const cardWidth = windowWidth * 0.28;
  const cardHeight = cardWidth * 0.75 + 110;

  return (
    <View className="relative mx-2">
      <RippledPressable
      >
        <Card
          className=" gap-0 py-0 "
          style={{ width: cardWidth, height: cardHeight, pointerEvents: "none" }}
        >
          <CardHeader className="items-start overflow-hidden justify-center p-0">
            <LazyImage
              width={cardWidth}
              height={cardWidth * 0.75}
              resizeMode="cover"
              className="rounded-xl"
              source={image}
            />
          </CardHeader>
          <CardContent className="mt-1 gap-y-2  p-1">
            <View className="flex flex-row items-center gap-2">
              <Text className="text-ring text-xs line-through">₺{price.toFixed(2)}</Text>
              <Text className="text-orange-600 text-sm font-normal">₺{discountedPrice.toFixed(2)}</Text>
            </View>
            <Text className="text-card-foreground font-medium text-xs">
              {name}
            </Text>
          </CardContent>
          <CardFooter className="pl-1 mt-auto">
            <Text className="text-ring text-sm">{quantity}</Text>
          </CardFooter>
        </Card>
      </RippledPressable>
      <View
        className="w-7 h-7 absolute -top-2 -right-2 rounded-full bg-orange-600 flex items-center justify-center"
      >
        <FontAwesomeFreeSolid name="plus" size={15} color="white" />
      </View>
    </View>
  );
}

export default ProductCard;
