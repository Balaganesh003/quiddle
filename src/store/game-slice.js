import { createSlice } from '@reduxjs/toolkit';

const gameSlice = createSlice({
  name: 'game',
  initialState: {
    game: null,
    gameStatus: 'idle',
    gameError: null,
    remainingChance: 5,
  },
  reducers: {
    reduceRemainingChance(state) {
      state.remainingChance--;
    },

    resetRemainingChance(state) {
      state.remainingChance = 5;
    },
  },
});

export const gameActions = gameSlice.actions;

export default gameSlice;
