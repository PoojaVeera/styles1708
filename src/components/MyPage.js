import React from "react";
import { Footer } from "./Footer/Footer";
import { Form } from "./Form/Form";
import { Header } from "./Header/Header";
import { Immg } from "./MyPage.styles";

function MyPage() {
  return (
    <div className="container">
      <Header />
      <Immg
        src="https://doar-react.netlify.app/static/media/img15.7466a766337d9343c274.png"
        alt="sign in "
      />
      <Form />
      <Footer />
    </div>
  );
}
export default MyPage;
