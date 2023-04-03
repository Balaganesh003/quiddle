import { createSlice } from '@reduxjs/toolkit';

const gameSlice = createSlice({
  name: 'game',
  initialState: {
    choosedWord: '',
    gameError: null,
    remainingChance: 15,
    alreadyPlayedWords: [],
    guessedWords: [],
  },
  reducers: {
    reduceRemainingChance(state) {
      state.remainingChance--;
    },

    resetRemainingChance(state) {
      state.remainingChance = 15;
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
    setAlreadyPlayedWords(state, action) {
      state.alreadyPlayedWords = action.payload;
    },
  },
});

export const gameActions = gameSlice.actions;

export default gameSlice;
