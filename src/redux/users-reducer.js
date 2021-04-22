const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SETUSER = "SETUSER";

let initialState = {
  users: []
}

const UserReduce = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userid) {
            return {...user, follow: true}
          }
          return user;
        })
      };
    case UNFOLLOW:
    return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userid) {
            return {...user, follow: false}
          }
          return user;
        })
      };
    case SETUSER:
      return {
        ...state, 
        users: [...state.users, ...action.users]
      };
    default: 
      return state;
    }
}

export const followUser = (userid) => ({type: FOLLOW, userid})
export const unfollowUser = (userid) => ({type: UNFOLLOW, userid})
export const setUsers = (users) => ({type: SETUSER, users})


export default UserReduce;