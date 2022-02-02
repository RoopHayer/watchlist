import { Card, Form, Button } from "react-bootstrap";
export default function ProfileSingleContent(props: any) {
  const singleContent: any = props.content;

  return (
    <>
      <Card className="content-card">
        <Card.Img
          variant="top"
          src={singleContent.Poster}
          style={{ width: "100%", height: "28rem" }}
        />
        <Card.Body>
          <Card.Text>{singleContent.Title}</Card.Text>
          <Card.Text>{singleContent.Year}</Card.Text>
          <Form>
            <Form.Group className="mb-3" controlId="notes">
              <Form.Label>Notes</Form.Label>
              <Form.Control type="title" placeholder="type in your notes" />
            </Form.Group>
            <Button variant="warning" type="submit">
              Add notes
            </Button>
          </Form>
          <Button style={{ margin: "1rem 0" }} variant="warning">
            Delete
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}
