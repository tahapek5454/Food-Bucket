import { ScrollView } from "react-native";
import HomeHeader from "@/components/home/homeHeader";
import BannerCarousel from "@/components/home/bannerCarousel";
import CategoryItemList from "@/components/home/categoryItemList";

function Home() {
  return (
    <ScrollView className="bg-background" stickyHeaderIndices={[0]}>
      <HomeHeader />
      <BannerCarousel />
      <CategoryItemList />
    </ScrollView>
  );
}

export default Home;
