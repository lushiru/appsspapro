import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GiftcardScreen } from "../../screens/Giftcard/GiftcardScreen";
import { CheckoutScreen } from "../../screens/Checkout/CheckoutScreen";
import { PagarScreen } from "../../screens/Pagar/PagarScreen";

import { screensName } from "../../utils/screensName";

const Stack = createNativeStackNavigator();

export function GiftcardStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={screensName.giftcard.giftcard} component={GiftcardScreen} options={{ headerShown: false }} />
      <Stack.Screen name={screensName.giftcard.checkout} component={CheckoutScreen} options={{ headerShown: false }} />
      <Stack.Screen name={screensName.giftcard.pagar} component={PagarScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}