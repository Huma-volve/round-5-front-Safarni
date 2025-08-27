import { Button } from "@/components/ui/button";
import notfound from "@/assets/images/lost-notfound.svg";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-foreground px-4 sm:px-6">
      <div className="flex flex-col items-center text-center max-w-lg w-full">
        {/* Image */}
        <img
          src={notfound}
          alt="not found page"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-[500px] mb-6"
        />

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary mb-3">
          Oops! Page Not Found
        </h1>

        {/* Description */}
        <p className="text-sm sm:text-base text-gray-500 mb-8 px-2 sm:px-0">
          We couldn’t find the page you’re looking for. <br className="hidden sm:block" />
          Maybe start exploring new destinations instead?
        </p>

        {/* Actions */}
        <div className="w-full sm:w-auto">
          <Link to="/" className="w-full sm:w-auto">
            <Button className="blue-button blue-button-hover w-full sm:w-auto">
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
