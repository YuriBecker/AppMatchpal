import React from 'react';
import {
  Platform,
  StatusBar,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Picker
} from 'react-native';
import { Button, ThemeProvider, Image, Header } from 'react-native-elements';
import image from './assets/matchpal.png';

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView>
        <Header
          centerComponent={
            <Image
              source={require('./assets/matchpal2.png')}
              style={{ width: 80, height: 80 }}
            />
          }
        />
        <View style={styles.container} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    textAlign: 'center',
    color: 'white',
    fontSize: 25
  },
  AndroidSafeArea: {
    flex: 1,
    backgroundColor: '#4DE2EB',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  }
});
