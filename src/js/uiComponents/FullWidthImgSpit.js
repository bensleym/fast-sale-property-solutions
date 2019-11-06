import React, { Component } from "react";

class FullWidthImgSplit extends Component {
  constructor(props) {
    super(props);
  }

  cssStyles() {
    return this.props.orderAlt
      ? "full-width-img-split__img full-width-img-split__img--alt"
      : "full-width-img-split__img";
  }

  render() {
    return (
      <div className="full-width-img-split">
        <div className={this.cssStyles()}>
          <img src={this.props.image} alt={this.props.imageAlt} />
        </div>

        <div className="full-width-img-split__info">
          <h2>{this.props.title}</h2>
          <p>{this.props.children}</p>
        </div>
      </div>
    );
  }
}

export default FullWidthImgSplit;
