import React from "react";
import { connect } from "react-redux";
import "./Users.css";
import Users from "./Users.js";

import {unfollowUser, followUser, setUsers} from "./../../redux/users-reducer";

let mapStateToProps = (state) => {
  return {
    users: state.pageUsers.users
  }
};
let mapDispatchToProps = (dispatch) => {
  return {
    follow: (userid) => {
      dispatch(followUser(userid));
    },
    unfollow: (userid) => {
      dispatch(unfollowUser(userid));
    },
    setUsers: (users) => {
      dispatch(setUsers(users));
    }
  }
}

const UserComponent = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UserComponent;