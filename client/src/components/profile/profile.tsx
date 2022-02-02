import ProfileSingleContent from "../profileSingleContent/ProfileSingleContent";
import { CardGroup, Row, Container, Col } from "react-bootstrap";

import { useSelector } from "react-redux";
import "./profile.css";
import { saveContent } from "../../store/saveContentSlice";

export default function Profile() {
  const saveContentListings = useSelector(saveContent);
  console.log(saveContentListings);
  return (
    <>
      <CardGroup style={{ margin: "0 10rem" }}>
        <Container fluid>
          <Row xs={1} sm={2} md={3} lg={4}>
            {saveContentListings &&
              saveContentListings.saveContent?.map((item: any, idx: number) => (
                <Col>
                  <ProfileSingleContent content={item} key={idx} />
                </Col>
              ))}
          </Row>
        </Container>
      </CardGroup>
    </>
  );
}
