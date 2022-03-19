import Link from "next/link";
import { signIn } from "next-auth/react";
import {
  ButtonContainer,
  Buttons,
  Container,
  FormContainer,
  FormHeader,
  FormLine,
  GoogleButton,
  HomeExploreButton,
  HomeHeaderTag,
  HomeSubTag,
  InputField,
  Label,
  TextContainer,
  Form,
  SubmitButton,
} from "./HomeScreenElements";
import { ErrorMessage, Formik } from "formik";
import * as Yup from "yup";

import { FaGithub, FaGoogle } from "react-icons/fa";

const HomeScreen = () => {
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
    <>
      <Container>
        <TextContainer>
          <HomeHeaderTag>
            Learn Robotics <span>Interactively</span>
          </HomeHeaderTag>
          <HomeSubTag>
            Build projects, practice and learn to code from scratch - without
            leaving your browser.
          </HomeSubTag>
          <HomeExploreButton>Explore Our Roadmaps</HomeExploreButton>
        </TextContainer>
        <FormContainer>
          <FormHeader>Sign up with</FormHeader>
          <ButtonContainer>
            <Buttons style={{ marginRight: "1rem" }}onClick={()=>signIn('google')}>
              <FaGoogle
                style={{ fill: "#D4D4D4", width: "22px", height: "auto" }}
              />
            </Buttons>

            <Buttons onClick={()=>signIn("github")}>
              <FaGithub
                style={{ fill: "#D4D4D4", width: "22px", height: "auto" }}
              />
            </Buttons>
          </ButtonContainer>
          <FormLine>
            <span></span> Or continue with <span></span>
          </FormLine>

          <Formik
            initialValues={{
              Name: "",
              Username: "",
              Email: "",
              Password: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              // same shape as initial values
              console.log(values);
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
              <Form action="post" method="post" autoComplete="off">
                <Label htmlFor="Name">Name</Label>
                <InputField
                  type="text"
                  id="Name"
                  aria-label="Name"
                  placeholder="Enter your name"
                  autoComplete="off"
                  values={values.Name}
                  onChange={handleChange}
                  onBlur={handleBlur}
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
                  values={values.Username}
                  onChange={handleChange}
                  onBlur={handleBlur}
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
                  values={values.Email}
                  onChange={handleChange}
                  onBlur={handleBlur}
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
                  placeholder="Enter a new password"
                  autoComplete="off"
                  values={values.Password}
                  onChange={handleChange}
                  onBlur={handleBlur}
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
                <SubmitButton type="submit">Let's go!</SubmitButton>
              </Form>
            )}
          </Formik>
        </FormContainer>
      </Container>
    </>
  );
};

export default HomeScreen;
