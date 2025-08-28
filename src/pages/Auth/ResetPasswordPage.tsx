import LoginAnimation from "@/assets/animations/Login.json";
import ResetPasswordForm from "@/components/auth/ResetPasswordForm";
import Lottie from "lottie-react";

export default function ResetPasswordPage() {
  return (
    <div className="flex gap-3 items-center">
      <Lottie
        animationData={LoginAnimation}
        loop={true}
        style={{ width: "45%" }}
      />
      <ResetPasswordForm />
    </div>
  );
}
