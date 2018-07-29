import React, { Component } from "react";
import TodoItem from "./components/TodoItem";
import { connect } from "react-redux";
import { fetchTodos, updateTodo, addTodo } from "./actions";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchTodos();
  }

  componentDidUpdate() {}

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addTodo(this.state.value);
    // this.setState({ todos: [...this.state.todos, this.state.input] });
    this.setState({ value: "" });
    this.props.fetchTodos();
  }

  render() {
    const todos = this.props.todos.todos.map(todo => (
      <TodoItem key={todo} todo={todo} callback={this.callback} />
    ));

    return (
      <div className="container pt-2">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <form onSubmit={this.handleSubmit}>
              <input
                className="form-control"
                value={this.state.value}
                onChange={this.handleChange}
                placeholder="Enter todo item here..."
              />
            </form>
            <ul className="list-group list-group-flush pt-2">{todos}</ul>
          </div>
        </div>
      </div>
    );
  }
}
//
function mapStateToProps(state) {
  return { todos: state.todos };
}

export default connect(
  mapStateToProps,
  { fetchTodos, updateTodo, addTodo }
)(App);
