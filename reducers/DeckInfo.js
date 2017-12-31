import {
  FETCH_DECK_INFO
} from '../actions/types';

export default function (state = {}, action) {
  switch (action.type) {

    case FETCH_DECK_INFO:
      return action.payload;

    default:
      return state;
  }
}
