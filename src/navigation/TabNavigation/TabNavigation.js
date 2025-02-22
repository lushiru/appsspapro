import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AwesomeIcon from "react-native-vector-icons/FontAwesome";
import { screensName } from "../../utils/screensName";
import { HomeStack } from "../stacks/HomeStack";
import { GiftcardStack } from "../stacks/GiftcardStack";
import { HistorialStack } from "../stacks/HistorialStack";
import { styles } from "./TabNavigation.styles";

const Tab = createBottomTabNavigator();

export function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: (routeStatus) => setIcon(route, routeStatus),
        tabBarActiveTintColor: "#000",
        tabBarStyle: styles.tabBar,
        tabBarShowLabel: false,
        headerShown: false,
      })}
    >
      <Tab.Screen
        name={screensName.home.root}
        component={HomeStack}
        options={{ title: "Inicio" }}
      />
      <Tab.Screen
        name={screensName.giftcard.root}
        component={GiftcardStack}
        options={{ title: "Giftcard" }}
      />
      <Tab.Screen
        name={screensName.historial.root}
        component={HistorialStack}
        options={{ title: "historial" }}
      />
      
    </Tab.Navigator>
  );
}


function setIcon(route, routeStatus) {
  let iconName = "";
  let color = "#fff";

  if (routeStatus.focused) {
    color = "#0098d3";
  }

  if (route.name === screensName.home.root) {
    iconName = "home";
  }
  if (route.name === screensName.giftcard.root) {
    iconName = "shopping-cart";
  }
  if (route.name === screensName.historial.root) {
    iconName = "heart";
  }
  

  return <AwesomeIcon name={iconName} color={color} style={styles.icon} />;
}
