import SuccessAnimation from "@/assets/animations/Success.json";
import SuccessForm from "@/components/auth/SuccessForm";
import Lottie from "lottie-react";

export default function ResetSuccessPage() {
  return (
    <div className="flex gap-3 items-center">
      <Lottie
        animationData={SuccessAnimation}
        loop={true}
        style={{ width: "45%", height: "23rem" }}
        className="hidden md:flex"
      />
      <SuccessForm />
    </div>
  );
}
