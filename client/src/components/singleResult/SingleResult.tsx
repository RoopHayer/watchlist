
export default function SingleResult(props: any) {
  const singleContent = props.content;
  return (
    <>
    <div style ={{display:"flex", height:'30rem', width:'20rem',flexDirection:'column', alignContent:'center'}}>
      {singleContent.Title}
    <img src={singleContent.Poster}/>
    <div>{singleContent.Year}</div>
    <div>{singleContent.Type}</div>
    </div>
    
    
    </>
  )
}
