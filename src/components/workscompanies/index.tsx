import React from "react";

import info from "../../dumyData/companies";
import Head from "next/head";
import Slider from "react-slick";
import SectionTitle from "../sectionTitle";

const Info = () => {
  const settings = {
    dots: false,
    speed: 500,
    arrows: false,
    infinite: true,

    slidesToShow: 3.5,
    autoplay: true,
    slidesToScroll: 1,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1104,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <>
      <div className="w-screen md:px-20 px-6 bg-slate-50 relative z-40 ">
        <div className="text-textPrimary  font-normal text-center text-xl">
          <SectionTitle title="Güçlü Ortaklıklarımızla Geleceğe...." />

          <div className="  my-10  ">
            <Slider className="  flex justify-center gap-6   " {...settings}>
              {info.map((item, index) => (
                <div
                  className="  flex justify-center items-center my-auto pointer-events-none  "
                  key={index}
                >
                  <img
                    src={item.url}
                    className="md:max-w-xl md:max-h-12 max-h-10 max-w-10 mr-11  "
                    alt="photo"
                    key={index}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 w-screen h-3 bg-bgPrimary z-40"></div>
        <div className="absolute bottom-0 left-0 w-[52%] h-5 bg-bgPrimary z-40 rotate-1 "></div>
        <div className="absolute bottom-0 right-0 w-[52%] h-5 bg-bgPrimary z-40 -rotate-1 "></div>
      </div>
    </>
  );
};

export default Info;
