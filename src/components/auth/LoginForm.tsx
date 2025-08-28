import { loginData } from "@/lib/types";
import { useFormik } from "formik";
import FormField from "../ui/FormField";
import { Lock, Mail } from "lucide-react";
import { loginSchema } from "@/utils/AuthSchema";
import { Button } from "../ui/button";
import useLogin from "@/hooks/Auth/useLogin";
import { Link } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

export default function LoginForm() {
  const { mutate: login, isPending } = useLogin();
  const formik = useFormik<loginData>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      login(values);
    },
  });
  return (
    <div className="flex flex-col gap-6 p-6 lg:p-12 items-center justify-center w-full md:w-[50%]">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl text-center">Welcome Again</h1>
        <p className="text-sm text-gray-500 text-center">
          welcome back! please fill your Data
        </p>
      </div>
      <form onSubmit={formik.handleSubmit} className="space-y-3 w-full">
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
          icon={
            <Mail
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={16}
            />
          }
        />
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
          icon={
            <Lock
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={16}
            />
          }
        />
        <Link
          to="/auth/forget-password"
          className="text-right w-full block mt-2 text-sm text-blue-500 hover:underline"
        >
          Forgot Password?
        </Link>
        <div>
          <Button
            type="submit"
            className="w-full blue-button py-2 mt-4 hover:bg-[#153E75]"
            disabled={isPending}
          >
            {isPending ? "Logging in..." : "Log In"}
          </Button>
        </div>
      </form>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          if (credentialResponse.credential) {
            const user = jwtDecode(credentialResponse.credential);
            console.log(user);
          } else {
            console.log("No credential received from Google.");
          }
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </div>
  );
}
