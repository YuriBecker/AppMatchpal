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
import { Button, Text, Image, Header, Input } from 'react-native-elements';
import BottomNavigation, {
  IconTab,
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
            <CriarPartida />
          )}
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

const styles = StyleSheet.create({});
