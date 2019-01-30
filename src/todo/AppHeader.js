import "./AppHeader.css";
import React, { Component } from "react";
export default class AppHeader extends Component {
  render() {
    const { header, todoLength, active, doned } = this.props;
    return (
      <span className="app-header">
        <h4>
          {header}: {todoLength}
        </h4>
        <span className="header-doned">Выполнено: {doned}</span>
        <span className="header-active">Выполнить: {active}</span>
      </span>
    );
  }
}
