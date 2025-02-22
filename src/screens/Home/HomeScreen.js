import { useState, useEffect } from "react";
import { ToastAndroid,Image } from "react-native";
import { homeBannerCtrl } from "../../api/home-banner";
import { BasicLayout as Layout } from "../../layouts/BasicLayout";
import { ProductBanners } from "../../components/Shared/ProductBanners/ProductBanners";
import { styles } from "./HomeScreen.styles";
import { ENV } from "../../utils/constants";

export function HomeScreen() {
  const [banners, setBanners] = useState(null);

  useEffect(() => {
    getBanners();
  }, []);

  const getBanners = async () => {
    try {
      const response = await homeBannerCtrl.getAll();
      setBanners(response.banners || null);
    } catch (error) {
        ToastAndroid.show( "Error al obtener Banners" , ToastAndroid.SHORT);
    }
  };  

  const urlImage = `${ENV.URL}/img/sspa.png`;

  return (
    <Layout>
      <Image source={{ uri: urlImage }} style={styles.logo} />    
      {banners && <ProductBanners banners={banners} />}      
    </Layout>
  );
}