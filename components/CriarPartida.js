import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Icon from '@expo/vector-icons/FontAwesome';

class CriarPartida extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center'
        }}
      >
        <Input
          placeholder="Nome da partida"
          leftIcon={{ type: 'font-awesome', name: 'id-badge', size: 28 }}
          inputStyle={{ marginLeft: 15 }}
        />

        <Input
          placeholder="Esporte"
          leftIcon={{ type: 'font-awesome', name: 'soccer-ball-o', size: 24 }}
          inputStyle={{ marginLeft: 12 }}
        />

        <Text style={styles.welcome}>
          Data no campo Data chamar calendário.
        </Text>
        <Text style={styles.welcome}>
          Hora - No campo da Hora chamar o relógio
        </Text>
        <Text style={styles.welcome}>
          Abaixo dos campos, apresentar um botão “Criar partida”, no qual salva
          os dados num banco de dados local e zera os campos.
        </Text>
        <Text style={styles.welcome}>
          Os dados salvos são carregados na tab 2 no formato que você desejar,
          desde que mostre todos os dados.
        </Text>

        <Button
          large
          rightIcon={{ name: 'code' }}
          title="Criar partida"
          rounded="true"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  welcome: {
    flex: 1,
    margin: 20,
    backgroundColor: 'orange',
    margin: 10,
    textAlign: 'center',
    fontSize: 20,
    paddingTop: 70
  }
});

export default CriarPartida;
