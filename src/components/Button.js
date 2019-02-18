import React, { Component } from "react";
import PropTypes from "prop-types";

const styles = {
  button: {
    width: 100,
    margin: 8,
    padding: 8
  }
};
class Button extends Component {
  render() {
    return (
      <button
        onClick={this.props.onClick}
        style={{ ...styles.button, ...this.props.style }}
      >
        {this.props.children}
      </button>
    );
  }
}

Button.propTypes = {
  onClick: PropTypes.func
};

export default Button;
