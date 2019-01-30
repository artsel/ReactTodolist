import React, { Component } from "react";
import "./ItemStatusFilter.css";
export default class ItemStatusFilter extends Component {
  constructor() {
    super();
    this.onButtonClick = () => {
      console.log(`Button: ${this.props.label}`);
    };
  }
  render() {
    const { label, classbutton } = this.props;
    return (
      <div className="item-status-filter btn-group">
        <button
          type="button"
          onClick={this.onButtonClick}
          className={classbutton}
        >
          {label}
        </button>
      </div>
    );
  }
}
