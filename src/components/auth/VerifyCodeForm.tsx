import { verifyCodeData } from "@/lib/types";
import { useFormik } from "formik";
import { Shield } from "lucide-react";
import { verifyCodeSchema } from "@/utils/AuthSchema";
import { Button } from "../ui/button";
import useVerifyCode from "@/hooks/Auth/useVerifyCode";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "../ui/input-otp";
import { Link, useLocation } from "react-router-dom";
import useForget from "@/hooks/Auth/useForget";

export default function VerifyCodeForm() {
  const { mutate: verifyCode, isPending, isError, error } = useVerifyCode();
  const { mutate: resenCode, isPending: isResending } = useForget();
  const location = useLocation();
  const email = location.state?.email || "";
  function handelResend() {
    resenCode(email);
  }
  const formik = useFormik<verifyCodeData>({
    initialValues: {
      email: email,
      otp: "",
    },
    validationSchema: verifyCodeSchema,
    onSubmit: async (values) => {
      verifyCode(values);
    },
  });

  return (
    <div className="flex flex-col gap-6 p-6 lg:p-12 items-center justify-center w-full md:w-[50%]">
      <Shield size={40} className="text-gray-500 mx-auto" />
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-3xl text-center">Verify Code</h1>
        <p className="text-sm text-gray-500">
          Enter the verification code sent to your email
        </p>
        <Link to={`mailto:${email}`} className="text-sm font-bold">
          {email}
        </Link>
      </div>
      <form
        onSubmit={formik.handleSubmit}
        className="space-y-3 w-full text-center"
      >
        <div className="space-y-2 flex flex-col items-center justify-center">
          <label className="text-sm font-medium">Verification Code</label>
          <InputOTP
            value={formik.values.otp}
            onChange={(value) => formik.setFieldValue("otp", value)}
            maxLength={5}
            disabled={isPending}
          >
            <InputOTPGroup className="gap-2">
              <InputOTPSlot
                index={0}
                className="w-12 h-12 border border-blue-500"
              />
              <InputOTPSlot
                index={1}
                className="w-12 h-12 border border-blue-500"
              />
              <InputOTPSlot
                index={2}
                className="w-12 h-12 border border-blue-500"
              />
              <InputOTPSlot
                index={3}
                className="w-12 h-12 border border-blue-500"
              />
              <InputOTPSlot
                index={4}
                className="w-12 h-12 border border-blue-500"
              />
            </InputOTPGroup>
          </InputOTP>
          {formik.touched.otp && formik.errors.otp && (
            <p className="text-red-500 text-sm">{formik.errors.otp}</p>
          )}
          {isError && (
            <p className="text-red-500 text-sm">
              {error?.response?.data?.data?.otp[0]}
            </p>
          )}
        </div>
        <div className="flex justify-center gap-2 items-center">
          <p className="text-sm text-gray-500">Didn't receive the code? </p>
          <p
            onClick={handelResend}
            className="cursor-pointer hover:text-blue-500 hover:underline block text-sm text-blue-500"
          >
            Resend Code
          </p>
        </div>
        <div>
          <Button
            type="submit"
            className="w-full blue-button py-2 mt-4 hover:bg-[#153E75]"
            disabled={isPending || isResending}
          >
            {isPending ? "Verifying Code..." : !isResending && "Verify Code"}
            {isResending && "Resending Code..."}
          </Button>
        </div>
      </form>
    </div>
  );
}
