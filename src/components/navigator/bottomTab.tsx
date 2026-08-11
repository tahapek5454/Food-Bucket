import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { PlatformPressable } from "@react-navigation/elements";
import { Platform } from "react-native";
import Home from "@/app/index";
import Profile from "@/app/profile/index";
import Palette from "@/app/palette/index";
import Search from "@/app/search/index";
import FontAwesomeFreeSolid from "@react-native-vector-icons/fontawesome-free-solid";
import { useTheme } from "@/hooks/useTheme";
import BottomTabBarMainButton from "@/components/navigator/custom/bottomTabBarMainButton";
const Tab = createBottomTabNavigator();

function BottomTab() {
  const { currentTheme } = useTheme();

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#ea580c",
        tabBarInactiveTintColor: currentTheme === "light" ? "#171717" : "#fafafa",
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarButton: (props) => (
          <PlatformPressable
            {...props}
            pressOpacity={0.6}
            android_ripple={{
              color: "rgba(234, 88, 12, 0.1)",
              borderless: true,
              radius: 26,
            }}
          />
        ),
        tabBarStyle: {
          position: "absolute",
          height: Platform.OS === "ios" ? 64 : 56,
          paddingBottom: Platform.OS === "ios" ? 16 : 8,
          paddingTop: 8,
          borderTopWidth: 0,
          elevation: 8,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.06,
          shadowRadius: 8,
          backgroundColor: currentTheme === "light" ? "#f5f5f5" : "#262626",  
        },
        
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeFreeSolid name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Palette"
        component={Palette}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeFreeSolid name="palette" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Main"
        component={Home}
        options={{
          tabBarButton: (props) => <BottomTabBarMainButton {...props} />
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeFreeSolid name="user" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeFreeSolid name="search" size={size} color={color} />
          )
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTab;
