import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteCompleted } from "../actions";

class Tracker extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.props.deleteCompleted();
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-6 offset-md-3 text-center">
            <h4>We currently have {this.props.items} items</h4>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <button
              className="btn btn-block btn-default"
              onClick={this.handleClick}
            >
              Remove Completed Tasks
            </button>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    todos: this.state
  };
}

export default connect(
  mapStateToProps,
  { deleteCompleted }
)(Tracker);
