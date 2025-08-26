import CategoriesHome from "@/components/Home/CategoriesHome";
import IntroHome from "@/components/Home/IntroHome";
import TopBarHome from "@/components/Home/TopBarHome"
import RecommendedTours from "@/components/Home/RecommendedTours";
import TopRatedTours from "@/components/Home/TopRatedTours";

export default function HomePage(){
    return(
        <div className="flex flex-col mb-14">
            <TopBarHome />
            <IntroHome />
            <CategoriesHome />
            <RecommendedTours />
            <TopRatedTours />
        </div>
    )
}