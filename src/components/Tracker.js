import React, { Component } from "react";
import "./Tracker.css";
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
          <div className="offset-md-3 col-md-6 tracker-box py-1">
            <div className="row">
              <div className="col-md-8 text-center d-flex justify-content-center align-items-center">
                <span>
                  We currently have <strong>{this.props.items}</strong> items
                </span>
              </div>
              <div className="col-md-4  d-flex justify-content-center align-items-center">
                <span className="text-wrapper" onClick={this.handleClick}>
                  Remove Completed Tasks
                </span>
              </div>
            </div>
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
