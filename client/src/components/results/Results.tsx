import SingleResult from '../singleResult/SingleResult';
import { fetchContent } from "../../store/contentSlice"
import {useEffect} from "react";
import {useDispatch} from 'react-redux';
import {useSelector} from 'react-redux';

import { getAllContent } from "../../store/contentSlice";

export default function Results (){
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchContent());
    console.log('hello')
  },[dispatch])

  console.log(getAllContent)

  const contentListings = useSelector(getAllContent)

  console.log(contentListings.Response)
  return(
   <div>
     results
     {
    contentListings.Response&&contentListings.Search.map((item:any,idx:number)=>(

       <SingleResult content={item}key={idx}/>
     ))
     }

   </div> 
  )
}