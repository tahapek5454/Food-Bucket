import { View, Dimensions } from "react-native"
import CategoryItem from "@/components/home/categoryItem"
import categories from "@/assets/examples/categories"
import { useLanguage } from "@/hooks/useLanguage"

const COLUMNS = 4
const GAP = 16
const { width: windowWidth } = Dimensions.get("window")
const itemWidth = (windowWidth - GAP * (COLUMNS + 1)) / COLUMNS
const itemHeight = itemWidth // kare

function CategoryItemList() {
  const { isTurkish } = useLanguage();
  return (
    <View className="flex-row flex-wrap mt-2" style={{ gap: GAP, paddingHorizontal: GAP }}>
      {categories.map((category) => (
        <CategoryItem key={category.id} id={category.id} title={isTurkish ? category.name : category.nameEn} image={{ uri: category.src }} width={itemWidth} height={itemHeight} />
      ))}
    </View>
  )
}

export default CategoryItemList