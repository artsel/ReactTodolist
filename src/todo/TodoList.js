import "./TodoList.css";
import React, { Component } from "react";
import { todos } from "./db/todos";
import TodoItem from "./TodoItem";

export default class TodoList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { todos, onDeleted, onLabelClick, onImportantClick } = this.props;
    const elements = todos.map(item => {
      return (
        <TodoItem
          key={item.id}
          label={item.title}
          {...item}
          onDeleted={() => onDeleted(item.id)}
          onLabelClick={() => onLabelClick(item.id)}
          onImportantClick={() => onImportantClick(item.id)}
        />
      );
    });
    return <ul className="todo-list">{elements}</ul>;
  }
}
