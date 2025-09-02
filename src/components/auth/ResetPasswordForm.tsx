import { resetPasswordData } from "@/lib/types";
import { useFormik } from "formik";
import FormField from "../ui/FormField";
import { ArrowLeft, Check, Lock } from "lucide-react";
import { resetPasswordSchema } from "@/utils/AuthSchema";
import { Button } from "../ui/button";
import useResetPassword from "@/hooks/Auth/useResetPassword";
import { AxiosError } from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function ResetPasswordForm() {
  const {
    mutate: resetPassword,
    isPending,
    isError,
    error,
  } = useResetPassword();

  const [passFocused, setPassFocused] = useState(false);
  const [confirmPassFocused, setConfirmPassFocused] = useState(false);

  // Get email from localStorage
  const email = localStorage.getItem("email") || "";

  const formik = useFormik<resetPasswordData>({
    initialValues: {
      email: email,
      password: "",
      password_confirmation: "",
    },
    validationSchema: resetPasswordSchema,
    onSubmit: async (values) => {
      resetPassword(values);
    },
  });

  const showPasswordValidation = passFocused || formik.touched.password;
  const showConfirmValidation = confirmPassFocused || formik.touched.password_confirmation;
  
  const passLessThan8 = showPasswordValidation && formik.values.password.length < 8;
  const passNotMatch = showConfirmValidation && formik.values.password_confirmation !== formik.values.password;
  const passNotHaveNumber_Capital = showPasswordValidation && !/[0-9]/.test(formik.values.password) && !/[A-Z]/.test(formik.values.password);
  const passNotHaveSpecial = showPasswordValidation && !/[!@#$%^&*(),.?":{}|<>]/.test(formik.values.password);
  const passLenth8 = showPasswordValidation && formik.values.password.length >= 8;
  const passMatch = showConfirmValidation && formik.values.password_confirmation === formik.values.password && (formik.values.password.length >= 8);
  const passHaveNumberCapital = showPasswordValidation && /[0-9]/.test(formik.values.password) && /[A-Z]/.test(formik.values.password);
  const passHaveSpecial = showPasswordValidation && /[!@#$%^&*(),.?":{}|<>]/.test(formik.values.password);

  return (
    <div className="flex flex-col gap-6 p-6 lg:p-12 items-center justify-center w-full md:w-[50%]">
      <div className="flex flex-col gap-2">
        <Lock size={40} className="mb-5 text-gray-500 mx-auto" />
        <h1 className="text-3xl text-center">Reset Password</h1>
        <p className="text-sm text-gray-500 text-center">
          Your New Password Must be Different to Previously Used Password
        </p>
      </div>
      <form onSubmit={formik.handleSubmit} className="space-y-3 w-full">
        <FormField
          id="password"
          name="password"
          label="New Password"
          type="password"
          placeholder="Enter your new password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={(e) => {
            formik.handleBlur(e);
            setPassFocused(false);
          }}
          error={formik.errors.password}
          touched={formik.touched.password}
          className="bg-white pl-10 py-5"
          icon={
            <Lock
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={16}
            />
          }
          onFocus={() => setPassFocused(true)}
        />

        <FormField
          id="password_confirmation"
          name="password_confirmation"
          label="Confirm New Password"
          type="password"
          placeholder="Confirm your new password"
          value={formik.values.password_confirmation}
          onChange={formik.handleChange}
          onBlur={(e) => {
            formik.handleBlur(e);
            setConfirmPassFocused(false);
          }}
          error={formik.errors.password_confirmation}
          touched={formik.touched.password_confirmation}
          className="bg-white pl-10 py-5"
          icon={
            <Lock
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={16}
            />
          }
          onFocus={() => setConfirmPassFocused(true)}
        />

        {/* Show API error if any */}
        {isError && error && (
          <p className="text-red-500 text-sm text-center">
            {(error as AxiosError<{ message?: string }>)?.response?.data
              ?.message || "Failed to reset password"}
          </p>
        )}

        {/* Password Rules */}
        {!isError && !isPending && (
          <>
            <p className={`text-sm flex gap-2 ${passLessThan8 ? "text-red-500" : passLenth8 ? "text-green-500" : "text-gray-500"}`}>
              <Check
                className={`text-white p-1 rounded-full w-5 ${passLessThan8 ? "bg-red-500" : passLenth8 ? "bg-green-500" : "bg-gray-400"}`}
                size={19}
              />
              Make sure your password is at least 8 characters
            </p>
            <p className={`text-sm flex gap-2 ${passNotHaveSpecial ? "text-red-500" : passHaveSpecial ? "text-green-500" : "text-gray-500"}`}>
              <Check
                className={`text-white p-1 rounded-full w-5 ${passNotHaveSpecial ? "bg-red-500" : passHaveSpecial ? "bg-green-500" : "bg-gray-400"}`}
                size={19}
              />
              Must contain one special character
            </p>
            <p className={`text-sm flex gap-2 ${passNotHaveNumber_Capital ? "text-red-500" : passHaveNumberCapital ? "text-green-500" : "text-gray-500"}`}>
              <Check
                className={`text-white p-1 rounded-full w-5 ${passNotHaveNumber_Capital ? "bg-red-500" : passHaveNumberCapital ? "bg-green-500" : "bg-gray-400"}`}
                size={19}
              />
              Must contain one capital letter and one number
            </p>
            <p className={`text-sm flex gap-2 ${passNotMatch ? "text-red-500" : passMatch ? "text-green-500" : "text-gray-500"}`}>
              <Check
                className={`text-white p-1 rounded-full w-5 ${passNotMatch ? "bg-red-500" : passMatch ? "bg-green-500" : "bg-gray-400"}`}
                size={19}
              />
              Must Match
            </p>
          </>
        )}
        <div>
          <Button
            type="submit"
            className="w-full blue-button py-2 mt-4 hover:bg-[#153E75]"
            disabled={isPending}
          >
            {isPending ? "Resetting Password..." : "Reset Password"}
          </Button>
          <Link
            to={"/auth/Login"}
            className="flex gap-2 mt-4 text-gray-500 w-full justify-center"
          >
            <ArrowLeft />
            Back to Login
          </Link>
        </div>
      </form>
    </div>
  );
}
