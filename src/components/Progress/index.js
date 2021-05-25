import Calender from "../../assests/Calender";
import Heart from "../../assests/Heart";
import "./Progress.css";

const Progress = () => {
  return (
    <div className="progress_body">
      <div className="carousel_container">
        <div progress_circle_body>
          <div className="progress_circle">
            <Heart />0<span>Likes </span>
          </div>
        </div>
        <div progress_circle_body>
          <div className="progress_circle">
            <Calender />0<span>Online Events</span>
          </div>
        </div>
        <div progress_circle_body>
          <div className="progress_circle">
            <Calender />0<span>Label</span>
          </div>
        </div>
        <div progress_circle_body>
          <div className="progress_circle">
            <Calender />0<span>Label</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progress;
