/* Modules */
import React, { Component } from "react";
import { Modal as ModalAntd } from "antd";
import { connect } from "react-redux";

/* Styles */
import { ReviewsModalStyles } from "./ReviewsModal.styles";

/* Actions */
import { setShowReviewsModal } from "../../redux/actions/hotelActions";

class ReviewsModal extends Component {
  handleOk = () => {
    this.props.setShowReviewsModal(false);
  };

  handleCancel = () => {
    this.props.setShowReviewsModal(false);
  };

  render() {
    return (
      <ModalAntd
        visible={this.props.show_reviews_modal}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
        footer={false}
      >
        <ReviewsModalStyles>
          {this.props.hotel_reviews &&
            this.props.hotel_reviews.map((review) => {
              return (
                <div className="review_item">
                  <p className="review_title">{review.title}</p>
                  <p className="review_calification">
                    Calification: <b>{review.calification}/5</b>
                  </p>
                  <p className="review_text">{review.review}</p>
                </div>
              );
            })}
        </ReviewsModalStyles>
      </ModalAntd>
    );
  }
}

function mapStateToProps(state) {
  const { show_reviews_modal } = state.hotel_reducers;

  return {
    show_reviews_modal,
  };
}

ReviewsModal = connect(mapStateToProps, {
  setShowReviewsModal,
})(ReviewsModal);

export default ReviewsModal;
