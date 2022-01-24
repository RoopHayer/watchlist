import React from "react";
import SingleResult from "../singleResult/SingleResult";
import { fetchContent } from "../../store/contentSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { CardGroup, Row, Carousel } from "react-bootstrap";
import "./results.css";
import { getAllContent } from "../../store/contentSlice";
export default function Results() {
  // const dispatch = useDispatch();
  // useEffect(()=>{
  //   dispatch(fetchContent('james bond'));
  //   console.log('hello')
  // },[dispatch])

  console.log(getAllContent);

  const contentListings = useSelector(getAllContent);

  console.log(contentListings.Response);
  return (
    <Row>
      <Carousel className="slide w-100">
        <CardGroup style={{ overflow: "auto", scrollbarColor: "red" }}>
          {/* <Row xs={1} sm={2} md={2} lg={3}> */}

          {contentListings.Response &&
            contentListings.Search?.map((item: any, idx: number) => (
              <Carousel.Item>
                <SingleResult content={item} key={idx} />
              </Carousel.Item>
            ))}
          {/* </Row> */}
        </CardGroup>
      </Carousel>
    </Row>
  );
}
