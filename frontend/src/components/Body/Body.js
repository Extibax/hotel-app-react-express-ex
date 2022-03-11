/* Modules */
import React, { Component, Fragment } from "react";
import { Button } from "antd";
import axios from "axios";
import { connect } from "react-redux";

/* Styles */
import { BodyStyles } from "./Body.styles";

/* Components */
import HotelCard from "../HotelCard/HotelCard";

/* Actions */
import { setHotelsData } from "../../redux/actions/hotelActions";

class Body extends Component {
  constructor(props) {
    super(props);
    this.getHotelsBy = this.getHotelsBy.bind(this);
  }

  state = {
    hotels_data_state: this.props.hotels_data,
  };

  componentDidUpdate(prevProps) {
    if (prevProps.hotels_data !== this.props.hotels_data) {
      this.setState({ hotels_data_state: this.props.hotels_data });
    }
  }

  async componentDidMount() {
    console.log("hotels_data:", this.props.hotels_data);

    const hotels_data_respose_raw = await axios.get(
      "http://localhost:3001/api/hotel/get-hotels"
    );

    if (hotels_data_respose_raw) {
      const hotels_data_respose = hotels_data_respose_raw.data;

      console.log("data_hotels:", hotels_data_respose);

      this.props.setHotelsData(hotels_data_respose);
      this.setState({
        hotels_data_state: hotels_data_respose,
      });
    }
  }

  async getHotelsBy(hotels_sort_by) {
    console.log("hotels_data:", this.props.hotels_data);

    let sort_by = "";

    switch (hotels_sort_by) {
      case "category_mayor_to_minor":
        sort_by = "by_category_major";
        break;
      case "category_minor_to_mayor":
        sort_by = "by_category_minor";
        break;
      case "price_mayor_to_minor":
        sort_by = "by_price_major";
        break;
      case "price_minor_to_mayor":
        sort_by = "by_price_minor";
        break;

      default:
        sort_by = "by_category_major";
        break;
    }

    const hotels_data_respose_raw = await axios.get(
      `http://localhost:3001/api/hotel/get-hotels/${sort_by}`
    );

    if (hotels_data_respose_raw) {
      const hotels_data_respose = hotels_data_respose_raw.data;

      console.log("data_hotels:", hotels_data_respose);

      this.props.setHotelsData(hotels_data_respose);
      this.setState({
        hotels_data_state: hotels_data_respose,
      });
    }
  }

  render() {
    return (
      <BodyStyles>
        <div>
          <h2 className="title">Hotels</h2>
          <div className="filter_buttons">
            <Button
              className="filter_button"
              type="default"
              shape="round"
              size={"small"}
              onClick={() => {
                this.getHotelsBy("category_mayor_to_minor");
              }}
            >
              By Category (mayor to minor)
            </Button>
            <Button
              className="filter_button"
              type="default"
              shape="round"
              size={"small"}
              onClick={() => {
                this.getHotelsBy("category_minor_to_mayor");
              }}
            >
              By Category (minor to mayor)
            </Button>
            <Button
              className="filter_button"
              type="default"
              shape="round"
              size={"small"}
              onClick={() => {
                this.getHotelsBy("price_mayor_to_minor");
              }}
            >
              By Price (mayor to minor)
            </Button>
            <Button
              className="filter_button"
              type="default"
              shape="round"
              size={"small"}
              onClick={() => {
                this.getHotelsBy("price_minor_to_mayor");
              }}
            >
              By Price (minor to mayor)
            </Button>
          </div>
          <div className="hotels_list">
            {this.state.hotels_data_state &&
              this.state.hotels_data_state.map((hotel) => {
                return (
                  <Fragment>
                    <HotelCard
                      hotel_name={hotel.hotel_name}
                      hotel_location={hotel.hotel_location}
                      hotel_desc={hotel.hotel_desc}
                      hotel_category={hotel.category}
                      hotel_price={hotel.price}
                      hotel_reviews={hotel.reviews}
                      hotel_photos={hotel.photos}
                    />
                  </Fragment>
                );
              })}
          </div>
        </div>
      </BodyStyles>
    );
  }
}

function mapStateToProps(state) {
  const { hotels_data } = state.hotel_reducers;

  return {
    hotels_data,
  };
}

Body = connect(mapStateToProps, {
  setHotelsData,
})(Body);

export default Body;
