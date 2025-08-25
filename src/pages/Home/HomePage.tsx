import CategoriesHome from "@/components/Home/CategoriesHome";
import IntroHome from "@/components/Home/IntroHome";

export default function HomePage(){
    return(
        <div className="flex flex-col">
            <IntroHome />
            <CategoriesHome />
        </div>
    )
}