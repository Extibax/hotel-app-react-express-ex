/* Modules */
import React, { Component } from "react";
import { connect } from "react-redux";

/* Components */
import Header from "../../components/Header/Header";
import Body from "../../components/Body/Body";

/* Styles */
import { MainStyles } from "./Main.styles";

/* Actions */
import { setShowReviewsModal } from "../../redux/actions/hotelActions";

class Main extends Component {
  state = {};

  componentDidMount() {
    this.props.setShowReviewsModal(false);
  }

  render() {
    return (
      <MainStyles>
        <Header />
        <Body />
      </MainStyles>
    );
  }
}

function mapStateToProps(state) {
  const { show_reviews_modal } = state.hotel_reducers;

  return { show_reviews_modal };
}

Main = connect(mapStateToProps, {
  setShowReviewsModal,
})(Main);

export default Main;
