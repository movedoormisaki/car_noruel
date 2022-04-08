import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Global_menu_style = styled.ul`
  transform-origin: 1px;
  opacity: 1;
`;

const Global_menu_pc = () => {
  const menu = ["SERVICE", "LINEUP", "ABOUTUS", "CONTACT"];
  return (
    <>
      <Global_menu_style>
        {menu.map((item, index) => {
          return (
            <li key={index}>
              <a href={"#" + item} rel="noopener noreferrer">
                {item}
              </a>
            </li>
          );
        })}
      </Global_menu_style>
    </>
  );
};

export default Global_menu_pc;
