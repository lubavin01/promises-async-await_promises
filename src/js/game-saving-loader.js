import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static load() {
    const promise = read().then((response) => json(response))
      .then((response) => new Promise((resolve) => {
        resolve(response);
      }));

    return promise;
  }
}
