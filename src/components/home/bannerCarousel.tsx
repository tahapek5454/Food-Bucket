import { Dimensions } from "react-native";
import Carousel from "@/components/carousel";

const { width: screenWidth } = Dimensions.get("window");

function BannerCarousel() {
  const data = [
    require("@/assets/app/home/homeBannerCarousel1.png"),
    require("@/assets/app/home/homeBannerCarousel2.png"),
  ];
  return <Carousel data={data} width={screenWidth} pagination={false} />;
}

export default BannerCarousel;
