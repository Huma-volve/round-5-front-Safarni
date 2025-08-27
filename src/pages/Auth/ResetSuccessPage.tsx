import successImg from "@/assets/images/success-img.png";
import SuccessForm from "@/components/auth/SuccessForm";

export default function ResetSuccessPage() {
  return (
    <div className="flex gap-3 items-center">
      <div
        className="hidden md:flex w-[45%] h-[572px] bg-contain bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${successImg})` }}
      />
      <SuccessForm />
    </div>
  );
}
