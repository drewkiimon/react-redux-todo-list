import React, { Component } from "react";
import "./TodoItem.css";

class TodoItem extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    console.log("From Todo", event.target);
  }

  render() {
    return (
      <li
        className="list-group-item d-flex align-items-center justify-content-center"
        id={this.props.todo}
        onClick={this.props.callback}
      >
        {this.props.todo}
      </li>
    );
  }
}

export default TodoItem;
