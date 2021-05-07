import {getStatus, updateStatus} from "./../api/Api.js";

const ADD_POST = "ADD-POST";
const CHANGE_TEXTAREA = "CHANGE-TEXTAREA";
const SET_PROFILE_USER = "SET_PROFILE_USER";
const SET_STATUS = "SET_STATUS";

let initialState = {
  posts: ["Donec et velit accumsan, dapibus est in, lobortis diam."],
  textvalue: "",
  profile: null,
  status: ""
}

const profileReduce = (state = initialState, action) => {
  switch (action.type) {
    // case ADD_POST: {
    // let stateCopy = {...state}
    // if (action.message.length >= 1) {
    //   stateCopy.posts = [...state.posts, action.message]
    //   // stateCopy.posts.push(action.message);
    //   stateCopy.textvalue = "";
    // }
    //   return stateCopy;
    // }
    // case CHANGE_TEXTAREA: {
    //   let stateCopy = {...state}
    //     stateCopy.textvalue = action.text;
    //     return stateCopy;
    //   }
    //   default: 
    //     return state;
    // }
    case ADD_POST: {
      return {
        ...state,
        posts: [...state.posts, action.message],
        textvalue: ""
      }
    }
    case CHANGE_TEXTAREA: {
      return {
        ...state,
        textvalue: action.text
      }
    }
    case SET_PROFILE_USER: {
      return {
        ...state,
        profile: action.profile
      }
    }
    case SET_STATUS: {
      return {
        ...state,
        status: action.status
      }
    }
    default: 
      return state;
    }
}

export const addPostActionCreator = (text) => {
  return {
    type: ADD_POST,
    message:text
  }
}

export const changePostActionCreator = (text) => {
  return {
    type: CHANGE_TEXTAREA,
    text:text
  }
}

export const setProfileUser = (profile) => {
  return {
    type: SET_PROFILE_USER,
    profile
  }
}

export const setStatus = (status) => ({ type: SET_STATUS, status })

export const getStatusUser = (userid) => (dispatch) => {
  getStatus(userid).then(data => {
    dispatch(setStatus(data))
  })
}

export const updateStatusUser = (status) => (dispatch) => {
  updateStatus(status).then(data => {
    if (data.resultCode === 0) {
      dispatch(setStatus(status))
    }
  })
}

export default profileReduce;