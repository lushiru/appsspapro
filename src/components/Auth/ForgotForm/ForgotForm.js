import { View, Text,ToastAndroid, TextInput, Button } from "react-native";
import { authCtrl } from "../../../api/auth";
import { form } from "../../../styles/form";
import { styles } from "./ForgotForm.styles";
import { useState } from "react";

export function ForgotForm(props) {
  const { showForgot } = props;

  const [ email, setEmail ] = useState("");
  const [ isLoading, setIsLoading ] = useState(false);

  const handleSubmit = async () => {

    setIsLoading(true)

    if(!email.trim()){
      ToastAndroid.show( "ingresa tu Email" , ToastAndroid.SHORT);
      setIsLoading(false)
      return;
    }
    if(!isCheckEmail.test(email)){
      ToastAndroid.show( "ingresa un Email Valido" , ToastAndroid.SHORT);
      setIsLoading(false)
      return;
    }

    try {
      const response = await authCtrl.forgot(email);
      if(response.message == "se envio email para cambiar la password"){
        ToastAndroid.show( "se envio email para cambiar la password" , ToastAndroid.SHORT);
      }
    } catch (error) {
      console.log(error);
      ToastAndroid.show( "error" , ToastAndroid.SHORT);
      setIsLoading(false)
    }

  }


  return (
    <View>
      <Text style={styles.title}>Formulario Recuperar Contraseña</Text>
      <TextInput
        placeholder="email"
        style={form.input}
        autoCapitalize="none"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <Button
        mode="contained"
        color="#5ac343"
        onPress={handleSubmit}
        loading={isLoading}
        title="Recuperar Contraseña" />
      <View style={form.separator} />  
      <Button
        mode="text"
        labelStyle={form.btnTextLabel}
        onPress={showForgot}
        title="Login" />
    </View>
  );
}
