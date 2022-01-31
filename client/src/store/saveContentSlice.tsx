import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
interface saveContentState {
  // title: string;
  // year: string;
  // imdbID: string;
  // type: string;
  // poster: string;
  saveContent: {}[];
}
const initialState: saveContentState = {
  // title: "",
  // year: "",
  // imdbID: "",
  // type: "",
  // poster: "",
  saveContent: [],
};

const saveContentSlice = createSlice({
  name: "saveContent",
  initialState,
  reducers: {
    saveContentToProfile: (state, action: PayloadAction<saveContentState>) => {
      // let body = {
      //   title: action.payload.title,
      //   year: action.payload.year,
      //   imdbID: action.payload.imdbID,
      //   type: action.payload.type,
      //   poster: action.payload.poster,
      // };
      state.saveContent.push(action.payload);
    },
  },
});

export const { saveContentToProfile } = saveContentSlice.actions;
export const saveContent = (state: any) => state.saveContent;
export default saveContentSlice.reducer;
