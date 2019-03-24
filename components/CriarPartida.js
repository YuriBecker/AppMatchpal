import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import DatePicker from 'react-native-datepicker';
import { Hoshi } from 'react-native-textinput-effects';
import store from 'react-native-simple-store';

class CriarPartida extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      NomePartida: null,
      Esporte: null,
      Data: null,
      Hora: null,
      Erro: false
    };
  }

  save = async () => {
    const partida = {
      NomePartida: this.state.NomePartida,
      Esporte: this.state.Esporte,
      Data: this.state.Data,
      Hora: this.state.Hora
    };
    store.push('PARTIDAS', partida).then(
      this.setState({
        NomePartida: null,
        Esporte: null,
        Data: null,
        Hora: null,
        Erro: false
      })
    );
    this.props.atualiza();
  };

  error = () => {
    this.setState({ Erro: true });
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          margin: 30
        }}
      >
        <Hoshi
          label={'Nome da partida'}
          labelStyle={{
            color:
              this.state.NomePartida === null && this.state.Erro === true
                ? '#ff0000'
                : '#a3a3a3'
          }}
          inputStyle={{ color: 'black', fontWeight: 'normal' }}
          borderColor="#1565C0"
          onChangeText={data => this.setState({ NomePartida: data })}
          value={this.state.NomePartida}
        />
        <Hoshi
          label={'Esporte'}
          labelStyle={{
            color:
              this.state.Esporte === null && this.state.Erro === true
                ? '#ff0000'
                : '#a3a3a3'
          }}
          inputStyle={{ color: '#333333', fontWeight: 'normal' }}
          borderColor="#1565C0"
          style={{ marginTop: 10 }}
          onChangeText={data => this.setState({ Esporte: data })}
          value={this.state.Esporte}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            flex: 1,
            marginTop: 30,
            marginBottom: 30
          }}
        >
          <Button
            title={
              this.state.Data !== null
                ? this.state.Data.toString()
                : 'Escolha uma data'
            }
            onPress={() => {
              this.refs.datepicker.onPressDate();
            }}
            raised={true}
            type="outline"
            buttonStyle={{
              width: 160,
              borderRadius: 50
            }}
            titleStyle={{
              color:
                this.state.Data === null && this.state.Erro === true
                  ? '#ff0000'
                  : '#1565C0'
            }}
          />

          <Button
            title={
              this.state.Hora !== null ? this.state.Hora : 'Escolha um horário'
            }
            style={{ width: 200 }}
            onPress={() => {
              this.refs.timepicker.onPressDate();
            }}
            raised={true}
            type="outline"
            buttonStyle={{ width: 160, borderRadius: 50 }}
            titleStyle={{
              color:
                this.state.Hora === null && this.state.Erro === true
                  ? '#ff0000'
                  : '#1565C0'
            }}
          />
        </View>

        <Button
          large
          title="Criar partida"
          buttonStyle={{ width: 160, borderRadius: 50 }}
          containerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 30
          }}
          onPress={
            this.state.NomePartida !== null &&
            this.state.Esporte !== null &&
            this.state.Data !== null &&
            this.state.Hora !== null
              ? this.save
              : this.error
          }
        />

        <DatePicker
          style={{ width: 0, height: 0 }}
          showIcon={false}
          format="DD-MM-YYYY"
          minDate={new Date()}
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
      </View>
    );
  }
}

const styles = StyleSheet.create({});

export default CriarPartida;
