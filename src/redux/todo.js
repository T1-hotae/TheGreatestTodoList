import { createSlice } from "@reduxjs/toolkit";

const loadTodo = () => {
  try {
    const savedTodo = localStorage.getItem("todos");
    return savedTodo ? JSON.parse(savedTodo) : [];
  } catch (e) {
    console.error("Failed to load Todo...", e);
    return [];
  }
};

const todoSlice = createSlice({
  name: "todoSlice",
  initialState: loadTodo(),
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

export const { create, update, remove } = todoSlice.actions;

export default todoSlice.reducer;
