import { createSlice } from "@reduxjs/toolkit";

// Seguendo anche la documentazione, ho deciso di usare gli Slice perche facilitano molto la creazione di Reducers e la gestione dello stato.

export const likeReducer = createSlice({
  name: "liked",
  initialState: {
    likedSongs: []
  },
  reducers: {
    setLike: (state, action) => {
      state.likedSongs = [...state.likedSongs, action.payload];
    },
    removeLike: (state, action) => {
      /* Con "CreateSlice" è possibile mutare lo stato direttamente perchè Redux Toolkit utilizza la libreria "immer" che "sotto il cofano" gestisce tutto in maniera inmutable.
      Immer fa una copia  */
      state.likedSongs = state.likedSongs.splice(action.payload, 1);
    }
  }
});

export const { setLike, removeLike } = likeReducer.actions;

export default likeReducer.reducer;
