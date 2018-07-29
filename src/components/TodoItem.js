import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteTodo } from "../actions";
import "./TodoItem.css";

class TodoItem extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.props.deleteTodo(event.target.id);
  }

  render() {
    return (
      <li
        className="list-group-item d-flex align-items-center justify-content-center"
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
  { deleteTodo }
)(TodoItem);
