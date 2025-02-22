import { useState, useEffect } from "react";
import { ToastAndroid,Image } from "react-native";
import { productosCtrl } from "../../api/productos";
import { BasicLayout as Layout } from "../../layouts/BasicLayout";
import { GridProducts } from "../../components/Shared/GridProducts/GridProducts";
import { styles } from "./GiftcardScreen.styles";
import { ENV } from "../../utils/constants";

export function GiftcardScreen() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const response = await productosCtrl.getAll();
      setProducts(response.productos || []);
    } catch (error) {
        ToastAndroid.show( "Error al obtener productos" , ToastAndroid.SHORT);
    }
  };

  const urlImage = `${ENV.URL}/img/sspa.png`;

  return (
    <Layout>
      <Image source={{ uri: urlImage }} style={styles.logo} />      
      <GridProducts title="Giftcards Sspa" products={products} />
    </Layout>
  );
}