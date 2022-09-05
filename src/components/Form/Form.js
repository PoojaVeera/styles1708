import React from "react";
import { A } from "../MyPage.styles";
import {
  LINE,
  OR,
  SIN,
  WELCOME,
  FORM,
  INBOX,
  PASSWORD,
  BUTTONSI,
  ButtonT,
  BUTTONF,
  P,
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
    <FORM>
      <SIN>Sign In</SIN>
      <WELCOME>Welcome back! please sign in to continue</WELCOME>
      <br></br>
      <form>
        <label htmlFor="email">Email address</label>
        <INBOX
          type="email"
          name="email"
          placeholder="yourname@yourmail.com"
          values={frmk.values.email}
          onChange={frmk.handleChange}
        />
        <br></br>
        {frmk.errors.email ? (
          <div className="email">{frmk.errors.email}</div>
        ) : null}
        <PASSWORD htmlFor="password">
          Password
          <a href="https://doar-react.netlify.app/signin">Forgot password?</a>
        </PASSWORD>
        <INBOX
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
        <BUTTONSI type="submit">Sign In</BUTTONSI>
        <OR>
          <LINE />
          OR
          <LINE />
        </OR>
        <BUTTONF type="submit">Sign in with Facebook</BUTTONF>
        <ButtonT type="submit">Sign in with Twitter</ButtonT>
      </form>

      <P>
        Don't have an account?
        <A href="https://doar-react.netlify.app/signin">Create an Account</A>
      </P>
    </FORM>
  );
};
