import { View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';

interface Props {
    action: () => void;
}

export default function BackButton({ action }: Props) {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={action}>
                <Text style={{ textAlign: 'center' }}>Go Back</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        width: 24,
        height: 20,
        marginLeft: 38,
        marginTop: 42.5
    }
});