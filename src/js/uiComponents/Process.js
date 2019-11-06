import React, { Component } from "react";

class Process extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="process">
        <span className="process__number">{this.props.number}</span>
        <div className="process__content">
          <h3 className="process__title">{this.props.title}</h3>
          <p className="process__info">{this.props.children}</p>
        </div>
      </div>
    );
  }
}

export default Process;
