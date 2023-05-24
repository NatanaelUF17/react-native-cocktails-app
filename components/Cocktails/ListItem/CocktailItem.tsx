import { Text, Image, View, TouchableOpacity, Alert } from "react-native";
import CocktailItemStyles from "./styles";
import { AddFavoriteIcon } from "../../../assets/icons";
import { useNavigation } from '@react-navigation/native';

interface Props {
    cocktail: any;
}

export default function CocktailItem({ cocktail }: Props) {
    const navigation = useNavigation();
    return (
        <View>
            <View style={CocktailItemStyles.cocktailImageContainer}>
                <TouchableOpacity>
                    <Image
                        style={{
                            width: 124,
                            height: 184,
                            resizeMode: 'contain',
                        }}
                        source={cocktail.image} />
                </TouchableOpacity>
            </View>
            <View style={CocktailItemStyles.cocktailDescriptionContainer}>
                <Text style={CocktailItemStyles.cocktailName}>{cocktail.name}</Text>
                <Text style={CocktailItemStyles.cocktailDescription}>{cocktail.description}</Text>
            </View>
            <View style={CocktailItemStyles.cocktailFooterContainer}>
                <View style={CocktailItemStyles.cocktailPriceContainer}>
                    <Text style={CocktailItemStyles.cocktailPriceText}>Regular price</Text>
                    <Text style={CocktailItemStyles.cocktailPrice}>{'$' + cocktail.price}</Text>
                </View>
                <View style={CocktailItemStyles.cocktailDetailsContainer}>
                    <TouchableOpacity>
                        <Image
                            style={{
                                width: 17,
                                height: 20,
                                resizeMode: 'contain',
                                marginRight: 8
                            }}
                            source={AddFavoriteIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Alert.alert(cocktail.name)}>
                        <Text style={CocktailItemStyles.cocktailDetailText}>See details</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}