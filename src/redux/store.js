import { configureStore } from "@reduxjs/toolkit";
import pageReducer from "./page";
import todoReducer from "./todo";
import authReducer from "./login";

export const store = configureStore({
  reducer: {
    page: pageReducer,
    todos: todoReducer,
    auth: authReducer,
  },
});

store.subscribe(() => {
  const state = store.getState().todos;
  localStorage.setItem("todos", JSON.stringify(state));
});
