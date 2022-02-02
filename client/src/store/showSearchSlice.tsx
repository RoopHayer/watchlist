import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  show: false,
};

const showSearchSlice = createSlice({
  name: "showSearch",
  initialState,
  reducers: {
    showHideSearch: (state) => {
      state.show = !state.show;
    },
  },
});

export const { showHideSearch } = showSearchSlice.actions;
export const showSearch = (state: any) => state.show;
export default showSearchSlice.reducer;
