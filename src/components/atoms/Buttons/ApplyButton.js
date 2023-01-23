import {StyleSheet, View, Pressable,Text} from 'react-native';

const ApplyButton = () => {
    return (
        <View>
        <Pressable style={styles.button}>
            <Text style={styles.text}>Apply Now</Text>
        </Pressable>
        </View>
    );
}
const styles = StyleSheet.create({
    button: {
        backgroundColor: 'dodgerblue',
        padding: 8,
        borderRadius: 25,
        width: 120,
        alignItems: 'center',
        justifyContent: 'center',
        
        
    },
    text : {
        color: 'white',
        fontSize: 13,
        fontWeight: 'bold'
    }
});

export default ApplyButton;