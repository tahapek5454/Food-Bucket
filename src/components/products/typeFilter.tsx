import { Dimensions, ScrollView } from "react-native";
import type { SubCategory } from "@/types/category";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/hooks/useLanguage";
import categories from "@/assets/examples/categories";
import TypeFilterItem from "./typeFilterItem";

export type TypeFilterProps = {
  categoryId: string;
};

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

function TypeFilter({ categoryId }: TypeFilterProps) {
  const { isTurkish } = useLanguage();
  const [subCategories, setSubCategories] = useState<SubCategory[] | null>(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState<SubCategory | null>(null);

  useEffect(()=>{
    const sub = categories.find((category) => category.id === categoryId)?.subCategories;
    setSubCategories(sub || null);
    setSelectedSubCategory(sub ? sub[0] : null);
  }, [categoryId])

  const selectSubCategory = (id: string) => {
    const sub = subCategories?.find((subCategory) => subCategory.id === id);
    setSelectedSubCategory(sub || null);
  }

  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      bounces={true}
      horizontal={true}
      className={`w-full bg-background`}
      style={{ height: windowHeight * 0.07 }}
    >
      {subCategories?.map((subCategory) => (
        <TypeFilterItem
          key={subCategory.id}
          name={isTurkish ? subCategory.name : subCategory.nameEn}
          isSelected={selectedSubCategory?.id === subCategory.id}
          id={subCategory.id}
          selectSubCategory={selectSubCategory}
        />
      ))}
    </ScrollView>
  );
}

export default TypeFilter;
