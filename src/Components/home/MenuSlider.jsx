import React from "react";
import Slider from "react-slick";
import pizza from "../../assets/menu/pizza-bg.jpg";
import salad from "../../assets/menu/salad-bg.jpg";
import soup from "../../assets/menu/soup-bg.jpg";
import dessert from "../../assets/menu/dessert-bg.jpeg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MenuSlider = () => {
  // Array of menu items
  const menuItems = [
    { id: 1, name: "Pizza", imgSrc: pizza, altText: "Pizza" },
    { id: 2, name: "Salad", imgSrc: salad, altText: "Salad" },
    { id: 3, name: "Soup", imgSrc: soup, altText: "Soup" },
    { id: 4, name: "Dessert", imgSrc: dessert, altText: "Dessert" },
  ];

  const settings = {
    dots: true, // Adds navigation dots
    infinite: true, // Allows infinite scrolling
    speed: 500, // Transition speed
    slidesToShow: 3, // Number of slides to show
    slidesToScroll: 1, // Number of slides to scroll at once
    autoplay: true, // Enables autoplay
    autoplaySpeed: 2000, // Autoplay interval
    responsive: [
      {
        breakpoint: 1024, // For screens smaller than 1024px
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // For screens smaller than 768px
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full p-4 overflow-hidden mb-10">
      <Slider {...settings}>
        {menuItems.map((item) => (
          <div key={item.id} className="uppercase text-center relative">
            <img
              src={item.imgSrc}
              alt={item.altText}
              className="w-full h-72 object-cover p-4"
            />
            <p className=" text-[#000] text-2xl  bottom-9 left-0 right-0 absolute">
              {item.name}
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MenuSlider;
