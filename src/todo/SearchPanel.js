import "./SearchPanel.css";
import React, { Component } from "react";
export default class SearchPanel extends Component {
  render() {
    return <input className="search-input" placeholder={this.props.place} />;
  }
}
