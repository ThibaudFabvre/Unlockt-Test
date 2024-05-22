import { THEME } from "@/utils/configurations/Theme";
import { FC } from "react"
import { Text, View } from "react-native"
import { TouchableWithoutFeedback } from "react-native-gesture-handler"


type Props = {
    title: string;
    extra: string;
    onPress: () => void;
    isActive: boolean;
}
const RadioButton: FC<Props> = ({ title, extra, onPress, isActive }) => {
    return (
        <TouchableWithoutFeedback style={{
            backgroundColor: THEME.second_layer,
            borderWidth: THEME.border_slim,
            borderColor: THEME.secondary_color,
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: THEME.spacing_medium,
            borderRadius: 50,
            width: 356,
            flexDirection: 'row'
            }} 
            onPress={onPress}
        >
            <View style={{flexDirection: 'row', alignItems:'center'}}>
                <View style={{ 
                    alignItems:'center',
                    justifyContent: 'center',
                    width: 24,
                    height: 24,
                    borderWidth: THEME.border_slim,
                    borderColor: THEME.secondary_color,
                    borderRadius: 50
                }}>
                    {isActive ? <View style={{ width: 14, height: 14, backgroundColor: THEME.secondary_color, borderRadius: 50 }}/> : null}
                </View>
                <Text style={{marginLeft: THEME.spacing_extra_large, color: THEME.inverse}}>{title}</Text>
            </View>
            <Text style={{color: THEME.inverse}}>{extra}</Text>
        </TouchableWithoutFeedback>
    )
}

export default RadioButton;