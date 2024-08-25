import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
export default function Category() {
  const [slide, setSlide] = useState(0);
  // const [categories, setCategory] = useState();

  // const fetcCategory = async () => {
  //   const response = await fetch("http://localhost:5000/categories");
  //   const data = response.json();
  // };
  const data = [
    {
      image: "images/North_Indian_4.jpeg",
      path: "north-indian",
    },
    {
      image: "images/Pizza.jpeg",
      path: "pizza",
    },
    {
      image: "images/Noodles.jpeg",
      path: "noodles",
    },
    {
      image: "images/Pasta.jpeg",
      path: "pasta",
    },
    {
      image: "images/Paratha.jpeg",
      path: "paratha",
    },
    {
      image: "images/Biryani_2.jpeg",
      path: "biryani",
    },
    {
      image: "images/Burger.jpeg",
      path: "burger",
    },
    {
      image: "images/Cakes.jpeg",
      path: "cakes",
    },
    {
      image: "images/Chinese.jpeg",
      path: "chinese",
    },
    {
      image: "images/Dosa.jpeg",
      path: "dost",
    },
    {
      image: "images/Gulab_Jamun.jpeg",
      path: "gulab-jamun",
    },
    {
      image: "images/Ice_Creams.jpeg",
      path: "ice-creams",
    },
  ];
  const nextSlide = () => {
    console.log(data.length);
    if (data.length - 8 == slide) {
      // setSlide(0);
      return false;
    }
    return setSlide(slide + 2);
  };
  const prevSlide = () => {
    if (slide == 0) {
      // setSlide(false);
      return false;
    }
    return setSlide(slide - 2);
  };
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="flex my-3 items-center justify-between ">
        <div className="text-[25px] font-bold "> What's on your mind?</div>
        <div className="flex">
          <div
            className=" cursor-pointer w-[30px] h-[30px] bg-[#e2e2e7] flex items-center justify-center rounded-full mx-2"
            onClick={prevSlide}
          >
            <FaArrowLeft />
          </div>
          <div
            className="  cursor-pointer  flex items-center justify-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2"
            onClick={nextSlide}
          >
            <FaArrowRight />
          </div>
        </div>
      </div>
      <div className="flex z-0 overflow-hidden  ">
        {data.map((cat, index) => {
          return (
            <div
              style={{
                transform: `translateX(-${slide * 100}%)`,
              }}
              className="w-[150px]  shrink-0 "
              key={index}
            >
              <img src={cat.image} alt="" />
            </div>
          );
        })}
      </div>
      <hr className="my-6 border-[2px]" />
    </div>
  );
}
