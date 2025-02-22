import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { screensName } from "../../utils/screensName";
import { HistorialScreen } from "../../screens/Historial/HistorialScreen";

const Stack = createNativeStackNavigator();

export function HistorialStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={screensName.historial.historial} component={HistorialScreen} />
    </Stack.Navigator>
  );
}