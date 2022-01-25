import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// export const fetchContent = createAsyncThunk('content/fetchContent', async (searchText:string) =>{
//   let contentText = searchText;
//   const response = await axios.get(`${MOVIE_URL}/?s=${contentText}&apikey=${API_KEY}`)
//   return response.data;
// })

const initialState = {
  saveContent: [],
};

const saveContentSlice = createSlice({
  name: "saveContent",
  initialState,
  reducers: {
    saveContentToProfile: (state, { payload }) => {
      let copyState = { ...state };
      console.log(state.saveContent);
      // copyState.saveContent = [...state.saveContent, payload];
      return payload;
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
