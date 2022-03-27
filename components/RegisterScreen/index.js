import { Formik } from "formik";
import * as Yup from "yup";
import { FaGoogle, FaGithub } from "react-icons/fa";
import {
  Form,
  Label,
  FormContainer,
  InputField,
  SubmitButton,
  Container,
  FormHeader,
  FormLine,
  ButtonContainer,
  Buttons,
} from "../HomeScreen/HomeScreenElements";
import Link from "next/link";
import styled from "styled-components";
import axios from "axios";
import { signIn } from "next-auth/react";
const Register = () => {
  const validationSchema = Yup.object().shape({
    Name: Yup.string()
      .required("Name is Required.")
      .min(3, "Name is Too Short."),
    Username: Yup.string()
      .required("Username is Required.")
      .min(3, "Username is Too Short.")
      .matches(/^[a-zA-Z0-9]*$/, "Username should only contain alphanumeric."),
    Email: Yup.string().email().required("Email is Required."),
    Password: Yup.string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(/(?=.*[0-9])/, "Password must contain a number."),
  });

  return (
    <Wrapper>
      <FormHeader whiteForm={true}>
        Create a <span style={{}}>Free Account</span>
      </FormHeader>
      <p
        style={{
          maxWidth: "450px",
          textAlign: "center",
          fontSize: "14px",
          color: "#757575",
          marginBottom:"2rem",
        }}
      >
        Hands-on practice modules, learning paths for industry skills, projects,
        community, and more.
      </p>
      <FormContainer whiteForm={true}>
        <ButtonContainer>
          <Buttons
            whiteForm={true}
            style={{ marginRight: "1rem" }}
            onClick={() => signIn("google")}
          >
            <FaGoogle
              style={{ fill: "#757575", width: "22px", height: "auto" }}
            />
          </Buttons>

          <Buttons onClick={() => signIn("github")} whiteForm={true}>
            <FaGithub
              style={{ fill: "#757575", width: "22px", height: "auto" }}
            />
          </Buttons>
        </ButtonContainer>
        <FormLine whiteForm={true}>
        <span></span> Or use email to signup <span></span>
      </FormLine>
        <Formik
          initialValues={{
            Name: "",
            Username: "",
            Email: "",
            Password: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values, actions) => {
            // same shape as initial values
            axios
              .post("/api/auth/user/register", {
                name: values.Name,
                Username: values.Username,
                Email: values.Email,
                password: values.Password,
              })
              .then((res) => {
                console.log(res);
              })
              .catch((err) => {
                console.log(err);
              });
            actions.setSubmitting(false);
            actions.resetForm({
              values: { Email: "", Password: "" },
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
            isSubmitting,
          }) => (
            <Form autoComplete="off" onSubmit={handleSubmit}>
              <Label htmlFor="Name">Name</Label>
              <InputField
                type="text"
                id="Name"
                aria-label="Name"
                placeholder="Enter your name"
                autoComplete="off"
                value={values.Name}
                onChange={handleChange}
                onBlur={handleBlur}
                whiteForm={true}
              />
              {errors.Name && touched.Name && (
                <div
                  style={{
                    color: "#F44336",
                    display: "block",
                    marginBottom: ".75em",
                    fontSize: "14px",
                  }}
                >
                  {errors.Name}
                </div>
              )}
              <Label htmlFor="Username">Username</Label>
              <InputField
                type="text"
                id="Username"
                aria-label="Username"
                placeholder="Only alphanumeric allowed [a-z, A-Z, 0-9]"
                autoComplete="off"
                value={values.Username}
                onChange={handleChange}
                onBlur={handleBlur}
                whiteForm={true}
              />
              {errors.Username && touched.Username && (
                <div
                  style={{
                    color: "#F44336",
                    display: "block",
                    marginBottom: ".75em",
                    fontSize: "14px",
                  }}
                >
                  {errors.Username}
                </div>
              )}
              <Label htmlFor="Email">Email Address</Label>
              <InputField
                type="email"
                id="Email"
                aria-label="Email"
                placeholder="Enter your email address"
                autoComplete="off"
                value={values.Email}
                onChange={handleChange}
                onBlur={handleBlur}
                whiteForm={true}
              />
              {errors.Email && touched.Email && (
                <div
                  style={{
                    color: "#F44336",
                    display: "block",
                    marginBottom: ".75em",
                    fontSize: "14px",
                  }}
                >
                  {errors.Email}
                </div>
              )}
              <Label htmlFor="Password">Password</Label>
              <InputField
                type="password"
                id="Password"
                aria-label="Password"
                placeholder="Enter your password"
                autoComplete="off"
                value={values.Password}
                onChange={(e) => {
                  handleChange(e);
                }}
                onBlur={handleBlur}
                whiteForm={true}
              />

              {errors.Password && touched.Password && (
                <div
                  style={{
                    color: "#F44336",
                    display: "block",
                    marginBottom: ".75em",
                    fontSize: "14px",
                  }}
                >
                  {errors.Password}
                </div>
              )}
              <SubmitButton type="submit" disabled={isSubmitting}>
                Submit Details
              </SubmitButton>
            </Form>
          )}
        </Formik>
        <p style={{ fontSize: "14px" }}>
          Click submit details to proceed and{" "}
          <span style={{ fontWeight: "bold" }}>verify your email</span>
        </p>
      </FormContainer>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color:#FAFAFA;
`;
export default Register;
