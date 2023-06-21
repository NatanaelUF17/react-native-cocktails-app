import { View, FlatList, Text } from "react-native";
import CocktailListStyles from './styles';
import cocktails from "../../../../data/cocktails";
import CocktailItem from "../list-item/CocktailItem";

export default function CocktailList() {
    return (
        <View style={CocktailListStyles.container}>
            <Text style={CocktailListStyles.cocktailsText}>Cocktails</Text>
            <Text style={CocktailListStyles.cocktailsAlcoholTypeText}>With Alcohol</Text>
            <FlatList
                style={CocktailListStyles.cocktailsList}
                data={cocktails}
                keyExtractor={(data) => data.id.toString()}
                renderItem={(data) => (
                    <CocktailItem
                        cocktail={data.item}
                    />
                )}
            />
        </View>
    );
}