import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Header from './components/common/Header/Header';
import CocktailList from './components/Cocktails/List/CocktailList';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <CocktailList />
      <StatusBar style='light' />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});
