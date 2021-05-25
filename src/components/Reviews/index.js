import { Row, Col } from "react-bootstrap";
import Gutter from "../Gutter";
import hellen from "../../assests/reviews/hellen.png";
import jummy from "../../assests/reviews/jummy.png";
import palo from "../../assests/reviews/palo.png";
import us from "../../assests/reviews/us.png";
import ir from "../../assests/reviews/ir.png";
import Review from "../Review";
import RightArrow from "../../assests/RightArrow";
import "./Reviews.css";

const reviews = [
  {
    id: 1,
    name: "Hellen Jummy",
    place: "Palo Alto, CA",
    avatar: palo,
    country: us,
  },
  {
    id: 2,
    name: "Isaac Oluwatemilorun",
    place: "Palo Alto, CA",
    avatar: jummy,
    country: ir,
  },
  {
    id: 3,
    name: "Hellen Jummy",
    place: "Palo Alto, CA",
    avatar: hellen,
    country: us,
  },
];

const Reviews = () => {
  return (
    <div className="mb-5 pb-5">
      <Gutter>
        <Row>
          <Col lg={12}>
            <div className="show_header">
              <h2>Reviews</h2>
              <div className="reviews_count">
                <p>
                  1<span>/12</span>
                </p>
                <div className="left-icon">
                  <RightArrow white />
                </div>
                <RightArrow white />
              </div>
            </div>
          </Col>
        </Row>
        <div className="carousel_container">
          {/* <Row> */}
          {reviews.map((review) => (
            <div className="review_contain">
              <Review review={review} key={review.id} />
            </div>
          ))}
          {/* </Row> */}
        </div>
      </Gutter>
    </div>
  );
};

export default Reviews;
