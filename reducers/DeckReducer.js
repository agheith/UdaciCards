import { FETCH_DECKS } from '../actions/types';


export default function (state = {}, action) {
  switch (action.type) {

    case FETCH_DECKS:
      return action.payload;

    default:
      return state;
  }
}
