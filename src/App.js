import React, { Component } from "react";
import TodoItem from "./components/TodoItem";
import { connect } from "react-redux";
import { fetchTodos, updateTodo, addTodo } from "../actions";

class App extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.callback = this.callback.bind(this);
  }

  componentDidUpdate() {
    // When we get new props / state, this will run
  }

  handleChange(event) {
    this.props.updateTodo(event.target.value);
    // this.setState({ input: event.target.value });
  }

  // callback(event) {
  //   let id = event.target.id;
  //   this.setState({
  //     todos: this.state.todos.filter(todo => id !== todo)
  //   });
  // }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addTodo(this.props.fetchTodos());
    // this.setState({ todos: [...this.state.todos, this.state.input] });
    // this.setState({ input: "" });
  }

  render() {
    const todos = this.state.todos.map(todo => (
      <TodoItem key={todo} todo={todo} callback={this.callback} />
    ));
    return (
      <div className="container pt-2">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <form onSubmit={this.handleSubmit}>
              <input
                className="form-control"
                value={this.state.input}
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

function mapStateToProps(state) {
  return { todos: state.todos };
}

export default connect(
  mapStateToProps,
  { fetchTodos, updateTodo, addTodo }
)(App);
