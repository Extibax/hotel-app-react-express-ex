/* Modules */
import styled from "styled-components";

export const HotelCardStyles = styled.div`
  margin: 20px;
  padding: 20px;
  border-bottom: 1px solid lightgray;
  cursor: pointer;

  .upper_hotel_card {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .hotel_card {
    display: flex;
    flex-direction: row;
  }

  .hotel_img {
    height: 200px;
    width: 350px;
    border-radius: 10px;
    overflow: hidden;
  }

  .hotel_info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 20px;
    width: 100%;
  }

  .hotel_location {
    font-size: 12px;
    color: gray;
    margin: 0;
    margin-top: 10px;
  }

  .hotel_name {
    font-weight: 300;
    margin-top: 10px;
    margin-bottom: 0;
  }

  .hotel_text_split {
    margin-top: 10px;
    margin-bottom: 0;
    font-size: 13px;
    color: gray;
  }

  .hotel_desc {
    margin-top: 10px;
    font-size: 13px;
    color: gray;
  }

  .hotel_category_price {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 12px;
  }

  .hotel_category {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-weight: bold;
  }

  .star_icon {
    font-size: 20px;
    margin-right: 3px;
  }

  .hotel_price {
    font-weight: bold;
  }

  .ant-carousel {
    height: 200px !important;
    width: 350px !important;
    /* overflow: hidden; */
  }

  .slick-track {
    height: 200px !important;
    width: 350px !important;
  }
`;
