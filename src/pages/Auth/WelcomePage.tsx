import WelcomeForm from "@/components/auth/WelcomeForm";
import Lottie from "lottie-react";
import TravelAnimation from "@/assets/animations/Traveling_Girl.json";

export default function WelcomePage() {
  return (
    <div className="flex gap-3 items-center">
      <Lottie
        animationData={TravelAnimation}
        loop={true}
        style={{ width: "45%", height: "23rem" }}
        className="hidden md:flex"
      />
      <WelcomeForm />
    </div>
  );
}
