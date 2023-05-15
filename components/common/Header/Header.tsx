import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { MenuIcon, SearchIcon } from "../../../assets/icons";
import HeaderStyles from "./styles";

export default function Header() {
    return (
        <View style={HeaderStyles.container}>
            <TouchableOpacity>
                <Image style={HeaderStyles.menuIcon} source={MenuIcon} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Image style={HeaderStyles.searchIcon} source={SearchIcon} />
            </TouchableOpacity>
        </View>
    );
}