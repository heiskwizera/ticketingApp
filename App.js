import { StatusBar } from 'expo-status-bar';
import { StyleSheet,View,Text } from 'react-native';
import ApplyButton from './src/components/atoms/Buttons/ApplyButton';
import Welcome from './src/components/templates/Welcome';


export default function App() {
  return (
    <View style={s.container}>
      <Welcome />
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,

  },

});
