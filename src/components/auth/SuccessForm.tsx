import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
export default function SuccessForm() {
  return (
    <div className="flex flex-col gap-6 p-6 lg:p-12 justify-center mt-20 md:mt-0 w-full md:w-[50%]">
      <div className="flex flex-col gap-2">
        <Check
          size={40}
          className="text-white bg-[#31C48D] rounded-full p-2 mx-auto mb-5"
        />
      <h1 className="text-3xl text-center">Password Reset Successfully</h1>
      <p className="text-sm text-gray-500 w-[80%] mx-auto text-center">
        your password has been successfully reset click below to log in
        magically.
      </p>
      </div>
      <div className="flex flex-col space-y-4">
        <Button className="blue-button hover:bg-[#153E75] ">
          <Link to="/auth/login" className="w-full">
            Log In
          </Link>
        </Button>
      </div>
    </div>
  );
}
