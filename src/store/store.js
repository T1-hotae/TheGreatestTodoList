import { configureStore, createSlice } from "@reduxjs/toolkit";

const mockData = [
  { id: 0, isDone: false, content: "React공부하기" },
  { id: 1, isDone: false, content: "K-프로젝트" },
  { id: 2, isDone: false, content: "와이어프레임" },
];

const todoSlice = createSlice({
  name: "todoSlice",
  initialState: mockData,
  reducers: {
    create: (state, action) => {
      state.push({
        id: Date.now(),
        isDone: false,
        content: action.payload,
      });
    },

    update: (state, action) => {
      const target = state.find((item) => item.id === action.payload);
      if (target) target.isDone = !target.isDone;
    },

    remove: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

const store = configureStore({
  reducer: {
    todos: todoSlice.reducer,
  },
});

export const { create, update, remove } = todoSlice.actions;

export default store;
