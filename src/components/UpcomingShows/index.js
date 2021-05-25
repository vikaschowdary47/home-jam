import { Row, Col } from "react-bootstrap";
import Gutter from "../Gutter";
import benny from "../../assests/actors/benny.png";
import vijay from "../../assests/actors/vijay.png";
import andrea from "../../assests/actors/andrea.png";
import shilpa from "../../assests/actors/shilpa.png";
import Show from "../Show";
import "./UpcomingShow.css";

const celebrities = [
  { id: 1, name: "Benny Dayal", type: "Folk", avatar: benny },
  { id: 2, name: "Vijay Yesudas", type: "Bollywood", avatar: vijay },
  { id: 3, name: "Andrea Jeremiah", type: "Folk", avatar: andrea },
  { id: 4, name: "Shilpa Rao", type: "Folk", avatar: shilpa },
];

const UpcomingShows = () => {
  return (
    <div className="mb-5 pb-5">
      <Gutter>
        <Row>
          <Col lg={12}>
            <div className="show_header">
              <h2>Upcoming Shows</h2>
              <span>View All</span>
            </div>
          </Col>
        </Row>
        <div className="carousel_container">
          {celebrities.map((celebrity) => (
            // <Col lg={3}>
            <Show actor={celebrity} key={celebrity.id} />
            // </Col>
          ))}
        </div>
      </Gutter>
    </div>
  );
};

export default UpcomingShows;
