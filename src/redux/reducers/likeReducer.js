import { createSlice } from "@reduxjs/toolkit";

// Seguendo anche la documentazione, ho deciso di usare gli Slice perche facilitano molto la creazione di Reducers e la gestione dello stato.

export const likeReducer = createSlice({
  name: "liked",
  initialState: {
    likedSongs: []
  },
  reducers: {
    setLike: (state, action) => {
      /* Con "CreateSlice" è possibile mutare lo stato direttamente perchè Redux Toolkit utilizza la libreria "immer" che "sotto il cofano" gestisce tutto in maniera immutabile.
    
      Link documentazione: https://redux-toolkit.js.org/usage/immer-reducers#immutable-updates-with-immer  */

      state.likedSongs.push(action.payload);
    },
    removeLike: (state, action) => {
      /* Rimuovo l'elemento dall'array in base all' indice dello stesso */
      const index = state.likedSongs.indexOf(action.payload);
      if (index !== -1) {
        state.likedSongs.splice(index, 1);
      }
    }
  }
});

export const { setLike, removeLike } = likeReducer.actions;

export default likeReducer.reducer;
