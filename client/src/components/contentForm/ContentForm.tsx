import { useDispatch } from "react-redux";
import { fetchContent } from "../../store/contentSlice";
import { Button, Form, Col, Row } from "react-bootstrap";

export default function ContentForm() {
  const dispatch = useDispatch();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const searchText = e.target.content.value;
    console.log(e.target.content);
    dispatch(fetchContent(searchText));
  };
  return (
    <>
      <Form
        className="content-form"
        style={{
          padding: "1rem",
          boxShadow: "0  0 .1rem .1rem grey",
        }}
        onSubmit={handleSubmit}
      >
        <Row className="mb-3">
          <Form.Group as={Col} className="mb-3" controlId="content">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" placeholder="keyword" />
          </Form.Group>
          <Form.Group as={Col} className="mb-3" controlId="year">
            <Form.Label>Year</Form.Label>
            <Form.Control type="number" placeholder="Year" />
          </Form.Group>
          <Form.Group as={Col} className="mb-3" controlId="language">
            <Form.Label>Language</Form.Label>
            <Form.Control type="text" placeholder="Language" />
          </Form.Group>
          <Form.Group as={Col} className="mb-3" controlId="type">
            <Form.Label>Type</Form.Label>
            <Form.Control type="text" placeholder="movies/series/episode" />
          </Form.Group>
        </Row>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}
