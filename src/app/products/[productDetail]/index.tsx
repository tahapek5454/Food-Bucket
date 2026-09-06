import { View } from "react-native";
import { Text } from "@/components/ui/text";
import { HomeRootStackParamList } from "@/components/navigator/home";
import { StackScreenProps } from "@react-navigation/stack";
import { useEffect, useState } from "react";
import { Product } from "@/types/product";
import products from "@/assets/examples/products";

export type ProductDetailScreenProps = StackScreenProps<
  HomeRootStackParamList,
  "ProductDetail"
>;

function ProductDetail({ route }: ProductDetailScreenProps) {
  const { productId } = route.params;
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const foundProduct = products.find((p) => p.id === productId);
    setProduct(foundProduct || null);
  }, [productId]);

  return (
    <View>
      <Text>{product?.name}</Text>
    </View>
  );
}

export default ProductDetail;
