import { forgetPasswordData } from "@/lib/types";
import { useFormik } from "formik";
import FormField from "../ui/FormField";
import { KeyIcon, Mail } from "lucide-react";
import { forgetPasswordSchema } from "@/utils/AuthSchema";
import { Button } from "../ui/button";
import useForget from "@/hooks/Auth/useForget";

export default function ForgetForm() {
  const { mutate: forget, isPending, error, isError } = useForget();
  const formik = useFormik<forgetPasswordData>({
    initialValues: {
      email: "",
    },
    validationSchema: forgetPasswordSchema,
    onSubmit: async (values) => {
      forget(values);
    },
  });
  return (
    <div className="flex flex-col gap-6 p-6 lg:p-12 items-center justify-center w-full md:w-[50%]">
      <div className="flex flex-col gap-2">
        <KeyIcon size={40} className="mb-5 text-gray-500 mx-auto " />
        <h1 className="text-3xl text-center">Forgot Password?</h1>
        <p className="text-sm text-gray-500 text-center">
          please enter your email to reset your password
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
        {isError && (
          <p className="text-red-500 text-sm">
            {error?.response?.data?.data?.email[0]}
          </p>
        )}
        <div>
          <Button
            type="submit"
            className="w-full blue-button py-2 mt-4 hover:bg-[#153E75]"
            disabled={isPending}
          >
            {isPending ? "Sending Email..." : "Reset Password"}
          </Button>
        </div>
      </form>
    </div>
  );
}
