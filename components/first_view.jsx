import React, { useState } from "react";
import Link from "next/link";
import Global_menu_pc from "../components/Nav/global_menu_pc";
import Navbar from "../components/Nav/Navbar";
import { BrowserView, MobileView } from "react-device-detect";
import GetWindowSize from "./useWindowDimensions";
import styled from "styled-components";
import Slider from "react-slick";

const company_name = "CAR NORUEL\nINTERNATIONAL";

const First_view = (props) => {
  const { height, width } = GetWindowSize();
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
          <Link href="/">
            <a>
              <h1 className="white_space">{company_name}</h1>
            </a>
          </Link>
          <MobileView>
            <Navbar />
          </MobileView>
          <BrowserView>
            <Global_menu_pc />
          </BrowserView>
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

export default First_view;
