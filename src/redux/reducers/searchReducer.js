import { createSlice } from "@reduxjs/toolkit";

// Seguendo anche la documentazione, ho deciso di usare gli Slice perche facilitano molto la creazione di Reducers e la gestione dello stato.

export const searchSlice = createSlice({
  name: "counter",
  initialState: {
    search: false,
    searchQuery: ""
  },
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setQuery: (state, action) => {
      state.searchQuery = action.payload;
    }
  }
});

export const { setSearch, setQuery } = searchSlice.actions;

export default searchSlice.reducer;
