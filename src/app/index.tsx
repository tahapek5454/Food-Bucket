import { ScrollView } from "react-native";
import HomeHeader from "@/components/home/homeHeader";
import BannerCarousel from "@/components/home/bannerCarousel";

function Home() {
  return (
    <ScrollView className="bg-background" stickyHeaderIndices={[0]}>
      <HomeHeader />
      <BannerCarousel />
    </ScrollView>
  );
}

export default Home;
