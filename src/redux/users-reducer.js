const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SETUSER = "SETUSER";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const IS_FETCHING = "IS_FETCHING"

let initialState = {
  users: [],
  pageSize: 100,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false
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
        users: action.users
      };
    case SET_CURRENT_PAGE:
      return {...state, currentPage: action.page};
    case SET_TOTAL_COUNT:
      return {...state, totalUsersCount: action.totalCount};
    case IS_FETCHING:
      return {...state, isFetching: action.isfething};
    default: 
      return state;
    }
}

export const follow = (userid) => ({type: FOLLOW, userid})
export const unfollow = (userid) => ({type: UNFOLLOW, userid})
export const setUsers = (users) => ({type: SETUSER, users})
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page})
export const setTotalCount = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount})
export const setIsFetching = (isfething) => ({type: IS_FETCHING, isfething})


export default UserReduce;