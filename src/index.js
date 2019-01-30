import "./index.css";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { todos } from "./todo/db/todos";
import TodoList from "./todo/TodoList";
import AppHeader from "./todo/AppHeader";
import SearchPanel from "./todo/SearchPanel";
import ItemStatusFilter from "./todo/ItemStatusFilter";

class App extends Component {
  constructor() {
    super();

    this.state = {
      tododata: todos,
      term: "",
      todoFilter: "all"
    };
    this.deleteItem = id => {
      this.setState(({ tododata }) => {
        const idx = tododata.findIndex(el => el.id == id);
        const newArray = [
          ...tododata.slice(0, idx),
          ...tododata.slice(idx + 1)
        ];
        return { tododata: newArray };
      });
    };
    this.toggleProperty = (arr, id, propName) => {
      const idx = arr.findIndex(el => el.id == id);
      const oldItem = arr[idx];
      const newItem = { ...oldItem, [propName]: !oldItem[propName] };
      return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
    };

    this.onLabelClick = id => {
      this.setState(({ tododata }) => {
        return { tododata: this.toggleProperty(tododata, id, "done") };
      });
    };

    this.onImportantClick = id => {
      this.setState(({ tododata }) => {
        return { tododata: this.toggleProperty(tododata, id, "important") };
      });
    };
  }
  render() {
    const { tododata, term, todoFilter } = this.state;
    const todoCount = tododata.length;
    const todoDoned = tododata.filter(el => el.done).length;
    const todoActive = todoCount - todoDoned;

    return (
      <div className="app">
        <AppHeader
          header="Список дел"
          todoLength={todoCount}
          doned={todoDoned}
          active={todoActive}
        />
        <div className="search-panel d-flex">
          <SearchPanel place="Введите текст" />
          <ItemStatusFilter label="All" classbutton="btn btn-info" />
        </div>
        <TodoList
          todos={tododata}
          onDeleted={this.deleteItem}
          onLabelClick={this.onLabelClick}
          onImportantClick={this.onImportantClick}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
