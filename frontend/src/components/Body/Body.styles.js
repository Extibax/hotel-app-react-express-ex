/* Modules */
import styled from "styled-components";

export const BodyStyles = styled.div`
  margin-top: 5px;
  padding: 20px;

  .title {
    font-weight: bold;
    margin-bottom: 30px;
  }

  .filter_buttons {
    width: fit-content;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .filter_button {
    margin-right: 10px;
    font-size: 12px;
  }

  .filter_button:last-child {
    margin-right: 0;
  }
`;
