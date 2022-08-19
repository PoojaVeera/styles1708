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
  INPUTBOX,
} from "./stylecomps.js";

function Mypage() {
  return (
    <div>
      <HEAD>header</HEAD>
      <Immg
        src="https://img.freepik.com/premium-vector/woman-working-computer-colorful-vector-concept-cartoon-flat-style-illustration-office-clerk-happy-girl-sitting-desk-with-laptop-female-character-freelancer-secretary-businesswoman_311563-586.jpg?w=2000"
        alt="welcome"
      />

      <FORM>
        <SIN>SIGN IN</SIN>
        <br />
        <form>
          <label>Email address</label>
          <br />
          <INPUTBOX>
            <input type="email" placeholder="yourname@yourmail.com" />
          </INPUTBOX>
          <br />
          <p>Password</p>
          <INPUTBOX>
            <input type="password" placeholder="enter your password"></input>
          </INPUTBOX>
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
      </FORM>
      <FOOT>Page created by pooja veeranki</FOOT>
    </div>
  );
}
export default Mypage;
