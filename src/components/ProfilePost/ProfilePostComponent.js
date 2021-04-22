import React from "react";
import MyPosts from "./ProfilePost.js";
import { addPostActionCreator, changePostActionCreator } from "./../../redux/profile-reducer.js";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
  return {
    postslist: state.pageProfile.posts,
    textvalue: state.pageProfile.textvalue
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    updateNewPostText: (text) => {
      dispatch(changePostActionCreator(text));
    },
    addPost: (text) => {
      dispatch(addPostActionCreator(text));
    }
  }
}


const ProfilePostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default ProfilePostContainer;