import { StyleSheet, View } from 'react-native';
import CocktailList from '../components/cocktails/with-alcohol/list/CocktailList';
import { StatusBar } from 'expo-status-bar';

export default function Home() {
    return (
        <View style={styles.container}>
            <CocktailList />
            <StatusBar style='light' />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
    },
});
