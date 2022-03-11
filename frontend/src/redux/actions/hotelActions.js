import { HOTELS_DATA, SHOW_REVIEWS_MODAL } from "./types";

export const setHotelsData = (hotels_data) => (dispatch) => {
  dispatch({
    type: HOTELS_DATA,
    payload: hotels_data,
  });
};

export const setShowReviewsModal = (show_reviews_modal) => (dispatch) => {
  dispatch({
    type: SHOW_REVIEWS_MODAL,
    payload: show_reviews_modal,
  });
};
