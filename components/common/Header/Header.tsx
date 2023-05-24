import { DrawerNavigationProp } from '@react-navigation/drawer';
import { View, Image, TouchableOpacity, SafeAreaView } from "react-native";
import { MenuIcon, SearchIcon } from "../../../assets/icons";
import HeaderStyles from './styles';
import type { ParamListBase } from '@react-navigation/native';

interface Props {
    navigation: DrawerNavigationProp<ParamListBase, string, undefined>;
    style: any
}

export default function Header({ navigation, style }: Props) {
    return (
        <SafeAreaView style={style}>
            <View style={HeaderStyles.container}>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Image
                        style={HeaderStyles.menuIcon}
                        source={MenuIcon} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={HeaderStyles.searchIcon} source={SearchIcon} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}