import loginImg from '@/assets/images/signin-img.png';
import LoginForm from '@/components/auth/LoginForm';

export default function LoginPage() {
  return (
    <div className="flex gap-3 items-center">
      <div
        className="hidden md:flex w-[45%] h-[572px] bg-contain bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${loginImg})` }}
      />
      <LoginForm />
    </div>
  )
}
