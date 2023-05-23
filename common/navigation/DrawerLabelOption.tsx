import { Text } from "react-native";

interface Props {
    text: string;
    focused: boolean;
    color: string;
}

export default function DrawerLabelOption({ text, focused, color }: Props) {
    return (
        <Text style={{
            fontFamily: focused ? 'Raleway-SemiBold' : 'Raleway',
            color: color,
            fontWeight: focused ? '700' : '500',
        }}>
            {text}
        </Text>
    )
}