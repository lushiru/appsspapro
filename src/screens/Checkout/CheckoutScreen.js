import { View, Text,ToastAndroid, Image, TextInput, Button } from "react-native";
import { useState, useEffect } from "react";
import { ventasCtrl } from "../../api/ventas";
import { styles } from "./CheckoutScreen.styles"
import { BasicLayout as Layout } from "../../layouts/BasicLayout";
import { ENV } from "../../utils/constants";
import { screensName } from "../../utils/screensName";
import { useNavigation } from "@react-navigation/native";

export function CheckoutScreen(props) {
    
    const {
        route: { params },
        } = props;
    const productId = params.productId;

    const [product, setProduct] = useState(null);
    const navigation = useNavigation();
    const [ nombrecliente, setNombrecliente ] = useState("");
    const [ rut, setRut ] = useState("");
    const [ telefono, setTelefono ] = useState("");
    const [ isLoading, setIsLoading ] = useState(false);
    
      useEffect(() => {
        getProduct();
      }, []);
    
      const getProduct = async () => {
        try {
          const response = await ventasCtrl.checkout(productId);
          setProduct(response.producto);
        } catch (error) {
            ToastAndroid.show( "Error al obtener productos" , ToastAndroid.SHORT);
        }
      };

    const gotoPagar = (url) => {
        navigation.navigate(screensName.giftcard.pagar, { url });
      };  

      const handleSubmit = async () => {
          
        setIsLoading(true)

        if(!nombrecliente.trim()){
          ToastAndroid.show( "ingresa Nombre" , ToastAndroid.SHORT);
          setIsLoading(false)
          return;
        }
        if(! typeof nombrecliente === "string" ){
          ToastAndroid.show( "ingresa Nombre Valido" , ToastAndroid.SHORT);
          setIsLoading(false)
          return;
        }
        if(!rut.trim()){
          ToastAndroid.show( "ingresa Rut" , ToastAndroid.SHORT);
          setIsLoading(false)
          return;
        }
        if(! typeof rut === "string" ){
          ToastAndroid.show( "ingresa Rut Valido" , ToastAndroid.SHORT);
          setIsLoading(false)
          return;
        }
        if(!telefono.trim()){
          ToastAndroid.show( "ingresa Telefono" , ToastAndroid.SHORT);
          setIsLoading(false)
          return;
        }
        if(! typeof telefono === "string" ){
          ToastAndroid.show( "ingresa Telefono Valido" , ToastAndroid.SHORT);
          setIsLoading(false)
          return;
        }

        try {
          const response = await ventasCtrl.crearCompra(productId, nombrecliente, rut, telefono);
          gotoPagar(response.url);
        } catch (error) {
          console.log(error);
          ToastAndroid.show( "error" , ToastAndroid.SHORT);
        }
      }

  return (

    <Layout>
          
    
      <Text>Detalle de compra</Text>

      <Image source={{ uri: `${ENV.URL}/img/sspa.png` }} style={styles.logo} />

      <View style={styles.container}>
              <View style={styles.product}>
                <Image source={{ uri: `${ENV.URL}/imagenes/${product?.nombreimagen}` }} style={styles.image} />
                <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">
                  {product?.nombre}
                </Text>
                <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">
                  {product?.descripcion}
                </Text>
                <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">
                  {new Intl.NumberFormat('es-CL', {currency: 'CLP', style: 'currency'}).format(product?.precio)}
                </Text>                         
              </View>
            </View>

      <TextInput
              placeholder="Nombre / apellido"
              style={styles.input}
              autoCapitalize="none"
              onChangeText={(text) => setNombrecliente(text)}
              value={nombrecliente}
            />
      <TextInput
              placeholder="Rut"
              style={styles.input}
              autoCapitalize="none"
              onChangeText={(text) => setRut(text)}
              value={rut}
            />
      <TextInput
              placeholder="Telefono"
              style={styles.input}
              autoCapitalize="none"
              onChangeText={(text) => setTelefono(text)}
              value={telefono}
            />
      <Button
              mode="contained"
              color="#5ac343"
              onPress={handleSubmit}
              loading={isLoading}
              title="Crear compra" />
    </Layout>
  )
}