import { useState, useEffect } from "react";
import { ToastAndroid,Image } from "react-native";
import { ventasCtrl } from "../../api/ventas";
import { BasicLayout as Layout } from "../../layouts/BasicLayout";
import { GridVentas } from "../../components/Shared/GridVentas/GridVentas";
import { styles } from "./HistorialScreen.styles";
import { ENV } from "../../utils/constants";
import { useIsFocused } from "@react-navigation/native";

export function HistorialScreen() {
  const [ventas, setVentas] = useState(null);
  const isVisible = useIsFocused();

    useEffect(() => {
        if (isVisible) {
            getVentas();
        }
    }, [isVisible]);
  
    const getVentas = async () => {
      try {
        const response = await ventasCtrl.verHistorial();
        setVentas(response.ventas || []);
      } catch (error) {
          ToastAndroid.show( "Error al obtener ventas" , ToastAndroid.SHORT);
      }
    };
  
    const urlImage = `${ENV.URL}/img/sspa.png`;
  
    return (
      <Layout>
        <Image source={{ uri: urlImage }} style={styles.logo} />      
        <GridVentas title="Historial Sspa" ventas={ventas} />
      </Layout>
    );
}