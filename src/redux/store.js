import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./reducers/searchReducer";
import playReducer from "./reducers/playReducer";

const store = configureStore({
  reducer: {
    search: searchReducer,
    player: playReducer
  }
});

export default store;
