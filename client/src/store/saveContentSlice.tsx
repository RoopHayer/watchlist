import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

// export const fetchContent = createAsyncThunk('content/fetchContent', async (searchText:string) =>{
//   let contentText = searchText;
//   const response = await axios.get(`${MOVIE_URL}/?s=${contentText}&apikey=${API_KEY}`)
//   return response.data;
// })
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
  // extraReducers: builder=>{
  //   builder.addCase(fetchContent.pending,()=>{
  //     console.log('Pending');
  //   })
  //   .addCase(fetchContent.fulfilled,(state,{payload})=>{
  //     console.log('Successfull');
  //     return{...state,content: payload}
  //   })
  //   .addCase(fetchContent.rejected,()=>{
  //     console.log('Rejected')
  //   })
  // }
});

export const { saveContentToProfile } = saveContentSlice.actions;
export const saveContent = (state: any) => state.content;
export default saveContentSlice.reducer;
