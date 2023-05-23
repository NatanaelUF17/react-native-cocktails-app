import { StyleSheet, SafeAreaView, View } from 'react-native';
import Header from '../components/common/header/Header';
import CocktailList from '../components/Cocktails/List/CocktailList';
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
