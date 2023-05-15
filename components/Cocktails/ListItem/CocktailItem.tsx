import { Text, Image, View, TouchableOpacity } from "react-native";
import CocktailItemStyles from "./styles";
import { AddFavoriteIcon } from "../../../assets/icons";

interface Props {
    cocktail: any
}

export default function CocktailItem({ cocktail }: Props) {
    return (
        <View>
            <View style={CocktailItemStyles.cocktailImageContainer}>
                <Image
                    style={CocktailItemStyles.cocktailImage}
                    source={cocktail.image} />
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
                            style={CocktailItemStyles.cocktailFavIcon}
                            source={AddFavoriteIcon} />
                    </TouchableOpacity>
                    <Text style={CocktailItemStyles.cocktailDetailText}>See details</Text>
                </View>
            </View>
        </View>
    )
}