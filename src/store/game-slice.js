import { createSlice } from '@reduxjs/toolkit';

const gameSlice = createSlice({
  name: 'game',
  initialState: {
    game: null,
    gameStatus: 'idle',
    choosedWord: 'wood',
    gameError: null,
    remainingChance: 5,
    guessedWords: [],
  },
  reducers: {
    reduceRemainingChance(state) {
      state.remainingChance--;
    },

    resetRemainingChance(state) {
      state.remainingChance = 5;
    },
    addGuessedWord(state, action) {
      state.guessedWords.unshift(action.payload);
    },
    resetGuessedWords(state) {
      state.guessedWords = [];
    },
    setChoosedWord(state, action) {
      state.choosedWord = action.payload;
    },
    resetChooseWord(state) {
      state.choosedWord = '';
    },
  },
});

export const gameActions = gameSlice.actions;

export default gameSlice;
