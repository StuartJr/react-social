import React from "react";
import Profile from "./Profile.js";
import * as axios from "axios";
import {connect} from "react-redux";
import {setProfileUser} from "./../../redux/profile-reducer.js";
import {withRouter, Redirect} from "react-router-dom";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then(response => {
        this.props.setProfileUser(response.data);
      });
    
      document.documentElement.scrollTop = 0;
      
  }

  render() {
    if (this.props.isAuth === false) return <Redirect to={'/login'} />
      
    return (
      <Profile {...this.props} profile={this.props.profile}/>
    )
    
  }
}


let mapStateToProps = (state) => ({
  profile: state.pageProfile.profile,
  isAuth: state.auth.isAuth
})

let ProfileContainerWithRouter = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setProfileUser})(ProfileContainerWithRouter);