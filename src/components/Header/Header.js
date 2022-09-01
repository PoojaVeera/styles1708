import { HEAD, DOAR, ICONS, NAVBAR, UL, LI } from "./Header.style";
import { AiOutlineSearch } from "react-icons/ai";
import { BsChatLeft } from "react-icons/bs";
import { BiBell } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import React from "react";

export const Header = () => {
  return (
    <HEAD>
      <DOAR>
        <h2>doar</h2>
      </DOAR>
      <NAVBAR>
        <UL>
          <LI>Dashboard</LI>
          <LI>Apps</LI>
          <LI>Pages</LI>
          <LI>Components</LI>
          <LI>Collections</LI>
        </UL>
      </NAVBAR>
      <ICONS>
        <AiOutlineSearch color="black" size="20px" />
        &nbsp;&nbsp;
        <BsChatLeft color="black" size="20px" /> &nbsp;&nbsp;
        <BiBell color="black" size="20px" />
        &nbsp;&nbsp;&nbsp;
        <CgProfile color="black" size="20px" />
      </ICONS>
    </HEAD>
  );
};
