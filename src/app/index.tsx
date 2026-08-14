import { ScrollView } from "react-native";
import HomeHeader from "@/components/home/homeHeader";
import BannerCarousel from "@/components/home/bannerCarousel";
import CategoryItemList from "@/components/home/categoryItemList";
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';

function Home() {
  const tabBarHeight = useBottomTabBarHeight();
  return (
    <ScrollView className="bg-background" stickyHeaderIndices={[0]} contentContainerStyle={{ paddingBottom: tabBarHeight }}>
      <HomeHeader />
      <BannerCarousel />
      <CategoryItemList />
    </ScrollView>
  );
}

export default Home;
