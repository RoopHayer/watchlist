import {Card} from "react-bootstrap";
export default function SingleResult(props: any) {
  const singleContent = props.content;
  return (
    <>
  <Card style={{margin:"1rem"}}>
    <Card.Img variant="top" src={singleContent.Poster} style={{width:'100%',height:'100%'}} />
    <Card.Body>
      <Card.Text>{singleContent.Title}</Card.Text>
      <Card.Text>
      {singleContent.Year}
      </Card.Text>
    </Card.Body>
  </Card> 
    </>
  )
}
