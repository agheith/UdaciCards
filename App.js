import React from 'react';
import { StatusBar, View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Constants } from 'expo';
import { Feather, MaterialIcons } from '@expo/vector-icons';
import AddQuestion from './components/AddQuestion';
import CreateDeck from './components/CreateDeck';
import Deck from './components/Deck';
import DeckList from './components/DeckList';
import Quiz from './components/Quiz';
import reducer from './reducers';

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

const MainNavigation = StackNavigator({

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

export default class App extends React.Component {
  render() {
    const store = createStore(reducer, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <HomeStatusBar
            backgroundColor="#CC2B1D"
            barStyle="light-content"
          />
          <MainNavigation />
        </View>
      </Provider>
    );
  }
}
