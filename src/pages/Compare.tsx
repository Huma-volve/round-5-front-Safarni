import Card from "@/components/compare/Card"
import CompareCard from "@/components/compare/CompareCard"
import SearchPage from "./SearchPages/SearchPage"


function Compare() {
  return (
    <div className="container m-auto">
      <SearchPage />
      <Card/>
      <CompareCard/>
    </div>
  )
}

export default Compare
