import EmailAnimation from "@/assets/animations/Sent_Mail.json";
import ForgetForm from "@/components/auth/ForgetForm";
import Lottie from "lottie-react";

export default function ForgetPassPage() {
  return (
    <div className="flex gap-3 items-center">
      <Lottie
        animationData={EmailAnimation}
        loop={true}
        style={{ width: "45%", height: "23rem" }}
        className="hidden md:flex"
      />
      <ForgetForm />
    </div>
  );
}
