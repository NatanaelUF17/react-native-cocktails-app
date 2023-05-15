import { StyleSheet } from 'react-native';

const CocktailItemStyles = StyleSheet.create({
    cocktailImage: {
        width: 124,
        height: 184,
        resizeMode: 'contain',
    },
    cocktailImageContainer: {
        alignItems: 'center'
    },
    cocktailName: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: 600,
    },
    cocktailDescriptionContainer: {
        marginTop: 18
    },
    cocktailDescription: {
        marginTop: 11,
        color: '#FFFFFF',
        fontSize: 12,
        width: 224
    },
    cocktailFooterContainer: {
        marginTop: 4,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    cocktailPriceText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 12,
    },
    cocktailPrice: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 24,
    },
    cocktailPriceContainer: {
        marginVertical: 8
    },
    cocktailDetailsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    cocktailDetailText: {
        color: 'white',
        fontSize: 12,
    },
    cocktailFavIcon: {
        width: 17,
        height: 20,
        resizeMode: 'contain',
        marginRight: 8
    }
});

export default CocktailItemStyles;