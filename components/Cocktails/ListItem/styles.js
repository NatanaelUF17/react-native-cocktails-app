import { StyleSheet } from 'react-native';

const CocktailItemStyles = StyleSheet.create({
    cocktailImageContainer: {
        alignItems: 'center'
    },
    cocktailName: {
        color: '#FFFFFF',
        fontFamily: 'Raleway-Bold',
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
        width: 224,
        fontWeight: '400',
        fontFamily: 'Raleway'
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
        fontWeight: '700',
        fontFamily: 'Raleway-Bold'
    },
    cocktailPrice: {
        color: 'white',
        fontWeight: '700',
        fontSize: 24,
        fontFamily: 'Raleway-Bold'
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
        fontWeight: '600',
        fontFamily: 'Raleway-SemiBold'
    },
});

export default CocktailItemStyles;