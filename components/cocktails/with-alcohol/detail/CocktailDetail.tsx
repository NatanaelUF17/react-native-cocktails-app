import { Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BackButton from '../../../../common/components/back-button/BackButton';

export default function CocktailDetail() {
    const navigation = useNavigation();

    return (
        <View>
            <BackButton action={() => navigation.goBack()} />
            <Text style={{ textAlign: 'center' }}>Hello from cocktail detail</Text>
        </View>
    );
}