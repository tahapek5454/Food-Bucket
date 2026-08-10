import Carousel from "@/components/carousel";

function BannerCarousel() {
  const data = [
    require("@/assets/app/home/homeBannerCarousel1.png"),
    require("@/assets/app/home/homeBannerCarousel2.png"),
  ];
  return <Carousel data={data}/>;
}

export default BannerCarousel;
