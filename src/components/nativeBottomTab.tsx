import { createNativeBottomTabNavigator } from "@react-navigation/bottom-tabs/unstable";
import Home from "@/app/index";
import Profile from "@/app/profile/index";
import Palette from "@/app/palette/index";

const Tab = createNativeBottomTabNavigator();

function NativeBottomTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Palette" component={Palette} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default NativeBottomTab;
