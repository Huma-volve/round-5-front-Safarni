import { signUpData } from "@/lib/types";
import { useFormik } from "formik";
import FormField from "../ui/FormField";
import { Check, Lock, Mail, User } from "lucide-react";
import { signUpSchema } from "@/utils/AuthSchema";
import { Button } from "../ui/button";
import useSignUp from "@/hooks/Auth/useSignUp";
import { AxiosError } from "axios";

// عرف الـ type بتاع الخطأ
type ApiErrorResponse = {
  message: string;
  data?: {
    name?: string[];
    email?: string[];
    password?: string[];
    password_confirmation?: string[];
  };
};

export default function SignUpForm() {
  const { mutate: signUp, isError, error, isPending } = useSignUp();
  const formik = useFormik<signUpData>({
    initialValues: {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
    },
    validationSchema: signUpSchema,
    onSubmit: async (values) => {
      signUp(values);
    },
  });

  // خلي TypeScript يفهم نوع الـ error
  const apiError = error as AxiosError<ApiErrorResponse>;

  return (
    <div className="flex flex-col gap-6 p-6 lg:p-12 items-center justify-center w-full md:w-[50%]">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl text-center">Welcome Again</h1>
        <p className="text-sm text-gray-500 text-center">welcome back! please fill your Data</p>
      </div>
      <form onSubmit={formik.handleSubmit} className="space-y-3 w-full">
        {/* Name */}
        <FormField
          id="name"
          name="name"
          label="Name"
          placeholder={"John Doe"}
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.name}
          touched={formik.touched.name}
          className="bg-white pl-10 py-5"
          icon={<User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />}
        />
        {isError &&
          apiError?.response?.data?.data?.name?.map((nameError) => (
            <p key={nameError} className="text-sm text-red-500">{nameError}</p>
          ))}

        {/* Email */}
        <FormField
          id="email"
          name="email"
          label="Email"
          placeholder={"example@example.com"}
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.email}
          touched={formik.touched.email}
          className="bg-white pl-10 py-5"
          icon={<Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />}
        />
        {isError &&
          apiError?.response?.data?.data?.email?.map((emailError) => (
            <p key={emailError} className="text-sm text-red-500">{emailError}</p>
          ))}

        {/* Password */}
        <FormField
          id="password"
          name="password"
          label="Password"
          type="password"
          placeholder={"*************"}
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.password}
          touched={formik.touched.password}
          className="bg-white pl-10 py-5"
          icon={<Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />}
        />
        {isError &&
          apiError?.response?.data?.data?.password?.map((passwordError) => (
            <p key={passwordError} className="text-sm text-red-500">{passwordError}</p>
          ))}

        {/* Confirm Password */}
        <FormField
          id="password_confirmation"
          name="password_confirmation"
          label="Confirm Password"
          type="password"
          placeholder={"*************"}
          value={formik.values.password_confirmation}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.password_confirmation}
          touched={formik.touched.password_confirmation}
          className="bg-white pl-10 py-5"
          icon={<Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />}
        />
        {isError &&
          apiError?.response?.data?.data?.password_confirmation?.map((confirmationError) => (
            <p key={confirmationError} className="text-sm text-red-500">{confirmationError}</p>
          ))}

        {/* Password Rules */}
        {!isError && !isPending && (
          <>
            <p className="text-sm text-gray-500 flex gap-2">
              <Check className="text-white p-1 rounded-full bg-gray-400 w-5" size={19} />
              Make sure your password is at least 8 characters
            </p>
            <p className="text-sm text-gray-500 flex gap-2">
              <Check className="text-white p-1 rounded-full bg-gray-400 w-5" size={19} />
              Must contain one special character
            </p>
            <p className="text-sm text-gray-500 flex gap-2">
              <Check className="text-white p-1 rounded-full bg-gray-400 w-5" size={19} />
              Must contain one capital letter and one number
            </p>
          </>
        )}

        {/* Submit Button */}
        <div>
          <Button type="submit" className="w-full blue-button py-2 mt-4" disabled={isPending}>
            {isPending ? "Signing up..." : "Sign Up"}
          </Button>
        </div>
      </form>
    </div>
  );
}
