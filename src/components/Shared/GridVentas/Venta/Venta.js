import { View, Text } from "react-native";
import { styles } from "./Venta.styles";

export function Venta(props) {
  const { venta } = props;


  return (
      <View style={styles.container}>
        <View style={styles.product}>
          <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">
            Nombre / apellido {venta.nombrecliente}
          </Text>
          <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">
           Rut {venta.rut}
          </Text>
          <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">
           Telefono {venta.telefono}
          </Text>
          <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">
            {venta.nombreproducto}
          </Text>
          <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">
            {new Intl.NumberFormat('es-CL', {currency: 'CLP', style: 'currency'}).format(venta.precio)}
          </Text> 
          <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">
            Inicio { venta.inicio }
          </Text> 
          <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">
            Termino { venta.termino }
          </Text> 
          <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">
            Utilizado = {venta.utilizado}
          </Text>        
        </View>
      </View>
  );
}