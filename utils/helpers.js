import { AsyncStorage } from 'react-native';

// const data = {
//   React: {
//     title: 'React',
//     questions: [
//       {
//         question: 'What is React?',
//         answer: 'A library for managing user interfaces'
//       },
//       {
//         question: 'Where do you make Ajax requests in React?',
//         answer: 'The componentDidMount lifecycle event'
//       }
//     ]
//   },
//   JavaScript: {
//     title: 'JavaScript',
//     questions: [
//       {
//         question: 'What is a closure?',
//         answer: 'The combination of a function and the lexical environment '
//       }
//     ]
//   }
// };

// AsyncStorage.getAllKeys((err, keys) => {
//   AsyncStorage.multiGet(keys, (err, stores) => {
//     stores.map((result, i, store) => {
//       // get at each store's key/value so you can work with it
//       let key = store[i][0];
//       let value = store[i][1];
//     });
//   });
// });
//

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
      });
    });
  });
}

// try {
//   const value = await AsyncStorage.getItem('@MySuperStore:key');
//   if (value !== null){
//     // We have data!!
//     console.log(value);
//   }
// } catch (error) {
//   // Error retrieving data
// }

export function getDeck(id) {
  return AsyncStorage.getItem(id);
}

// try {
//   await AsyncStorage.setItem('@MySuperStore:key', 'I like to save it.');
// } catch (error) {
//   // Error saving data
// }

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
