import { View, Text,ToastAndroid, TextInput, Button } from "react-native";
import { authCtrl } from "../../../api/auth";
import { useAuth } from "../../../hooks/useAuth";
import { form } from "../../../styles/form";
import { styles } from "./LoginForm.styles";
import { useState } from "react";

export function LoginForm(props) {
  const { showRegister, showForgot } = props;
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ isLoading, setIsLoading ] = useState(false);

  const { login } = useAuth();

  const handleSubmit = async () => {
    setIsLoading(true)
    const isCheckEmail = /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/
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
    if(!password.trim()){
      ToastAndroid.show( "ingresa tu Password" , ToastAndroid.SHORT);
      setIsLoading(false)
      return;
    }

    try {

      const response = await authCtrl.login(email, password);
      if(response.message == "Unauthorized"){
        ToastAndroid.show( "Email o contraseña error" , ToastAndroid.SHORT);
      }
      if(response.message == "no ha verificado email"){
        ToastAndroid.show( "Debe verificar su email ..." , ToastAndroid.SHORT);
      }
      if(response.message == "se ha identificado correctamente"){
        ToastAndroid.show( "Se ha logeado correctamente" , ToastAndroid.SHORT);
          login(response.token);
      }

    } catch (error) {
      console.log(error);
      ToastAndroid.show( "error" , ToastAndroid.SHORT);
      setIsLoading(false)
    }

  }

  return (
    <View>
      <Text style={styles.title}>Formulario de Acceso</Text>
      <TextInput
        placeholder="email"
        style={form.input}
        autoCapitalize="none"
        onChangeText={(text) => setEmail(text)}        
      />
      <TextInput
        placeholder="contraseña"
        style={form.input}
        autoCapitalize="none"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />
      <Button
        color="#5ac343"
        onPress={handleSubmit}
        loading={isLoading}
        title="Entrar" />
        <View style={form.separator} />
      <Button
        onPress={showRegister}
        title="Registrarse" />
      <Button
        onPress={showForgot}
        title="Olvido contraseña ?" />
    </View>
  );
}
