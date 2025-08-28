import LoginAnimation from "@/assets/animations/Login.json";
import VerifyCodeForm from "@/components/auth/VerifyCodeForm";
import Lottie from "lottie-react";

export default function VerifyCodePage() {
  return (
    <div className="flex gap-3 items-center">
      <Lottie
        animationData={LoginAnimation}
        loop={true}
        style={{ width: "45%", height: "23rem" }}
        className="hidden md:flex"
      />

      {/* <div
        className="hidden md:flex w-[45%] h-[572px] bg-contain bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${loginImg})` }}
      /> */}
      <VerifyCodeForm />
    </div>
  );
}
