import React from "react";
import { FOOT, SUBFOOT1, SUBFOOT2 } from "./Footer.styles";
export const Footer = () => {
  return (
    <FOOT>
      <SUBFOOT1>
        <nav>
          <a href="https://themeforest.net/licenses/standard">Licenses</a>
          &emsp;&emsp;
          <a href="https://doar-react.netlify.app/">change log</a>&emsp;&emsp;
          <a href="https://hasthemes.com/contact-us/">get help</a>&emsp;&emsp;
        </nav>
      </SUBFOOT1>
      <SUBFOOT2 className="subfoot2">
        <p>
          @DOAR 2022 MADE WITH BY{" "}
          <a href="https://themeforest.net/user/bootxperts/portfolio">
            BOOTEXPERTS
          </a>
        </p>
      </SUBFOOT2>
    </FOOT>
  );
};
