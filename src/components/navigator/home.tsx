import { createStackNavigator } from "@react-navigation/stack";
import Home from "@/app/index";
import { useTheme } from "@/hooks/useTheme";
import LazyImage from "@/components/lazyImage";

const Stack = createStackNavigator();

function HomeNavigator() {
  const { currentTheme } = useTheme();
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: currentTheme === "light" ? "#ffffff" : "#0a0a0a",
        },
        headerTitleAlign: "center",
        headerTitle: (props) => (
          <LazyImage
              width={100}
              height={100}
              source={require("@/assets/app/foot-bucket-logo-mini-removebg-preview.png")}
            />
        ),
      }}
    >
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

export default HomeNavigator;
