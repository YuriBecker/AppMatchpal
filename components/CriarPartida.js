import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import DatePicker from 'react-native-datepicker';
import { Hoshi } from 'react-native-textinput-effects';

class CriarPartida extends React.Component {
  constructor(props) {
    super(props);
    this.state = { nomePartida: null, Esporte: null, Data: null, Hora: null };
  }

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
          labelStyle={{ color: '#a3a3a3' }}
          inputStyle={{ color: 'black', fontWeight: 'normal' }}
          borderColor="#1565C0"
        />
        <Hoshi
          label={'Esporte'}
          labelStyle={{ color: '#a3a3a3' }}
          inputStyle={{ color: '#333333', fontWeight: 'normal' }}
          borderColor="#1565C0"
          style={{ marginTop: 10 }}
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
            buttonStyle={{ width: 160, borderRadius: 50 }}
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
