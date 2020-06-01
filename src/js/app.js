import GameSavingLoader from './game-saving-loader';

GameSavingLoader.load().then((response) => {
  console.log('final response', response);
});
