/* Modules */
import React, { Component } from "react";
import { Button, Carousel } from "antd";
import { connect } from "react-redux";

/* Icons */
import { StarTwoTone } from "@ant-design/icons";

/* Styles */
import { HotelCardStyles } from "./HotelCard.styles";

/* Components */
import ReviewsModal from "../ReviewsModal/ReviewsModal";

/* Actions */
import { setShowReviewsModal } from "../../redux/actions/hotelActions";

class HotelCard extends Component {
  constructor(props) {
    super(props);

    this.onClickModalButton = this.onClickModalButton.bind(this);
  }

  componentDidMount() {
    console.log(this.props);
  }

  onClickModalButton() {
    this.props.setShowReviewsModal(true);
  }

  render() {
    const {
      hotel_name,
      hotel_location,
      hotel_desc,
      hotel_category,
      hotel_price,
      hotel_reviews,
      hotel_photos,
    } = this.props;

    return (
      <HotelCardStyles>
        <div className="hotel_card">
          <Carousel autoplay dotPosition={"right"}>
            {hotel_photos &&
              hotel_photos.map((photo) => (
                <div>
                  <img className="hotel_img" src={photo} alt="" />
                </div>
              ))}
          </Carousel>
          <div className="hotel_info">
            <div className="upper_hotel_card">
              <p className="hotel_location">{hotel_location}</p>
              <Button
                className="modal_button"
                type="primary"
                shape="round"
                size={"small"}
                onClick={this.onClickModalButton}
              >
                Reviews
              </Button>
            </div>
            <h3 className="hotel_name">{hotel_name}</h3>
            <p className="hotel_text_split">____</p>
            <div className="hotel_desc">{hotel_desc}</div>
            <div className="hotel_category_price">
              <div className="hotel_category">
                <StarTwoTone className="star_icon" /> {hotel_category}
              </div>
              <div className="hotel_price">${hotel_price} / night</div>
            </div>
          </div>
        </div>
        <ReviewsModal hotel_reviews={hotel_reviews} />
      </HotelCardStyles>
    );
  }
}

function mapStateToProps(state) {
  const { show_reviews_modal } = state.hotel_reducers;

  return {
    show_reviews_modal,
  };
}

HotelCard = connect(mapStateToProps, {
  setShowReviewsModal,
})(HotelCard);

export default HotelCard;
