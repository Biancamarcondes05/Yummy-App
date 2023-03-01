import { Image, StyleSheet } from "react-native";
import { View } from "react-native";

export default function PeixeImage() {
    return (
        <View style={styles.containerPeixe}>
            <Image style={styles.peixe} source={require('../../../assets/primeiro2.png')} />
        </View>
    )

}
const styles = StyleSheet.create({
    containerPeixe: {
        width: 300,
        alignItems: 'flex-end'
    },
    peixe: {
        height: 45,
        width: 45,
    },

})