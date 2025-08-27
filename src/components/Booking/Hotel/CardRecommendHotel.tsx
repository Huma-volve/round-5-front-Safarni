import { Link } from "react-router-dom";
import ImgHotel from "@/assets/images/ImgHotel.png";
import ImgStar from "@/assets/images/icons/ImgStar.svg";
import ImgLocation from "@/assets/images/icons/Location.svg";
function CardRecommendHotel() {
  return (
    <div>
      <div>
        <p>Recommendation</p>
        <Link to="">View all</Link>
      </div>
      <div>
        <img src={ImgHotel} alt="Hotel" />
        <div>
          <p>10%Off</p>
          <img src={ImgStar} alt="ImgStar" />
        </div>
        <h3>Oasis Overture</h3>
        <div>
          <img src={ImgLocation} alt="Location" /> <p>New York,USA</p>
        </div>
      </div>
    </div>
  );
}

export default CardRecommendHotel;
