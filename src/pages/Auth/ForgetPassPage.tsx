import forgetImg from "@/assets/images/forget-img.png";
import ForgetForm from "@/components/auth/ForgetForm";

export default function ForgetPassPage() {
  return (
        <div className="flex gap-3 items-center">
      <div
        className="hidden md:flex w-[45%] h-[572px] bg-contain bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${forgetImg})` }}
      />
      <ForgetForm />
    </div>
  )
}
