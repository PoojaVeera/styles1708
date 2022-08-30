import React from "react";
import { Form } from "./Form/Form";
import {
  HEAD,
  Immg,
  ICONS,
  FOOT,
  SUBFOOT1,
  SUBFOOT2,
  DO,
  DOAR,
  AR,
} from "./Stylecomps";
import { AiOutlineSearch } from "react-icons/ai";
import { BsChatLeft } from "react-icons/bs";
import { BiBell } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
function MyPage() {
  return (
    <div className="container">
      <HEAD className="head">
        <DOAR>
          <h2>doar</h2>
        </DOAR>
        <h4>
          Dashboard &nbsp; Apps &nbsp; Pages &nbsp; Components &nbsp;
          Collections
          <ICONS>
            <AiOutlineSearch />
            &nbsp;
            <BsChatLeft /> &nbsp;
            <BiBell />
            &nbsp;
            <CgProfile />
          </ICONS>
        </h4>
      </HEAD>
      <Immg
        src="https://doar-react.netlify.app/static/media/img15.7466a766337d9343c274.png"
        alt="sign in "
      />
      <Form />
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
    </div>
  );
}
export default MyPage;
