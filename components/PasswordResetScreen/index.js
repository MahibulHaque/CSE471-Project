import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import { toast } from "react-toastify";
import styled from "styled-components";
import axios from "axios";
import { injectStyle } from "react-toastify/dist/inject-style";

if (typeof window !== "undefined") {
  injectStyle();
}
const PasswordResetScreen = () => {
  const validationSchema = Yup.object().shape({
    Email: Yup.string().email().required("Email is Required."),
  });
  return (
    <Container>
      <Wrapper>
        <h2>Reset Password</h2>
        <p>
          Enter your email and we'll send you a link to reset your password.
        </p>
        <Formik
          initialValues={{
            Email: "",
          }}
          validationSchema={validationSchema}
          onSubmit={async (values, actions) => {
            // same shape as initial values
            try {
              const res = await axios.post("/api/password_reset", {
                email: values.Email,
              });
              if (res) {
                toast.success(`${res.data}`, {
                  position: "bottom-right",
                  autoClose: 2000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                });
                console.log(res);
              }
            } catch (error) {
              console.log(error);
            }
            actions.setSubmitting(false);
            actions.resetForm({
              values: { Email: "" },
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
              <InputField
                type="email"
                id="Email"
                aria-label="Email"
                placeholder="Enter your email address"
                autoComplete="off"
                value={values.Email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.Email && touched.Email && (
                <div
                  style={{
                    width: "100%",
                    color: "#F44336",
                    display: "block",
                    marginTop: ".75em",
                    fontSize: "14px",
                    textAlign: "left",
                  }}
                >
                  {errors.Email}
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

export default PasswordResetScreen;

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
