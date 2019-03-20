import React from 'react';
import {
  Platform,
  StatusBar,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Picker,
  ScrollView
} from 'react-native';
import { Button, ThemeProvider, Image, Header } from 'react-native-elements';
import BottomNavigation, {
  IconTab,
  Badge,
  FullTab
} from 'react-native-material-bottom-navigation';
import Icon from '@expo/vector-icons/FontAwesome';

export default class App extends React.Component {
  state = {
    activeTab: 'games'
  };

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
    activeTab: this.tabs[0].key
  };

  renderIcon = icon => ({ isActive }) => (
    <Icon size={24} color="white" name={icon} />
  );

  renderTab = ({ tab, isActive }) => (
    <FullTab
      isActive={isActive}
      showBadge={tab.key === 'movies-tv'}
      renderBadge={() => <Badge>2</Badge>}
      key={tab.key}
      label={tab.label}
      renderIcon={this.renderIcon(tab.icon)}
    />
  );

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header
          centerComponent={
            <Image
              source={require('./assets/matchpal2.png')}
              style={{ width: 80, height: 80 }}
            />
          }
        />
        <ScrollView>
          <Text>MAIN CONTENT</Text>
        </ScrollView>
        <BottomNavigation
          tabs={this.tabs}
          activeTab={this.state.activeTab}
          onTabPress={newTab => this.setState({ activeTab: newTab.key })}
          renderTab={this.renderTab}
          useLayoutAnimation
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
