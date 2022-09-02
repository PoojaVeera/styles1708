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
  const frmk = useFormik({
    initialValues: { email: "", password: "" },
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      alert("you are successfully logged in");
      resetForm();
    },
    validate: (values) => {
      let errors = {};
      if (!values.email) {
        errors.email = "email required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }
      if (!values.password) {
        errors.password = "password required";
      } else if (values.password.length < 5) {
        errors.password = "min of 5 characters";
      } else if (values.password.length > 12) {
        errors.password = "max of 12 characters";
      }
      return errors;
    },
  });
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
              {frmk.errors.email ? (
                <div className="email">{frmk.errors.email}</div>
              ) : null}
              <PASSWORD>
                Password
                &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                <a href="https://doar-react.netlify.app/signin">
                  Forgot password?
                </a>
              </PASSWORD>
              <INBOXpass
                type="password"
                placeholder="enter your password"
                name="password"
                values={frmk.values.password}
                onChange={frmk.handleChange}
              />
              <br></br>
              {frmk.errors.password ? (
                <div className="password">{frmk.errors.password}</div>
              ) : null}
            </form>
            <BUTTONSI>SIGN IN</BUTTONSI>
            --------------------------------0R--------------------------------
            <br />
            <BUTTONF>Sign in with Facebook</BUTTONF>
            <ButtonG>Sign in with Twitter</ButtonG>
            <p>
              Don't have an account? &emsp;{" "}
              <a href="https://doar-react.netlify.app/signin">
                create a account
              </a>
            </p>
          </FORM>
        </WELCOME>
      </SIN>
    </FORM1>
  );
};
