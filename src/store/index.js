import { configureStore } from "@reduxjs/toolkit";
import ReduxThunk from "redux-thunk";
import searchReducer from "./search";

export default configureStore({
  reducer: {
    search: searchReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ReduxThunk),
});
