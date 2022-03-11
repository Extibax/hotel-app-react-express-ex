/* Modules */
import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

/* Reducers */
import hotelReducers from "./hotelReducers";

export default combineReducers({
  hotel_reducers: hotelReducers,
  form: formReducer,
});
