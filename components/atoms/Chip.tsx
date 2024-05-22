import { THEME } from "@/utils/configurations/Theme";
import { FC } from "react"
import { Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";


type Props = {
    title: string;
    icon?: any;
    onPress: () => void;
}

const Chip : FC<Props> = ({ title, icon, onPress }) => {
    return (
        <TouchableOpacity
        onPress={onPress}
         style={{ 
            flexDirection: "row",
            backgroundColor: THEME.secondary_color,
             width: 121,
              height: 40,
              borderRadius: 50,
               paddingVertical: THEME.spacing_medium,
                paddingHorizontal: THEME.spacing_large,
                 gap: 8,
                alignItems: 'center',
                 }}>
                    {icon}
            <Text>{title}</Text>
        </TouchableOpacity>
    )
}

export default Chip;