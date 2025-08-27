import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
export default function WelcomeForm() {
  return (
    <div className="flex flex-col gap-6 p-6 lg:p-12 justify-center mt-20 md:mt-0 w-full md:w-[50%]">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl text-center">Welcome</h1>
      <p className="text-sm text-gray-500 text-center">
        Safarni is your all-in-one travel guide. Discover destinations, compare
        trip prices, book flights, hotels, car rentals, and local tours — all
        through one interactive experience.
      </p>
      </div>
      
      <div className="flex flex-col space-y-4">
        <Button
          className="blue-button hover:bg-[#153E75] "
        >
          <Link to="/auth/signup" className="w-full">
            Sign Up
          </Link>
        </Button>
        <Button
          className="white-button hover:bg-gray-100"
        >
          <Link to="/auth/login" className="w-full">
            Log In
          </Link>
        </Button>
      </div>
    </div>
  );
}
