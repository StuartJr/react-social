import React from "react";
import { connect } from "react-redux";
import "./Users.css";
import Users from "./Users.jsx";

import { 
  unfollowUser,
  followUser,
  setUsers,
  setCurrentPage,
  setTotalCount
} from "./../../redux/users-reducer";

let mapStateToProps = (state) => {
  return {
    users: state.pageUsers.users,
    pageSize: state.pageUsers.pageSize,
    totalUsersCount: state.pageUsers.totalUsersCount,
    currentPage: state.pageUsers.currentPage
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
    },
    setCurrentPage: (page) => {
      dispatch(setCurrentPage(page));
    },
    setTotalCount: (totalCount) => {
      dispatch(setTotalCount(totalCount));
    }
  }
}

const UserComponent = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UserComponent;