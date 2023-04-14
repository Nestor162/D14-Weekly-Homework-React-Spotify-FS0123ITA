import { createSlice } from "@reduxjs/toolkit";

// Seguendo anche la documentazione, ho deciso di usare gli Slice perche facilitano molto la creazione di Reducers e la gestione dello stato.

export const playReducer = createSlice({
  name: "player",
  initialState: {
    currentSong: {}
  },
  reducers: {
    setPlay: (state, action) => {
      state.currentSong = action.payload;
    }
  }
});

// Action creators are generated for each case reducer function
export const { setPlay } = playReducer.actions;

export default playReducer.reducer;
