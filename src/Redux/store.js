import { configureStore } from "@reduxjs/toolkit";
import ListTaskSlice from "./Reducers/ListTask";

const store = configureStore({
  reducer: {
    listTask: ListTaskSlice,
  },
});

export default store;
