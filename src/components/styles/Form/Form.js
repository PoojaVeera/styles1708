import React from "react";
import {
  FORM1,
  SIN,
  WELCOME,
  FORM,
  Mailbox,
  INBOX,
  PASSWORD,
  BUTTONSI,
  ButtonG,
  BUTTONF,
} from "./Form.style.js";
export const Form = () => {
  return (
    <FORM1>
      <SIN>
        <h3>SIGN IN</h3>
        <WELCOME>
          <p>Welcome back please sign in </p>
          <br></br>
          <FORM>
            <form>
              <Mailbox>
                <label>Email address</label>
                <INBOX type="email" placeholder="yourname@yourmail.com" />
              </Mailbox>
              <p>
                <PASSWORD>
                  Password
                  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                  <a href="">Forgot password?</a>
                </PASSWORD>
                <INBOX type="password" placeholder="enter your password" />
              </p>
            </form>
            <BUTTONSI>SIGN IN</BUTTONSI>
            <ButtonG>Sign in with Google</ButtonG>
            <br />
            <BUTTONF>Sign in with facebook</BUTTONF>
            <p>
              Don't have an account? &emsp; <a href="/">create a account</a>
            </p>
          </FORM>
        </WELCOME>
      </SIN>
    </FORM1>
  );
};
