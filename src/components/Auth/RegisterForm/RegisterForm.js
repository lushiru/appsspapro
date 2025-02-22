import { View, Text, ToastAndroid, SafeAreaView, ScrollView, TextInput, Button } from "react-native";
import { form } from "../../../styles/form";
import { styles } from "./RegisterForm.styles";
import { authCtrl } from "../../../api/auth";
import { useState } from "react";

export function RegisterForm(props) {
  const { showLogin } = props;

  const [ name, setName ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ password_confirmation, setPassword_confirmation ] = useState("");
  const [ isLoading, setIsLoading ] = useState(false);

  const handleSubmit = async () => {

    setIsLoading(true)
    const isCheckEmail = /[A-Za-z0-9\._%+\-]+@[A-Za-z0-9\.\-]+\.[A-Za-z]{2,}/

    if(!name.trim()){
      ToastAndroid.show( "ingresa tu Nombre" , ToastAndroid.SHORT);
      setIsLoading(false)
      return;
    }
    if(! typeof name === "string" ){
      ToastAndroid.show( "ingresa tu Nombre Valido" , ToastAndroid.SHORT);
      setIsLoading(false)
      return;
    }
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
    if(!password_confirmation.trim()){
      ToastAndroid.show( "ingresa tu Confirmar Password" , ToastAndroid.SHORT);
      setIsLoading(false)
      return;
    }
    if(password != password_confirmation){
      ToastAndroid.show( "la password no se confirmo" , ToastAndroid.SHORT);
      setIsLoading(false)
      return;
    }


    try {
      
      await authCtrl.register(name,email, password,password_confirmation);
      ToastAndroid.show( "se ha registrado correctamente, se envio un email para confirmar registro", 
        ToastAndroid.SHORT );
      showLogin();
    } catch (error) {
      ToastAndroid.show( "error". error, 
        ToastAndroid.SHORT );
        setIsLoading(false)  
    }

  }

  return (
    <>
    <SafeAreaView />
      <ScrollView>
    <View>
      <Text style={styles.title}>Formulario de Registro</Text>
      <TextInput
        placeholder="Nombre"
        style={form.input}
        autoCapitalize="none"
        onChangeText={(text) => setName(text)}
        value={name}
      />      
      <TextInput
        placeholder="Email"
        style={form.input}
        autoCapitalize="none"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <TextInput
        placeholder="Contraseña"
        style={form.input}
        autoCapitalize="none"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <TextInput
        placeholder="Confirma Contraseña"
        style={form.input}
        autoCapitalize="none"
        secureTextEntry
        onChangeText={(text) => setPassword_confirmation(text)}
        value={password_confirmation}
      />
      <Button
        color="#5ac343"
        onPress={handleSubmit}
        loading={isLoading}
        title="Registrate" />
      <View style={form.separator} />
      <Button
        onPress={showLogin}
        title="Iniciar sesión" />
    </View>
    </ScrollView>
    </>
  );
}
