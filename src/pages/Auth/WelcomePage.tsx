import welcomeImg from "@/assets/images/welcome-img.png";
import WelcomeForm from "@/components/auth/WelcomeForm";

export default function WelcomePage() {
  return (
    <div className="flex gap-3 items-center">
      <div
        className="hidden md:flex w-[45%] h-[572px] bg-contain bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${welcomeImg})` }}
      />
      <WelcomeForm />
    </div>
  );
}
