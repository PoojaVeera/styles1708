import { HEAD, DOAR, ICON, NAVBAR, UL, LI, ICONS } from "./Header.style";
import { AiOutlineSearch } from "react-icons/ai";
import { BsChatLeft } from "react-icons/bs";
import { BiBell } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import React from "react";

export const Header = () => {
  return (
    <HEAD>
      <DOAR>doar</DOAR>
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
        <ICON>
          <AiOutlineSearch color="black" size="20px" />
        </ICON>
        <ICON>
          <BsChatLeft color="black" size="20px" />
        </ICON>
        <ICON>
          <BiBell color="black" size="20px" />
        </ICON>
        <ICON>
          <CgProfile color="black" size="20px" />
        </ICON>
      </ICONS>
    </HEAD>
  );
};
