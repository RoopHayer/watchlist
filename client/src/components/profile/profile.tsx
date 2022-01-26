import ProfileSingleContent from "../profileSingleContent/ProfileSingleContent";

import { useSelector } from "react-redux";
import "./profile.css";
import { saveContent } from "../../store/saveContentSlice";
import Slider from "react-slick";

export default function Profile() {
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

  const saveContentListings = useSelector(saveContent);
  console.log(saveContentListings);
  return (
    <>
      <div
        style={{
          width: "100%",
          marginTop: ".8rem",
        }}
      >
        <Slider {...settings}>
          {saveContentListings &&
            saveContentListings.saveContent?.map((item: any, idx: number) => (
              <ProfileSingleContent content={item} key={idx} />
            ))}
        </Slider>
      </div>
    </>
  );
}
