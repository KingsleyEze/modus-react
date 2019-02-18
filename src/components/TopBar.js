import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser, logoutUser } from "../actions/authActions";
import { keys } from "../config/keys";

class TopBar extends Component {
  onChange = e => {
    if (this.props.auth.isAuthenticated) {
      this.props.logoutUser();
    } else {
      this.props.loginUser();
    }
  };

  render() {
    const { isAuthenticated } = this.props.auth;
    const nonAuthStyle = { backgroundColor: "blue", color: "white" };
    const authStyle = { borderRadius: 100, width: 34, height: 34 };

    return (
      <header
        style={{
          height: 48,
          width: "100%",
          backgroundColor: "rgb(102,63,180)",
          color: "white",
          padding: "6px 10px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center"
        }}
      >
        <div style={styles.logo}>
          <Link to="/">
            <img
              alt={"logo"}
              style={{ maxHeight: 40, flex: 1 }}
              src={`${keys.baseURL}/favicon-196x196.png`}
            />
          </Link>
        </div>
        <div>{"Modus Create"}</div>
        <div style={{ margin: "0 0 0 200px" }}>
          <Link to={"/home"} style={{ color: "white", fontWeight: "bold" }}>
            Home
          </Link>
          {" | "}{" "}
          <Link to={"/users"} style={{ color: "white", fontWeight: "bold" }}>
            People
          </Link>
        </div>
        <div style={{ float: "left", color: "white", flex: 1 }} />
        <div style={{ float: "right", paddingRight: 20 }}>
          <Button
            onClick={!isAuthenticated ? this.onChange : null}
            style={!isAuthenticated ? nonAuthStyle : authStyle}
          >
            {!isAuthenticated ? "Login" : "KE"}
          </Button>
          <Button
            onClick={!isAuthenticated ? null : this.onChange}
            style={{ backgroundColor: "red", color: "white" }}
          >
            {!isAuthenticated ? "Signup" : "Logout"}
          </Button>
        </div>
      </header>
    );
  }
}

const styles = {
  logo: {
    float: "left",
    margin: 8
  }
};

TopBar.propTypes = {
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
)(TopBar);
