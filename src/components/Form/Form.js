import React from "react";
import {
  FORM1,
  SIN,
  WELCOME,
  FORM,
  Mailbox,
  INBOXmail,
  INBOXpass,
  PASSWORD,
  BUTTONSI,
  ButtonG,
  BUTTONF,
} from "./Form.style.js";
import { useFormik } from "formik";
export const Form = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const frmk = useFormik({
    initialValues,
  });
  console.log(frmk);
  const validate = (values) => {
    console.log(values);
  };
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
                <INBOXmail
                  type="email"
                  name="email"
                  placeholder="yourname@yourmail.com"
                  values={frmk.values.email}
                  onChange={frmk.handleChange}
                />
              </Mailbox>

              <PASSWORD>
                Password
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                <a href="">Forgot password?</a>
              </PASSWORD>
              <INBOXpass
                type="password"
                placeholder="enter your password"
                name="password"
                values={frmk.values.password}
                onChange={frmk.handleChange}
              />
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
