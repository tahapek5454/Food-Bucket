import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
import { FontAwesomeFreeSolid } from "@react-native-vector-icons/fontawesome-free-solid";
import Home from "@/app/index";
import Products from "@/app/products";
import { useTheme } from "@/hooks/useTheme";
import LazyImage from "@/components/lazyImage";
import { View } from "react-native";
import { Text } from "@/components/ui/text";
import { useLanguage } from "@/hooks/useLanguage";

export type HomeRootStackParamList = {
  Home: undefined;
  Products: { categoryId: string };
};

export type ProductsScreenProp = StackNavigationProp<
  HomeRootStackParamList,
  "Products"
>;

const Stack = createStackNavigator<HomeRootStackParamList>();

function HomeNavigator() {
  const { currentTheme } = useTheme();
  const { t } = useLanguage();
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
        headerBackImage: (props) => (
          <View>
            <FontAwesomeFreeSolid
              name="chevron-left"
              size={24}
              color={currentTheme === "light" ? "black" : "white"}
            />
          </View>
        ),
        headerLeftContainerStyle: {
          paddingLeft: 4,
        },
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen
        name="Products"
        component={Products}
        options={{
          headerTitle: (props) => (
            <Text className="text-foreground font-bold">{t("products.title")}</Text>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

export default HomeNavigator;
