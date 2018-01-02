import React from 'react';
import { StatusBar, View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { Constants } from 'expo';
import reducer from './reducers';
import { setLocalNotification } from './utils/notification';
import { MainNavigation } from './components/Navigaiton';


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


export default class App extends React.Component {

  componentDidMount() {
    setLocalNotification();
  }

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
