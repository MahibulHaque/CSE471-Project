import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { toast } from "react-toastify";
import styled from "styled-components";
import axios from "axios";
import { injectStyle } from "react-toastify/dist/inject-style";
import { useRouter } from "next/router";

if (typeof window !== "undefined") {
  injectStyle();
}
const NewPasswordScreen = ({ email, id }) => {
  const router = useRouter();
  const validationSchema = Yup.object().shape({
    Password: Yup.string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(/(?=.*[0-9])/, "Password must contain a number."),
    ConfirmPassword: Yup.string().oneOf(
      [Yup.ref("Password"), null],
      "Passwords must match"
    ),
  });
  return (
    <Container>
      <Wrapper>
        <h2>Create new password</h2>
        <p>Your new password must be diffrent from previous used passwords.</p>
        <Formik
          initialValues={{
            Password: "",
            ConfirmPassword: "",
          }}
          validationSchema={validationSchema}
          onSubmit={async (values, actions) => {
            // same shape as initial values
            try {
              const res = await axios.post("/api/change_password", {
                email: email,
                id: id,
                newpassword: values.Password,
              });
              if (res) {
                toast.success(`${res.data}`, {
                  position: "bottom-right",
                  autoClose: 2000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  onClose: function () {
                    router.replace("/login");
                  },
                });
              }
            } catch (error) {
              console.log(error);
            }
            actions.setSubmitting(false);
            actions.resetForm({
              values: { Password: "", ConfirmPassword: "" },
            });
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isValid,
            dirty,
          }) => (
            <Form autoComplete="off" onSubmit={handleSubmit}>
              <Label htmlFor="Password">Password</Label>
              <InputField
                type="password"
                id="Password"
                aria-label="Password"
                placeholder="Enter a new password"
                autoComplete="off"
                value={values.Password}
                onChange={(e) => {
                  handleChange(e);
                }}
                onBlur={handleBlur}
              />

              {errors.Password && touched.Password && (
                <div
                  style={{
                    width: "100%",
                    textAlign: "left",
                    color: "#F44336",
                    display: "block",
                    marginBottom: ".75em",
                    fontSize: "14px",
                  }}
                >
                  {errors.Password}
                </div>
              )}
              <Label htmlFor="ConfirmPassword" style={{ marginTop: "1.5rem" }}>
                Confirm Password
              </Label>
              <InputField
                type="password"
                id="ConfirmPassword"
                aria-label="ConfirmPassword"
                placeholder="Retype password"
                autoComplete="off"
                value={values.ConfirmPassword}
                onChange={(e) => {
                  handleChange(e);
                }}
                onBlur={handleBlur}
              />

              {errors.ConfirmPassword && touched.ConfirmPassword && (
                <div
                  style={{
                    width: "100%",
                    textAlign: "left",
                    color: "#F44336",
                    display: "block",
                    marginBottom: ".75em",
                    fontSize: "14px",
                  }}
                >
                  {errors.ConfirmPassword}
                </div>
              )}
              <SubmitButton type="submit" disabled={!(isValid && dirty)}>
                Reset Password
              </SubmitButton>
            </Form>
          )}
        </Formik>
      </Wrapper>
    </Container>
  );
};

export default NewPasswordScreen;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fafafa;
  width: 100vw;
  min-height: calc(100vh - 60px);
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > h2 {
    font-size: 30px;
    margin: 24px 0 0;
    color: #171717;
    font-weight: 800;
  }
  & > p {
    margin: 8px 0 0;
    font-size: 14px;
    color: #525252;
  }
`;

const InputField = styled.input`
  width: 100%;
  outline: none;
  border: 1px solid;
  border-color: #d4d4d4;
  border-radius: 0.5em;
  background-color: white;
  font-size: 14px;
  caret-color: #171717;
  font-family: "Inter";
  font-weight: 400;
  padding: 8px 12px;
  color: #757575;

  &:focus-within {
    border: 2px solid #2563eb;
  }
`;

const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 32px 0 0;
`;
const SubmitButton = styled.button`
  width: 100%;
  flex-grow: 1;
  background-color: #4f46e5;
  color: white;
  outline: none;
  border: none;
  border-radius: 0.5em;
  font-family: "Inter";
  font-size: 16px;
  margin-block: 1em;
  padding-block: 0.75em;
  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
  }
  &:hover {
    background-color: #4338ca;
  }
`;

const Label = styled.label`
  color: #757575;
  font-size: 14px;
  align-self: flex-start;
  display: block;
  margin-bottom: 0.5em;
`;
