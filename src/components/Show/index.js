import { Row, Col } from "react-bootstrap";
import RightArrow from "../../assests/RightArrow";
import ShowIcon from "../../assests/ShowIcon";
import "./Show.css";

const Show = ({ actor }) => {
  return (
    <div className="show_card">
      {/* <div className="bg_show_card" /> */}
      <img src={actor.avatar} alt={actor.name} className="actor_image" />
      <div className="info_content">
        <div className="show_badge">{actor.type}</div>
        <div className="actor_name">
          <h2>{actor.name}</h2>
        </div>
        <div className="info_body">
          <div className="more_info">
            More info {"   "} <RightArrow />
          </div>
          <div className="book">
            <span></span>
            <ShowIcon />
          </div>
        </div>
      </div>
      {/* <Row>
        <Col
          lg={12}
            style={{ backgroundImage: `url(${actor.avatar})` }}
            className="actor_image"
        >
          <img src={actor.avatar} alt={actor.name} className="actor_image" />
        </Col>
        <Col lg={12} className="card_info">
          <div className="info_content">
            <div className="show_badge">{actor.type}</div>
            <div className="show_name">
              <h2>{actor.name}</h2>
            </div>
            <div className="info_body">
              <div className="more_info">More info</div>
              <div className="book">
                <ShowIcon />
              </div>
            </div>
          </div>
        </Col>
      </Row> */}
    </div>
  );
};

export default Show;
