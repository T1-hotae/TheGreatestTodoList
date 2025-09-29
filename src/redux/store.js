import { configureStore } from "@reduxjs/toolkit";
import pageReducer from "./page";
import todoReducer from "./todo";

export const store = configureStore({
  reducer: {
    page: pageReducer,
    todos: todoReducer,
  },
});

store.subscribe(() => {
  const state = store.getState().todos;
  localStorage.setItem("todos", JSON.stringify(state));
});
