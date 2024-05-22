import { THEME } from "@/utils/configurations/Theme";
import { Feather } from "@expo/vector-icons";
import { FC } from "react"
import { Image, Text, View } from "react-native"

type Props={
    imageUrl?: string;
    text: string;
    favorite?: boolean;
}


const Sticker: FC<Props> = ({ imageUrl, text, favorite}) => {
    return (
        <View
        style={{
          backgroundColor: THEME.third_layer,
          borderRadius: 12,
          width: 112,
          height: 112,
          alignItems:'center',
          justifyContent: 'center',
        }}
      >
        {favorite ? <View style={{ position: 'relative', right: -40, alignItems:'center', justifyContent: 'center', height: 12, width: 12, borderRadius: 50, backgroundColor: THEME.secondary_color }}><Feather name="star" size={8} color="#BD9E6E" /></View> : null}
        {imageUrl ? 
        <Image source={{uri: imageUrl }} style={{width: 64, height: 64}} />
        : <Feather name="stop-circle" size={64} color={THEME.fourth_layer} />}
        <Text style={{color: THEME.inverse}}>{text}</Text>
      </View>
    )
}

export default Sticker;