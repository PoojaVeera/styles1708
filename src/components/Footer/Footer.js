import React from "react";
import { FOOT, SUBFOOT1, SUBFOOT2, A } from "./Footer.styles";
export const Footer = () => {
  return (
    <FOOT>
      <SUBFOOT1>
        <nav>
          <A href="https://themeforest.net/licenses/standard">Licenses</A>
          &emsp;&emsp;
          <A href="https://doar-react.netlify.app/">change log</A>&emsp;&emsp;
          <A href="https://hasthemes.com/contact-us/">get help</A>&emsp;&emsp;
        </nav>
      </SUBFOOT1>
      <SUBFOOT2 className="subfoot2">
        <p>
          @DOAR 2022 MADE WITH BY
          <A href="https://themeforest.net/user/bootxperts/portfolio">
            BOOTEXPERTS
          </A>
        </p>
      </SUBFOOT2>
    </FOOT>
  );
};
