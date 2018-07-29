import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteTodo, updateTodo } from "../actions";
import "./TodoItem.css";

class TodoItem extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  // When a user click, we will change it's completed to true
  handleClick(event) {
    this.props.updateTodo(event.target.id);
    // this.props.deleteTodo(event.target.id);
  }

  render() {
    return (
      <li
        className={
          this.props.completed
            ? "line-through list-group-item d-flex align-items-center justify-content-center"
            : "list-group-item d-flex align-items-center justify-content-center"
        }
        id={this.props.todo}
        onClick={this.handleClick}
      >
        {this.props.todo}
      </li>
    );
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

export default connect(
  mapStateToProps,
  { deleteTodo, updateTodo }
)(TodoItem);
