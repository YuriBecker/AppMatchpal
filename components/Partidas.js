import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import store from 'react-native-simple-store';
import { ListItem, Text } from 'react-native-elements';
import Icon from '@expo/vector-icons/FontAwesome';

export default class Partidas extends Component {
  state = { load: null };

  componentDidMount() {
    this.load();
  }

  keyExtractor = (item, index) => index.toString();

  renderItem = ({ item }) => (
    <ListItem
      title={`${item.NomePartida}  ( ${item.Esporte} )`}
      subtitle={`Dia: ${item.Data}  -  Hora: ${item.Hora}`}
      leftIcon={<Icon name="calendar" color="#1565C0" size={22} />}
      style={{ marginBottom: 6 }}
    />
  );

  load = async () => {
    store.get('PARTIDAS').then(res => {
      this.setState({ load: res });
    });
  };

  render() {
    return (
      <View style={{ margin: 30 }}>
        {this.state.load === null ? (
          <Text style={{ textAlign: 'center', fontSize: 23 }}>
            Nenhuma partida encontrada!
          </Text>
        ) : (
          <FlatList
            keyExtractor={this.keyExtractor}
            data={this.state.load}
            renderItem={this.renderItem}
          />
        )}
      </View>
    );
  }
}
