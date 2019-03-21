import React from 'react';
import {
  Platform,
  StatusBar,
  StyleSheet,
  View,
  SafeAreaView,
  Picker,
  ScrollView
} from 'react-native';
import {
  Button,
  Text,
  ThemeProvider,
  Image,
  Header,
  Input
} from 'react-native-elements';
import BottomNavigation, {
  IconTab,
  Badge,
  FullTab
} from 'react-native-material-bottom-navigation';
import Icon from '@expo/vector-icons/FontAwesome';

export default class App extends React.Component {
  tabs = [
    {
      key: 'partidas',
      label: 'Partidas',
      barColor: '#1565C0',
      pressColor: 'rgba(255, 255, 255, 0.16)',
      icon: 'soccer-ball-o'
    },
    {
      key: 'criarPartida',
      label: 'Criar Partida',
      barColor: '#1565C0',
      pressColor: 'rgba(255, 255, 255, 0.16)',
      icon: 'plus'
    }
  ];

  state = {
    activeTab: this.tabs[0].key,
    nameTab: this.tabs[0].label
  };

  renderIcon = icon => ({ isActive }) => (
    <Icon size={24} color="white" name={icon} />
  );

  renderTab = ({ tab, isActive }) => (
    <FullTab
      isActive={isActive}
      showBadge={tab.key === 'partidas'}
      renderBadge={() => <Badge>0</Badge>}
      key={tab.key}
      label={tab.label}
      renderIcon={this.renderIcon(tab.icon)}
    />
  );

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header
          containerStyle={{
            backgroundColor: '#1565C0'
          }}
          centerComponent={
            <Image
              source={require('./assets/matchpal2.png')}
              style={{ width: 80, height: 80 }}
            />
          }
        />
        <Text h4 style={{ textAlign: 'center' }}>
          {this.state.nameTab}
        </Text>
        <ScrollView>
          <View>
            {this.state.nameTab === 'Criar Partida' ? (
              <CriarPartida />
            ) : (
              <Text>LISTA DE PARTIDAS</Text>
            )}
          </View>
        </ScrollView>
        <BottomNavigation
          tabs={this.tabs}
          activeTab={this.state.activeTab}
          onTabPress={newTab =>
            this.setState({ activeTab: newTab.key, nameTab: newTab.label })
          }
          renderTab={this.renderTab}
          useLayoutAnimation={true}
        />
      </View>
    );
  }
}

class CriarPartida extends React.Component {
  render() {
    return (
      <View>
        <Input placeholder="BASIC INPUT" />

        <Input
          placeholder="INPUT WITH ICON"
          leftIcon={{ type: 'font-awesome', name: 'chevron-left' }}
        />

        <Input
          placeholder="INPUT WITH CUSTOM ICON"
          leftIcon={<Icon name="user" size={24} color="black" />}
        />

        <Input placeholder="INPUT WITH SHAKING EFFECT" shake={true} />

        <Input
          placeholder="INPUT WITH ERROR MESSAGE"
          errorStyle={{ color: 'red' }}
          errorMessage="ENTER A VALID ERROR HERE"
        />
        <Text style={styles.welcome}>Nome da partida</Text>
        <Text style={styles.welcome}>
          Data no campo Data chamar calendário.
        </Text>
        <Text style={styles.welcome}>
          Hora - No campo da Hora chamar o relógio
        </Text>
        <Text style={styles.welcome}>Esporte</Text>
        <Text style={styles.welcome}>
          Abaixo dos campos, apresentar um botão “Criar partida”, no qual salva
          os dados num banco de dados local e zera os campos.
        </Text>
        <Text style={styles.welcome}>
          Os dados salvos são carregados na tab 2 no formato que você desejar,
          desde que mostre todos os dados.
        </Text>
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
