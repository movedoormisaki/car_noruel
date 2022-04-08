import React, { useState } from "react";
import styled from "styled-components";
import { Global_menu_sp } from "./global_menu_sp";

const StyleBurger = styled.div`
  width: 2rem;
  height: 1.2rem;
  position: fixed;
  top: 30px;
  right: 25px;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  z-index: 999;

  div {
    width: 2rem;
    background-color: #fff;
    transform-origin: 9px;
    transition: all 0.3s ease-out;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
      height: 0.08rem;
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
      height: 0.08rem;
    }
  }
`;

export const Burger = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <StyleBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
      </StyleBurger>
      <Global_menu_sp open={open} onClick={() => setOpen(!open)} />
    </>
  );
};
