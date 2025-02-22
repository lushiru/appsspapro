import './ReanimatedConfig';
import { useState } from "react";
import { View, Image, Dimensions } from "react-native";
import { styles } from "./ProductBanners.styles";
import { ENV } from "../../../utils/constants";
import Carousel from 'react-native-reanimated-carousel';

export function ProductBanners(props) {
  const { banners } = props;

  const [bannerActive, setBannerActive] = useState(0);
  
  const width = Dimensions.get("window").width;

  return (
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
            <Carousel
                loop
                width={width}
                height={width / 2}
                autoPlay={true}
                data={banners}
                scrollAnimationDuration={2000}
                onSnapToItem={(index) => setBannerActive(index)}
                renderItem={({ item }) => (     
                      <Image source={{ uri: `${ENV.URL}/imagenes/${item.nombre}` }} style={styles.carousel} />      
                  )}
            />
        </View>
      </View>
  );
}