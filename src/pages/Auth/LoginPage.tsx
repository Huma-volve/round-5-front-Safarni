import LoginAnimation from "@/assets/animations/Login.json";
import LoginForm from "@/components/auth/LoginForm";
import Lottie from "lottie-react";

export default function LoginPage() {
  return (
    <div className="flex gap-3 items-center">
      <Lottie
        animationData={LoginAnimation}
        loop={true}
        style={{ width: "45%" }}
        className="hidden md:flex"
      />
      <LoginForm />
    </div>
  );
}
