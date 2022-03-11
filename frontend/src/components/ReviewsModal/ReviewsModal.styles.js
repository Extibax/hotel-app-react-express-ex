/* Modules */
import styled from "styled-components";

export const ReviewsModalStyles = styled.div`
  .review_item {
    border-bottom: 1px solid lightgray;
    margin-bottom: 12px;
  }

  .review_item:last-child {
      border: transparent;
  }

  .review_title {
    font-weight: bold;
  }

  .review_calification {
    font-style: italic;
  }

  .review_text {
    font-size: 12px;
  }
`;
