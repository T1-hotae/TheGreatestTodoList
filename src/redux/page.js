import { createSlice } from "@reduxjs/toolkit";

const pageSlice = createSlice({
  name: "page",
  initialState: {
    page: "todo",
    placeholder: "추가할 일을 입력하세요.",
    buttonTag: "추가",
  },
  reducers: {
    setPageToTodoList: (state) => {
      state.page = "todo";
      state.placeholder = "추가할 일을 입력하세요.";
      state.buttonTag = "추가";
    },
    setPageToSearch: (state) => {
      state.page = "search";
      state.placeholder = "검색어를 입력하세요.";
      state.buttonTag = "검색";
    },
  },
});

export const { setPageToTodoList, setPageToSearch } = pageSlice.actions;
export default pageSlice.reducer;
