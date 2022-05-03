import { Formik } from "formik";
import * as Yup from "yup";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { injectStyle } from "react-toastify/dist/inject-style";
import { FaCheck } from "react-icons/fa";
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
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import { toast, ToastContainer } from "react-toastify";
import { useState } from "react";

if (typeof window !== "undefined") {
  injectStyle();
}

const Login = () => {
  const notify = async (message) => {};
  const validationSchema = Yup.object().shape({
    Email: Yup.string().email().required("Email is Required."),
    Password: Yup.string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 chars minimum.")
      .matches(/(?=.*[0-9])/, "Password must contain a number."),
  });

  const router = useRouter();
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div>
      <Wrapper>
        <FormHeader whiteForm={true}>
          Sign in to <span>OpenRobotics</span>
        </FormHeader>
        <FormContainer whiteForm={true}>
          <Formik
            initialValues={{
              Name: "",
              Username: "",
              Email: "",
              Password: "",
            }}
            validationSchema={validationSchema}
            onSubmit={async (values, actions) => {
              // same shape as initial values
              try {
                const res = await axios.post("/api/auth/user/login", {
                  Email: values.Email,
                  password: values.Password,
                });
                console.log(res);
                if (res.status === 202) {
                  toast.success(`${res.data.message}`, {
                    position: "bottom-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    onClose: function () {
                      console.log("yes");
                      router.push("/dashboard");
                    },
                  });
                } else if (res.status === 200) {
                  toast.error(`${res.data.message}`, {
                    position: "bottom-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                  });
                }
              } catch (error) {
                console.log(error);
              }

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
                <ForgotPasswordWrapper>
                  <RememberMeWrapper>
                    <input
                      type="checkbox"
                      name="Remember"
                      id="Remember"
                      onClick={() => {
                        setRememberMe((prev) => !prev);
                      }}
                    />
                    <label htmlFor="Remeber">Remember me</label>
                  </RememberMeWrapper>
                  <Link href="/password-reset">
                    <a>Forgot your password?</a>
                  </Link>
                </ForgotPasswordWrapper>
                <SubmitButton
                  type="submit"
                  disabled={isSubmitting}
                  id="animate.css"
                >
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
              onClick={() =>
                signIn("google", {
                  callbackUrl: "http://localhost:3000/dashboard",
                  redirect: false,
                })
              }
            >
              <FaGoogle
                style={{ fill: "#757575", width: "22px", height: "auto" }}
              />
            </Buttons>

            <Buttons
              onClick={() =>
                signIn("github", {
                  callbackUrl: "http://localhost:3000/dashboard",
                  redirect: false,
                })
              }
              whiteForm={true}
            >
              <FaGithub
                style={{ fill: "#757575", width: "22px", height: "auto" }}
              />
            </Buttons>
          </ButtonContainer>
          <p style={{ marginBottom: "2rem" }}>
            Don't have an account?{" "}
            <Link href="/register">
              <a
                style={{
                  color: "#4F46E5",
                  cursor: "pointer",
                  textDecoration: "none",
                }}
              >
                Create One
              </a>
            </Link>
          </p>
        </FormContainer>
      </Wrapper>
    </div>
  );
};
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fafafa;
  padding-bottom: 7rem;
`;
const ForgotPasswordWrapper = styled.div`
  margin-top: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-size: 16px;

  & > a {
    text-align:right;
    color: #4f46e5;
    cursor: pointer;
    text-decoration: none;
  }
`;

const RememberMeWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  & > input[type="checkbox"] {
    cursor: pointer;
    border: 1px solid #737373;
    color: white;
    border-radius: 4px;
    width: 16px;
    height: 16px;
    display: inline-block;
    vertical-align: middle;
    background-origin: border-box;
    appearance: none;
    padding: 0;
    -webkit-print-color-adjust: exact;
  }
  & > input[type="checkbox"]:checked {
    background-color: #4f46e5;
    background-image: url("images/check.svg");
  }

  & > label {
    color: #171717;
  }
`;
export default Login;
