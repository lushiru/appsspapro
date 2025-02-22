import { View, Text, TouchableOpacity, Modal } from "react-native";
import { useState } from "react";
import { styles } from "./PagarScreen.styles";
import { BasicLayout as Layout } from "../../layouts/BasicLayout";
import { screensName } from "../../utils/screensName";
import { useNavigation } from "@react-navigation/native";
import { WebView } from "react-native-webview";

export function PagarScreen(props) {

  const {
    route: { params },
    } = props;
  const url = params.url;

  const [visible, setVisible] = useState(true);
  const navigation = useNavigation();

  const gotoInicio = () => {
    setVisible(false)
    navigation.navigate(screensName.giftcard.giftcard);
  }; 

  return (
    <Layout>
         
          <Modal
            visible={visible}
            presentationStyle={"pageSheet"}
            animationType={"slide"}
            onRequestClose={gotoInicio}
          >
            <View style={styles.modalHeader}>
            <View style={styles.modalHeaderContent}><Text>Pagar con webpay</Text></View>
              <TouchableOpacity onPress={() => gotoInicio() }><Text style={styles.modalHeaderCloseText}>Salir X</Text></TouchableOpacity>
            </View>
            <WebView source={{ uri: url }} />
          </Modal>

    </Layout>
  )
}
