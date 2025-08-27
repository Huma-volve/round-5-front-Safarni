import * as yup from "yup";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const loginSchema = yup.object({
  email: yup
    .string()
    .matches(emailRegex, "Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .matches(
      passwordRegex,
      "Password must be at least 8 chars, include uppercase, lowercase, number, and special char"
    )
    .required("Password is required"),
});
export const signUpSchema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .matches(emailRegex, "Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .matches(
      passwordRegex,
      "Password must be at least 8 chars, include uppercase, lowercase, number, and special char"
    )
    .required("Password is required"),
  password_confirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

export const forgetPasswordSchema = yup.object({
  email: yup
    .string()
    .matches(emailRegex, "Enter a valid email")
    .required("Email is required"),
});

export const resetPasswordSchema = yup.object({
  password: yup
    .string()
    .matches(
      passwordRegex,
      "Password must be at least 8 chars, include uppercase, lowercase, number, and special char"
    )
    .required("Password is required"),
  password_confirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

export const verifyCodeSchema = yup.object({
  otp: yup
    .string()
    .length(5, "Code must be exactly 5 characters")
    .required("Code is required"),
});