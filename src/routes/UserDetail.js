import React, { Component } from "react";
import TopBar from "../components/TopBar";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { findUserById } from "../actions/userActions";
import UserItem from "../components/UserItem";
import "./UserList.css";
import Button from "../components/Button";
import { errors } from "../config/keys";

class UserDetail extends Component {
  componentDidMount() {
    if (!this.props.match) {
      return;
    }
    const { userId } = this.props.match.params;
    this.props.findUserById(userId);
  }
  render() {
    let details = "Loading...";

    if (this.props.details.user) {
      const {
        picture: { large },
        name: { first, last },
        phone,
        email
      } = this.props.details.user;

      details = (
        <div>
          <h2 className="user-list-header">{":: "}Profile</h2>
          <ul className="user-list-container">
            <UserItem
              imageSrc={large}
              name={`${first} ${last}`}
              email={email}
              phone={phone}
            />
          </ul>
        </div>
      );
    } else {
      details = (
        <div>
          <h2 className="user-list-header">{errors.notFound}</h2>
        </div>
      );
    }
    return (
      <div>
        <TopBar />
        {details}
        <Link to={"/users"}>
          <Button style={{ position: "relative", left: "30px" }}>Back</Button>
        </Link>
      </div>
    );
  }
}

UserDetail.propTypes = {
  findUserById: PropTypes.func,
  user: PropTypes.object
};

const mapStateToProps = state => ({
  details: state.user.user
});

export default connect(
  mapStateToProps,
  { findUserById }
)(UserDetail);
