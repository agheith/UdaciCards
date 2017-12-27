import React from 'react';
import {
   Text,
   View,
   StatusBar
} from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Constants } from 'expo';
import AddQuestion from './components/AddQuestion';
import CreateDeck from './components/CreateDeck';
import Deck from './components/Deck';
import DeckList from './components/DeckList';
import Quiz from './components/Quiz';

function HomeStatusBar({ backgroundColor, ...props }) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar
        translucent
        backgroundColor={backgroundColor}
        {...props}
      />
    </View>
  );
}

const Tabs = TabNavigator({

  Decks: {
    screen: DeckList,
  },

  CreateDeck: {
    screen: CreateDeck,
  },

});

const MainNavigation = StackNavigator({

  Home: {
    screen: Tabs,
    navigationOptions: {
      title: 'Flash Cards',
    }
  },

  AddQuestion: {
    screen: AddQuestion,
  },

  DeckList: {
    screen: DeckList,
  },

  Deck: {
    screen: Deck,
  },

  Quiz: {
    screen: Quiz,
  },

});

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <HomeStatusBar
          backgroundColor="green"
        />
        <MainNavigation />
        <Text>Homepage</Text>
      </View>
    );
  }
}
