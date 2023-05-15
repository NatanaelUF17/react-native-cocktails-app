import { StyleSheet } from 'react-native';
import { Platform } from 'react-native';

const HeaderStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 40,
        paddingLeft: 30,
        paddingRight: 30,
        marginTop: Platform.OS === 'android' ? 30 : 0
    },
    menuIcon: {
        height: 16,
        width: 21,
    },
    searchIcon: {
        height: 26,
        width: 26,
    }
})

export default HeaderStyles;
