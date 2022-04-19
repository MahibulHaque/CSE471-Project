import { signIn } from "next-auth/react";
import {
  ButtonContainer,
  Buttons,
  Container,
  FormContainer,
  FormHeader,
  FormLine,
  HomeExploreButton,
  HomeHeaderTag,
  HomeSubTag,
  InputField,
  Label,
  TextContainer,
  Form,
  SubmitButton,
  HeroImageHolder,
} from "./HomeScreenElements";
import { Formik } from "formik";
import * as Yup from "yup";
import { FaGithub, FaGoogle } from "react-icons/fa";
import axios from "axios";
import { useUserContext } from "../../Contexts/UserContext";
import Image from "next/image";

const HomeScreen = () => {
  const { user } = useUserContext();
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
        {user?.name ? (
          <HeroImageHolder>
            <Image src="/images/Avation.png" width={753} height={450} />
          </HeroImageHolder>
        ) : (
          <FormContainer>
            <FormHeader>Sign up with</FormHeader>
            <ButtonContainer>
              <Buttons
                style={{ marginRight: "1rem" }}
                onClick={() => signIn("google")}
              >
                <FaGoogle
                  style={{ fill: "#D4D4D4", width: "22px", height: "auto" }}
                />
              </Buttons>

              <Buttons onClick={() => signIn("github")}>
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
              onSubmit={(values, actions) => {
                // same shape as initial values
                axios
                  .post("/api/auth/user/register", {
                    Username: values.Username,
                    name: values.Name,
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
                  values: { Name: "", Username: "", Email: "", Password: "" },
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
                isValid,
                dirty,
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
                    value={values.Password}
                    onChange={(e) => {
                      handleChange(e);
                    }}
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
                  <SubmitButton type="submit" disabled={!(isValid && dirty)}>
                    Let's go!
                  </SubmitButton>
                </Form>
              )}
            </Formik>
          </FormContainer>
        )}
      </Container>
    </>
  );
};

export default HomeScreen;
