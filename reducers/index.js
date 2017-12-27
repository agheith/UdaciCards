import { combineReducers } from 'redux';
import DeckReducer from './DeckReducer';
import DeckInfo from './DeckInfo';

export default combineReducers({
  decks: DeckReducer,
  deckInfo: DeckInfo
});
