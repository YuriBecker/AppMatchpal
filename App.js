import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Text, Image, Header } from 'react-native-elements';
import BottomNavigation, {
  Badge,
  FullTab
} from 'react-native-material-bottom-navigation';
import Icon from '@expo/vector-icons/FontAwesome';
import CriarPartida from './components/CriarPartida';
import Partidas from './components/Partidas';
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
    nameTab: this.tabs[0].label,
    news: 0
  };

  renderIcon = icon => ({ isActive }) => (
    <Icon size={24} color="white" name={icon} />
  );

  renderTab = ({ tab, isActive }) => (
    <FullTab
      isActive={isActive}
      showBadge={tab.key === 'partidas' && this.state.news > 0}
      renderBadge={() => <Badge>{this.state.news}</Badge>}
      key={tab.key}
      label={tab.label}
      renderIcon={this.renderIcon(tab.icon)}
    />
  );

  novaPartida = () => {
    this.setState(state => {
      return { news: 1 + state.news };
    });
  };

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
        <Text
          h4
          style={{
            marginTop: 60,
            textAlign: 'center',
            color: '#1565C0',
            fontSize: 20,
            fontWeight: 'bold',
            opacity: 0.8
          }}
        >
          {this.state.nameTab}
        </Text>
        <ScrollView>
          {this.state.activeTab === 'partidas' ? (
            <Partidas />
          ) : (
            <CriarPartida atualiza={this.novaPartida.bind(this)} />
          )}
        </ScrollView>
        <BottomNavigation
          tabs={this.tabs}
          activeTab={this.state.activeTab}
          onTabPress={newTab =>
            this.setState(ps => {
              return {
                activeTab: newTab.key,
                nameTab: newTab.label,
                news: newTab.label === 'Partidas' ? 0 : ps.news
              };
            })
          }
          renderTab={this.renderTab.bind(this)}
          useLayoutAnimation={true}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
