import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Icon from '@expo/vector-icons/FontAwesome';
import DatePicker from 'react-native-datepicker';

class CriarPartida extends React.Component {
  constructor(props) {
    super(props);
    this.state = { nomePartida: '', Esporte: '', Data: new Date(), Hora: '' };
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          margin: 30
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

        <Button
          title={'Dia'}
          leftIcon={{ type: 'font-awesome', name: 'soccer-ball-o', size: 24 }}
          inputStyle={{ marginLeft: 12 }}
          onPress={() => {
            this.refs.datepicker.onPressDate();
          }}
        />

        <Button
          title={'Hora'}
          leftIcon={{ type: 'font-awesome', name: 'soccer-ball-o', size: 24 }}
          inputStyle={{ marginLeft: 12 }}
          onPress={() => {
            this.refs.timepicker.onPressDate();
          }}
        />

        <DatePicker
          style={{ width: 0, height: 0 }}
          showIcon={false}
          format="DD-MM-YYYY"
          minDate={this.state.Data}
          onDateChange={date => {
            this.setState({ Data: date });
          }}
          customStyles={{
            dateInput: {
              width: 0,
              height: 0,
              borderWidth: 0
            }
          }}
          ref="datepicker"
        />

        <DatePicker
          style={{ width: 0, height: 0 }}
          showIcon={false}
          onDateChange={hora => {
            this.setState({ Hora: hora });
          }}
          mode="time"
          customStyles={{
            dateInput: {
              width: 0,
              height: 0,
              borderWidth: 0
            }
          }}
          ref="timepicker"
        />

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

        <Button large title="Criar partida" />
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
