import Gutter from "../Gutter";
import UpcomingShows from "../UpcomingShows";
import Reviews from "../Reviews";
import "./MainContainer.css";

const MainContainer = () => {
  return (
    <div className="main_container">
      <UpcomingShows />
      <Reviews />
    </div>
  );
};

export default MainContainer;
