import SingleResult from "../singleResult/SingleResult";
import { useSelector } from "react-redux";
import "./results.css";
import { getAllContent } from "../../store/contentSlice";
import Slider from "react-slick";

export default function Results() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 4,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 4,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const contentListings = useSelector(getAllContent);
  return (
    <>
      <div
        style={{
          width: "100%",
          marginTop: ".8rem",
        }}
      >
        <Slider {...settings}>
          {contentListings.content.Response &&
            contentListings.content.Search?.map((item: any, idx: number) => (
              <SingleResult content={item} key={idx} />
            ))}
        </Slider>
      </div>
    </>
  );
}
