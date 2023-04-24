import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todoList/todoSlice";

const store = configureStore({
  reducer: {
    todo: todoSlice,
  },
});

export default store;
