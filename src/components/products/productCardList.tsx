import { useLanguage } from '@/hooks/useLanguage';
import { useEffect, useState } from 'react';
import products from "@/assets/examples/products";
import type { Product } from "@/types/product";
import { View, Text } from 'react-native';
import ProductCard from '@/components/products/productCard';

const GAP = 2

export type ProductCardListProps = {
  categoryId: string;
};

function ProductCardList({ categoryId }: ProductCardListProps) {
    const { isTurkish } = useLanguage();
    const [filteredProducts, setFilteredProducts] = useState<Product[] | null>(
    null,
  );

  useEffect(() => {
    setFilteredProducts(
      products.filter((product) => product.categoryId === categoryId),
    );
  }, [categoryId]);

  return (
     <View className="flex-row flex-wrap mt-2" style={{ gap: GAP * 2, paddingHorizontal: GAP }}>
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
    </View>
  )
}

export default ProductCardList