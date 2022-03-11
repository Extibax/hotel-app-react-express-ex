/* eslint-disable import/no-anonymous-default-export */
import { HOTELS_DATA, SHOW_REVIEWS_MODAL } from "../actions/types";

const initialState = {
  hotels_data: "",
  show_reviews_modal: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case HOTELS_DATA:
      return {
        ...state,
        hotels_data: action.payload,
      };
    case SHOW_REVIEWS_MODAL:
      return {
        ...state,
        show_reviews_modal: action.payload,
      };

    default:
      return state;
  }
}
