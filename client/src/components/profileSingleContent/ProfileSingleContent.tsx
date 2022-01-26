import { Card } from "react-bootstrap";
// import { useDispatch } from "react-redux";
// import { saveContentToProfile } from "../../store/saveContentSlice";
export default function ProfileSingleContent(props: any) {
  const singleContent: any = props.content;
  // const dispatch = useDispatch();
  // const handleClick = (e: any) => {
  //   dispatch(saveContentToProfile(singleContent));
  // };
  return (
    <>
      <Card className="content-card">
        <Card.Img
          variant="top"
          src={singleContent.Poster}
          style={{ width: "100%", height: "28rem" }}
        />
        <Card.Body style={{ height: "auto", width: "auto" }}>
          <Card.Text>{singleContent.Title}</Card.Text>
          <Card.Text>{singleContent.Year}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
