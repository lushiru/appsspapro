import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  HomeScreen,
} from "../../screens/Home/HomeScreen";
import { screensName } from "../../utils/screensName";

const Stack = createNativeStackNavigator();

export function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={screensName.home.home} component={HomeScreen} />
    </Stack.Navigator>
  );
}
