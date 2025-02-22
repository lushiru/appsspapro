import { View, Text } from "react-native";
import { map } from "lodash";
import { Venta } from "./Venta/Venta";
import { styles } from "./GridVentas.styles";

export function GridVentas(props) {
  const { title, ventas } = props;

  return (
    <View style={styles.container}>
      {title && <Text style={styles.title}>{title}</Text>}

      <View style={styles.gridContainer}>
        {map(ventas, (item) => {
          const venta = item;

          return <Venta key={venta.id} venta={venta} />;
        })}
      </View>
    </View>
  );
}