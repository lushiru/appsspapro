import { View, Text, Image, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ENV } from "../../../../utils/constants";
import { screensName } from "../../../../utils/screensName";
import { styles } from "./Product.styles";

export function Product(props) {
  const { product } = props;
  const navigation = useNavigation();
  const mainImage = `${ENV.URL}/imagenes/${product.nombreimagen}`;

  const gotoCheckout = () => {
    navigation.navigate(screensName.giftcard.checkout, { productId: product.id });
  };

  return (
      <View style={styles.container}>
        <View style={styles.product}>
          <Image source={{ uri: mainImage }} style={styles.image} />
          <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">
            {product.nombre}
          </Text>
          <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">
            {new Intl.NumberFormat('es-CL', {currency: 'CLP', style: 'currency'}).format(product.precio)}
          </Text>
          <Button color="#5ac343" onPress={gotoCheckout} title="Comprar" />          
        </View>
      </View>
  );
}