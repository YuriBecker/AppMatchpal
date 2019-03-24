import React, { Component } from 'react';
import { Text, View, AsyncStorage } from 'react-native';
import store from 'react-native-simple-store';
export default class Partidas extends Component {
  state = { load: null };

  componentDidMount() {
    this.load();
  }

  load = async () => {
    store.get('PARTIDAS').then(res => {
      this.setState({ load: res });
    });
  };

  render() {
    return (
      <View>
        <Text>{JSON.stringify(this.state.load)}</Text>
      </View>
    );
  }
}
