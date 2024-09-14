import { useState, useRef } from "react";
import Slider from "react-slick";

import image1 from "../../assets/home/01.jpg";
import image2 from "../../assets/home/02.jpg";
import image3 from "../../assets/home/03.png";
import image4 from "../../assets/home/04.jpg";
import image5 from "../../assets/home/05.png";
import image6 from "../../assets/home/01.jpg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const [displayImage, setDisplayImage] = useState(image6);
  const [activeSlide, setActiveSlide] = useState(0); // State to track active slide
  const sliderRef = useRef(null);

  const handleImageClick = (image) => {
    setDisplayImage(image);
  };

  const goToNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const goToPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleAfterChange = (current) => {
    setActiveSlide(current); // Update the active slide index
    const currentSlide = academicData[current];
    if (currentSlide) {
      setDisplayImage(currentSlide.image);
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    afterChange: handleAfterChange,
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };

  const academicData = [
    {
      id: "1",
      image: image1,
    },
    {
      id: "2",
      image: image2,
    },
    {
      id: "3",
      image: image3,
    },
    {
      id: "4",
      image: image4,
    },
    {
      id: "5",
      image: image5,
    },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* --------- banner -------- */}
      <div className="relative flex justify-center items-center">
        <img
          className="project-main-image w-[100%] object-fill  md:h-[90vh] cursor-pointer"
          src={displayImage}
          alt="Main display"
        />
        {/* Navigation buttons */}
        <button
          onClick={goToPrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 px-2 ms-2 py-2 md:bg-[#00000065]"
        >
          <svg
            className="transition-transform duration-300 ease-in-out transform hover:scale-150"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="35"
            height="35"
            color="#fff"
            fill="none"
          >
            <path
              d="M15 6C15 6 9.00001 10.4189 9 12C8.99999 13.5812 15 18 15 18"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button
          onClick={goToNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2  px-2 me-2 py-2 md:bg-[#00000065]"
        >
          <svg
            className="transition-transform duration-300 ease-in-out transform hover:scale-150"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="35"
            height="35"
            color="#fff"
            fill="none"
          >
            <path
              d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <div className="mt-3 h-[20vh] overflow-hidden relative">
        <Slider {...settings} ref={sliderRef}>
          {academicData.map((data, index) => (
            <div key={data.id}>
              <div
                onClick={() => handleImageClick(data.image)}
                className={`mx-1 cursor-pointer ${
                  activeSlide === index
                    ? "border-[#003366] border-t-2 border-l-2 border-b-2"
                    : "border-[#003366] border-r-2"
                }`}
              >
                <img
                  className="object-cover project-image"
                  src={data.image}
                  alt=""
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Home;
