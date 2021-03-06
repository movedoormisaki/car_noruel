import React from "react";
import styled from "styled-components";

const Global_menu_style = styled.ul`
  transform-origin: 1px;
  opacity: 1;
`;

const Global_menu_pc = () => {
  const menu = ["SERVICE", "LINEUP", "ABOUTUS", "CONTACT"];
  return (
    <>
      <nav>
        <Global_menu_style>
          {menu.map((item, index) => {
            return (
              <li key={index}>
                <a href={"#" + item} rel="noopener">
                  {item}
                </a>
              </li>
            );
          })}
        </Global_menu_style>
      </nav>
    </>
  );
};

export default Global_menu_pc;
