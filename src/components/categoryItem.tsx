import { TouchableOpacity, ImageSourcePropType, Dimensions } from "react-native"
import { Text } from "./ui/text"
import LazyImage from "./lazyImage"

type CategoryItemProps = {
  image: ImageSourcePropType
  title: string,
  width?: number,
  height?: number,
}

const { width: windowWidth, height: windowHeight } = Dimensions.get("window")

function CategoryItem({ image, title, width, height }: CategoryItemProps) {
  const itemWidth = width ?? windowWidth * 0.18
  const itemHeight = height ?? windowHeight * 0.18

  return (
    <TouchableOpacity style={{ width: itemWidth }} className="flex flex-col items-center gap-2 rounded-xl">
      <LazyImage className="rounded-xl" source={image} width={itemWidth} height={itemHeight} />
      <Text className="text-foreground text-xs text-center" numberOfLines={2}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

export default CategoryItem