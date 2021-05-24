import "./Review.css";

const Review = ({ review }) => {
  return (
    <div className="review_container">
      <div className="review_body">
        <div className="review_details">
          <img src={review.avatar} alt={review.name} />
          <div className="review_desc">
            <h4>Hellen Jummy</h4>
            <div>
              <img src={review.country} alt={review.place} />{" "}
              <span> {review.place}</span>
            </div>
          </div>
        </div>
        <div className="review_detail">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in
          donec in nisi vitae. Vestibulum pellentesque eget laoreet adipiscing.
        </div>
      </div>
    </div>
  );
};

export default Review;
