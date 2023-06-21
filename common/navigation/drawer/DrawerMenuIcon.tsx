import { Image, ImageSourcePropType } from 'react-native';
import { WithAlcoholIcon, NonAlcohol, FavoritesCocktails } from '../../../assets/icons';

interface Props {
    name: string;
    focused: boolean;
    color: string;
    size: number;
}

export default function DrawerMenuIcon({ name, focused, color, size }: Props) {
    const Icon = (): ImageSourcePropType => {
        switch (name.toLowerCase()) {
            case "cocktails with alcohol":
                return WithAlcoholIcon;
            case "non-alcoholic cocktails":
                return NonAlcohol;
            case "favorites cocktails":
                return FavoritesCocktails;
            default:
                return 0;
        }
    }

    return (
        <Image
            source={Icon()}
            style={{
                tintColor: focused ? '#0BC9D7' : 'black'
            }}
        />
    )
}
