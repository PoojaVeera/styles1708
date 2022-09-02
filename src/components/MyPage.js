import React from "react";
import { Footer } from "./Footer/Footer";
import { Form } from "./Form/Form";
import { Header } from "./Header/Header";
import { Immg, ImageSec, A } from "./MyPage.styles";

function MyPage() {
  return (
    <div className="container">
      <Header />
      <ImageSec>
        <Immg
          src="https://doar-react.netlify.app/static/media/img15.7466a766337d9343c274.png"
          alt="sign in "
        />
        <p>
          Workspace design vector is created by{" "}
          <A href="https://www.freepik.com/pikisuperstar">
            pikisuperstar (freepik.com)
          </A>
        </p>
      </ImageSec>

      <Form />
      <Footer />
    </div>
  );
}
export default MyPage;
