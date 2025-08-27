import resetImg from '@/assets/images/forget-img.png';
import ResetPasswordForm from "@/components/auth/ResetPasswordForm";

export default function ResetPasswordPage() {
  return (
    <div className="flex gap-3 items-center">
      <div
        className="hidden md:flex w-[45%] h-[572px] bg-contain bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${resetImg})` }}
      />
      <ResetPasswordForm />
    </div>
  );
}


