import React, { Component } from "react";
import Button from "./Button";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser, logoutUser } from "../actions/authActions";

class HomeContent extends Component {
  onChange = e => {
    if (this.props.auth.isAuthenticated) {
      this.props.logoutUser();
    } else {
      this.props.loginUser();
    }
  };

  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div>
        <Button onClick={this.onChange}>
          {!isAuthenticated ? "Login" : "Logout"}
        </Button>
      </div>
    );
  }
}

HomeContent.propTypes = {
  loginUser: PropTypes.func.isRequired,
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { loginUser, logoutUser }
)(HomeContent);
