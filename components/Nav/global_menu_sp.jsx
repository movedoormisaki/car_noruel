import React from "react";
import styled from "styled-components";

const Global_menu_style = styled.ul`
  transform-origin: 1px;
  transition: all 0.3s ease-out;
  pointer-events: ${({ open }) => (open ? "auto" : "none")};
  opacity: ${({ open }) => (open ? "1" : "0")};
  touch-action: ${({ open }) => (open ? "auto" : "none")};
`;

const Global_menu_sp = (props) => {
  const menu = ["SERVICE", "LINEUP", "ABOUTUS", "CONTACT"];
  const { open, onClick } = props;
  return (
    <>
      <Global_menu_style open={open}>
        {menu.map((item, index) => {
          return (
            <li key={index}>
              <a onClick={onClick} href={"#" + item} rel="noopener">
                {item}
              </a>
            </li>
          );
        })}
      </Global_menu_style>
    </>
  );
};

export default Global_menu_sp;
