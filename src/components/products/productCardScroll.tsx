import { ScrollView } from "react-native";
import ProductCard from "./productCard";
import products from "@/assets/examples/products";
import { useEffect, useState } from "react";
import type { Product } from "@/types/product";
import { useLanguage } from "@/hooks/useLanguage";

export type ProductCardScrollProps = {
  categoryId: string;
};

function ProductCardScroll({ categoryId }: ProductCardScrollProps) {
  const { isTurkish } = useLanguage();
  const [filteredProducts, setFilteredProducts] = useState<Product[] | null>(
    null,
  );

  useEffect(() => {
    setFilteredProducts(
      products.filter((product) => product.categoryId === categoryId).slice(0, 4)
    );
  }, [categoryId]);

  return (
    <>
      {filteredProducts?.length ? (
        <ScrollView
          showsHorizontalScrollIndicator={false}
          bounces={true}
          horizontal={true}
          className={`w-full bg-background py-2`}
        >
          {filteredProducts?.map((product, index) => (
            <ProductCard
              key={index}
              image={{ uri: product.image }}
              name={isTurkish ? product.name : product.nameEn}
              quantity={product.quantity}
              price={product.price}
              discountedPrice={product.discountedPrice}
            />
          ))}
        </ScrollView>
      ) : (
        <></>
      )}
    </>
  );
}

export default ProductCardScroll;
