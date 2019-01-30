import "./TodoItem.css";
import React, { Component } from "react";

export default class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      donestate: this.props.done,
      importantstate: this.props.important
    };
  }
  render() {
    const {
      id,
      label,
      important = false,
      done = false,
      onDeleted,
      onLabelClick,
      onImportantClick
    } = this.props;
    let classNames = "todo-list-item";
    if (done) {
      classNames += " done";
    }
    if (important) {
      classNames += " important";
    }
    return (
      <span className="list-group-item">
        <span onClick={onLabelClick} className={classNames}>
          {label}
        </span>
        <button
          type="button"
          onClick={onImportantClick}
          className="btn btn-outline success done-button"
        >
          <i className="fa fa-info" />
        </button>
        <button
          type="button"
          onClick={onDeleted}
          className="btn btn-outline-danger delete-button"
        >
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  }
}
