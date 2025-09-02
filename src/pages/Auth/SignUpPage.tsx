import SignUpForm from "@/components/auth/SignUpForm";
import RegisterAnimation from "@/assets/animations/register.json";
import Lottie from "lottie-react";

export default function SignUpPage() {
  return (
    <div className="flex gap-3 items-center">
      <div className="w-[50%] items-start hidden md:flex md:flex-col h-[500px]">
      <Lottie
        animationData={RegisterAnimation}
        loop={true}
        style={{ width: "100%", height: "23rem" ,marginTop: "0"}}
        className=""
        />
        </div>
      <SignUpForm />
    </div>
  );
}
