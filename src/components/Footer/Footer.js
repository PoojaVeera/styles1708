import React from "react";
import { FOOT, A } from "./Footer.styles";
import { AiOutlineHeart } from "react-icons/ai";
export const Footer = () => {
  return (
    <FOOT>
      <p>
        @DOAR 2022 MADE WITH <AiOutlineHeart color="red" size="20px" /> BY
        <A href="https://themeforest.net/user/bootxperts/portfolio">
          BOOTEXPERTS
        </A>
      </p>
      <p>
        <A href="https://themeforest.net/licenses/standard">LICENSES</A>
        <A href="https://doar-react.netlify.app/">CHANGE LOG</A>
        <A href="https://hasthemes.com/contact-us/">GET HELP</A>
      </p>
    </FOOT>
  );
};
