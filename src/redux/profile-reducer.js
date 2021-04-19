const ADD_POST = "ADD-POST";
const CHANGE_TEXTAREA = "CHANGE-TEXTAREA";

const profileReduce = (state, action) => {
  switch (action.type) {
    case ADD_POST:
      state.posts.push(action.message);
      state.textvalue = "";
      return state;
    case CHANGE_TEXTAREA:
      state.textvalue = action.text;
      return state;
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

export default profileReduce;