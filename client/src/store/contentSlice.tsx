import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// const MOVIE_URL:string = (process.env.MOVIE_URL as string);
const MOVIE_URL = 'https://www.omdbapi.com';
// const API_KEY = process.env.API_KEY;
const API_KEY = '5e962003';


export const fetchContent = createAsyncThunk('content/fetchContent', async (searchText:string) =>{
  let contentText = searchText; 
  const response = await axios.get(`${MOVIE_URL}/?s=${contentText}&apikey=${API_KEY}`)
  return response.data;
})

const initialState = {
  content: []
};

const contentSlice = createSlice ({
  name: "content",
  initialState,
    reducers: {
      addContent: (state, {payload})=>{
        state.content = payload;
        console.log(payload);
      }
    },
    extraReducers: builder=>{
      builder.addCase(fetchContent.pending,()=>{
        console.log('Pending');
      })
      .addCase(fetchContent.fulfilled,(state,{payload})=>{
        console.log('Successfull');
        return{...state,content: payload}
      })
      .addCase(fetchContent.rejected,()=>{
        console.log('Rejected')
      })
    }    
})

export const {addContent} = contentSlice.actions;
export const getAllContent = (state: any) =>state.content;
export default contentSlice.reducer;