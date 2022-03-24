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
const Login = () => {
  const validationSchema = Yup.object().shape({
    Email: Yup.string().email().required("Email is Required."),
    Password: Yup.string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(/(?=.*[0-9])/, "Password must contain a number."),
  });

  return (
    <Container whiteForm={true}>
      <FormContainer whiteForm={true}>
        <FormHeader whiteForm={true}>Sign in to RobuEdX</FormHeader>
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
              .post("/api/auth/user/login", {
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
                Sign in
              </SubmitButton>
            </Form>
          )}
        </Formik>
        <FormLine whiteForm={true}>
          <span></span> Or continue with <span></span>
        </FormLine>
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
        <p>
          Don't have an account?
          {" "}
          <Link href="/register">
            <a style={{ color: "#4F46E5", cursor: "pointer",textDecoration:"none" }}>
              Create One
            </a>
          </Link>
        </p>
      </FormContainer>
    </Container>
  );
};

export default Login;
