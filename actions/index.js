import { FETCH_DECKS, FETCH_DECK_INFO } from './types';
import { getDecks, getDeck } from '../utils/helpers';

export function fetchDecks() {
  return dispatch => {
    getDecks().then((data) => dispatch({
      type: FETCH_DECKS,
      payload: data
    }));
  };
}

export function fetchDeckInfo(id) {
  return dispatch => {
    getDeck(id).then((cardDeck) => dispatch({
      type: FETCH_DECK_INFO,
      payload: JSON.parse(cardDeck)
    }));
  };
}
