import {StyleSheet, View, Pressable,Text} from 'react-native';
import colors from '../../config/colors';

const SubscribeButton = ({title}) => {
    return (
        <View>
        <Pressable style={styles.button}>
            <Text style={styles.text}>{title}</Text>
        </Pressable>
        </View>
    );
}
const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.info,
        opacity: 0.8,
        padding: 8,
        borderRadius: 25,
        width: 80,
        alignItems: 'center',
        justifyContent: 'center'
        
        
    },
    text : {
        color: '#000',
        opacity: 0.5,
        fontSize: 11,
        fontWeight: 'bold'
    }
});

export default SubscribeButton;