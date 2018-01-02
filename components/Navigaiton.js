import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import AddQuestion from './AddQuestion';
import CreateDeck from './CreateDeck';
import DeckList from './DeckList';
import Deck from './Deck';
import Quiz from './Quiz';

export const Tabs = TabNavigator({

  Decks: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ({ tintColor }) => <Feather name='home' size={30} color={tintColor} />
    }
  },

  CreateDeck: {
    screen: CreateDeck,
    navigationOptions: {
      tabBarLabel: 'Create Deck',
      tabBarIcon: ({ tintColor }) => <MaterialIcons name='create' size={30} color={tintColor} />
    }
  },

});

export const MainNavigation = StackNavigator({

  Home: {
    screen: Tabs,
    navigationOptions: {
      title: 'UdaciCards',
      headerTintColor: '#ECECEC',
      headerStyle: {
        backgroundColor: '#CC2B1D'
      }
    }
  },

  AddQuestion: {
    screen: AddQuestion,
    navigationOptions: {
      headerTintColor: '#ECECEC',
      headerStyle: {
        backgroundColor: '#CC2B1D'
      }
    }
  },

  DeckList: {
    screen: DeckList,
    navigationOptions: {
      headerTintColor: '#ECECEC',
      headerStyle: {
        backgroundColor: '#CC2B1D'
      }
    }
  },

  Deck: {
    screen: Deck,
    navigationOptions: {
      headerTintColor: '#ECECEC',
      headerStyle: {
        backgroundColor: '#CC2B1D'
      }
    }
  },

  Quiz: {
    screen: Quiz,
    navigationOptions: {
      headerTintColor: '#ECECEC',
      headerStyle: {
        backgroundColor: '#CC2B1D'
      }
    }
  },

});
