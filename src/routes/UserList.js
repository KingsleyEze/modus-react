import React, { Component } from "react";
import TopBar from "../components/TopBar";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { findUsers } from "../actions/userActions";
import UserItem from "../components/UserItem";
import "./UserList.css";
// Users listing component
export class UserList extends Component {
  componentDidMount() {
    this.props.findUsers();
  }
  render() {
    const { users } = this.props.users;

    let userList = <li>Loading...</li>;
    if (users) {
      userList = users.map((user, key) => (
        <Link to={`/users/${user.id.value}`} key={key}>
          <UserItem
            name={`${user.name.first} ${user.name.last}`}
            email={user.email}
            phone={user.phone}
          />
        </Link>
      ));
    }
    return (
      <div>
        <TopBar />
        <h2 className="user-list-header">{":: People"}</h2>
        <ul className="user-list-container">{userList}</ul>
      </div>
    );
  }
}

UserList.propTypes = {
  findUsers: PropTypes.func,
  users: PropTypes.object,
  user: PropTypes.object
};

const mapStateToProps = state => ({
  users: state.user,
  user: state.user
});

export default connect(
  mapStateToProps,
  { findUsers }
)(UserList);
