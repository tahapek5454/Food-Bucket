import { ScrollView } from "react-native";
import { HomeRootStackParamList } from "@/components/navigator/home";
import { StackScreenProps } from "@react-navigation/stack";
import { useEffect, useState } from "react";
import { Product } from "@/types/product";
import products from "@/assets/examples/products";
import Carousel from "@/components/carousel";

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
    <ScrollView>
      { product?.images &&
            <Carousel data={product.images.map((img) => ({ uri: img }))} />
      }
    </ScrollView>
  );
}

export default ProductDetail;
