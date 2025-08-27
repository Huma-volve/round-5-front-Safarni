import SignUpForm from "@/components/auth/SignUpForm";
import signupImg from "@/assets/images/signup-img.png";

export default function SignUpPage() {
  return (
    <div className="flex gap-3 items-center">
      <div
        className="hidden md:flex w-[45%] h-[572px] bg-contain bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${signupImg})` }}
      />
      <SignUpForm />
    </div>
  );
}
