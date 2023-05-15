import { StyleSheet } from 'react-native';
import { Platform } from 'react-native';

const CocktailListStyles = StyleSheet.create({
    container: {
        marginLeft: 81,
        marginRight: 81,
        marginBottom: Platform.OS === 'ios' ? 100 : 160 
    },
    cocktailsText: {
        color: '#0BC9D7',
        fontSize: 18
    },
    cocktailsAlcoholTypeText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 24
    },
    cocktailsList: {
        marginTop: 30
    }
});

export default CocktailListStyles;