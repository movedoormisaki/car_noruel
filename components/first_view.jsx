import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Global_menu_sp } from "../components/Nav/global_menu_sp";
import { Global_menu_pc } from "../components/Nav/global_menu_pc";
import { Navbar } from "../components/Nav/Navbar";
import { isMobile } from "react-device-detect";
import logo from "../public/img/logo_white.svg";
import { getWindowSize } from "./useWindowDimensions";
import styled from "styled-components";
import Slider from "react-slick";

// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

const company_name = "CAR NORUEL\nINTERNATIONAL";

export const First_view = (props) => {
  const { height, width } = getWindowSize();
  //const { height, width } = useWindowDimensions();
  const [count, setCount] = useState(0);
  const { top_img } = props;
  console.log(top_img);

  const StyleFirstView = styled.div`
  width:${width}px;
  height: 100vh;
  }
`;

  const settings = {
    dots: false,
    infinite: true,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <div className="top_view">
        <header>
          <a href="/">
            <h1 className="white_space">{company_name}</h1>
          </a>
          {(() => {
            if (isMobile) {
              return (
                <>
                  <Navbar />
                </>
              );
            } else {
              return (
                <>
                  <Global_menu_pc />
                </>
              );
            }
          })()}
        </header>
        <StyleFirstView>
          <Slider {...settings}>
            {top_img.map((img, index) => {
              return (
                <div key={index}>
                  <section
                    style={{
                      background:
                        "url(" + img.src + ")  center center / cover no-repeat",
                      width: "100%",
                      height: "100vh",
                    }}
                  ></section>
                </div>
              );
            })}
          </Slider>
        </StyleFirstView>
        <img className="App-logo" src="/img/logo_white.svg" alt="logo" />
      </div>
    </>
  );
};
