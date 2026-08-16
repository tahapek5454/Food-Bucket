import { Dimensions, ScrollView } from "react-native";
import CategoryFilterItem from "./categoryFilterItem";
import categories from "@/assets/examples/categories";
import { useLanguage } from "@/hooks/useLanguage";
import { useEffect, useRef, useState } from "react";
const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

export type CategoryFilterProps = {
  categoryId: string;
};

function CategoryFilter({ categoryId }: CategoryFilterProps) {
  const { isTurkish } = useLanguage();
  const scrollViewRef = useRef<ScrollView>(null);
  const itemPositions = useRef<Record<string, number>>({});
  const [isLayoutReady, setIsLayoutReady] = useState(false);


  const scrollToSelected = () => {
    const selectedCategory = categories.find((category) => category.id === categoryId);

    if (!selectedCategory) return;

    const x = itemPositions.current[selectedCategory.id];

    if (x === undefined) return;

    scrollViewRef.current?.scrollTo({
      x,
      animated: true,
    });
  };

  useEffect(() => {
    if (isLayoutReady) {
      scrollToSelected();
    }
  }, [isLayoutReady]);


  return (
    <ScrollView
      ref={scrollViewRef}
      showsHorizontalScrollIndicator={false}
      bounces={true}
      horizontal={true}
      className={`w-full bg-primary`}
      style={{ height: windowHeight * 0.05 }}
    >
      {categories.map((category) => (
        <CategoryFilterItem
          key={category.id}
          title={isTurkish ? category.name : category.nameEn}
          isSelected={category.id === categoryId}
          onLayout={(event) => {
            itemPositions.current[category.id] = event.nativeEvent.layout.x;

            if (category.id === categories[categories.length - 1].id) {
              setIsLayoutReady(true);
            }
          }}
        />
      ))}
    </ScrollView>
  );
}

export default CategoryFilter;
