import { AsyncStorage } from 'react-native';

export function getDecks() {
  return AsyncStorage.getAllKeys().then((keys) => {
    return AsyncStorage.multiGet(keys).then(stores => {
      return stores.map((result, i, store) => {
        let key = store[i][0];
        let value = JSON.parse(store[i][1]);
        if (value) {
          return {
            key,
            title: value.title,
            questions: value.questions
          };
        }
      })
      .filter((items) => {
        if (items) {
          return typeof items.questions !== 'undefined';
        }
      });
    });
  });
}

export function getDeck(id) {
  return AsyncStorage.getItem(id);
}

export function saveDeckTitle(title) {
  try {
    return AsyncStorage.setItem(title, JSON.stringify({ title, questions: [] }));
  } catch (err) {
    console.log(err);
  }
}

export function addCardToDeck(title, card) {
  try {
    AsyncStorage.getItem(title).then((result) => {
      const data = JSON.parse(result);
      let questions = data.questions;
      questions.push(card);

      AsyncStorage.mergeItem(title, JSON.stringify({ questions }));
    });
  } catch (e) {
    console.log(e);
  }
}
