/* Modules */
import React, { Component } from "react";
import { PageHeader } from "antd";

/* Styles */
import { HeaderStyles } from "./Header.styles";

class Header extends Component {
  state = {};

  render() {
    return (
      <HeaderStyles>
        <div className="header_wrapper">
          <PageHeader
            ghost={false}
            onBack={false}
            title="HOTEL APP"
          ></PageHeader>
        </div>
      </HeaderStyles>
    );
  }
}
export default Header;
