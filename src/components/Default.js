import React, { Component } from "react";

class Default extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
            <h2>page not found!</h2>
            <h3 className="pt-4">
              The requested URL{" "}
              <span className="text-danger">
                {this.props.location.pathname}
              </span>
              &nbsp; was not found.
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Default;
