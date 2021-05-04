import React from "react";
import { connect } from "react-redux";
import * as axios from "axios";
import Users from "./Users.js";
import Preloader from "./../common/Preloader/Preloader.js";
import {getUsers} from "./../../api/Api.js";

import { 
  unfollow,
  follow,
  setUsers,
  setCurrentPage,
  setTotalCount,
  setIsFetching
} from "./../../redux/users-reducer";


class UsersApiComponent extends React.Component {

  componentDidMount() {
    this.props.setIsFetching(true);
    getUsers(this.props.currentPage, this.props.pageSize).then(data => {
         this.props.setIsFetching(false);
         this.props.setUsers(data.items)
         this.props.setTotalCount(data.totalCount)
         const allItemPagination = document.querySelectorAll(".pagination__item");
         const maxLength = Number(allItemPagination.length - 1);
         allItemPagination[0].style.display="flex";
         allItemPagination[0].classList.add("pagination__item-active");
         allItemPagination[maxLength].style.display="flex";
          for (let i = 0; i < 3; i++) {
            if ( i <= allItemPagination.length - 1) {
              allItemPagination[i].style.display="flex";
            }
          }
      });
  }

  onPageChanged = (index) => {
    this.props.setCurrentPage(index);
    this.props.setIsFetching(true);
    getUsers(index, this.props.pageSize).then(data => {
        this.props.setIsFetching(false);
         this.props.setUsers(data.items)
      });
    const allItemPagination = document.querySelectorAll(".pagination__item");
    for (let item of allItemPagination) {
      item.style.display="none";
      item.classList.remove("pagination__item-active");
    }
    for (let i = index-1; i < index+2; i++) {
      if ( i < allItemPagination.length - 1) {
        allItemPagination[i].style.display="flex";
      }
    }
    for (let i = index; i > index-4; i--) {
      if (i !== allItemPagination.length) {
        if (i > -1) {
          allItemPagination[i].style.display="flex";
        }
      }
    }
    allItemPagination[index-1].classList.add("pagination__item-active");
    allItemPagination[0].style.display="flex";
    allItemPagination[allItemPagination.length - 1].style.display="flex";
  }

  render() {
    return (
      <>
      {this.props.isFetching ? 
        <Preloader /> 
        : null}
      <Users
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        users={this.props.users}
        unfollow={this.props.unfollow}
        follow={this.props.follow}
        />
      </>
    )
  }
}


let mapStateToProps = (state) => {
  return {
    users: state.pageUsers.users,
    pageSize: state.pageUsers.pageSize,
    totalUsersCount: state.pageUsers.totalUsersCount,
    currentPage: state.pageUsers.currentPage,
    isFetching: state.pageUsers.isFetching
  }
};

export default connect(mapStateToProps, 
  {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalCount,
    setIsFetching
  })(UsersApiComponent);
