import React from "react";
import {
  HEAD,
  Immg,
  FORM,
  FOOT,
  BUTTONSI,
  BUTTONF,
  BUTTONG,
  SIN,
} from "./Stylecomps.js";

function Mypage() {
  return (
    <div>
      <HEAD>
        <img src="https://etimg.etb2bimg.com/photo/93130023.cms" alt="Sedin" />
        <h3>
          Dashboard &nbsp; Apps &nbsp; Pages &nbsp; Components &nbsp;
          Collections
        </h3>
      </HEAD>
      <Immg
        src="https://img.freepik.com/premium-vector/woman-working-computer-colorful-vector-concept-cartoon-flat-style-illustration-office-clerk-happy-girl-sitting-desk-with-laptop-female-character-freelancer-secretary-businesswoman_311563-586.jpg?w=2000"
        alt="welcome"
      />

      <FORM>
        <SIN>SIGN IN</SIN>
        <br />
        <p>welcome back please sign in </p>
        <br></br>
        <form>
          <label>
            <b>Email address</b>
          </label>
          <br />
          <input type="email" placeholder="yourname@yourmail.com" />
          <br />
          <p>
            <b>Password</b>&emsp;&emsp;&emsp;&emsp;&emsp;
            <a href="">Forgot password?</a>
          </p>
          <input type="password" placeholder="enter your password"></input>

          <br />
        </form>
        <br />
        <BUTTONSI>SIGN IN</BUTTONSI>
        <br />
        <h4>------------------------------OR----------------------------</h4>
        <BUTTONG>Sign in with Google</BUTTONG>
        <br />
        <BUTTONF>Sign in with facebook</BUTTONF>
        <br />
        <p>
          Don't have an account? &emsp; <a href="/">create a account</a>
        </p>
      </FORM>
      <FOOT>Page created by pooja veeranki</FOOT>
    </div>
  );
}
export default Mypage;
