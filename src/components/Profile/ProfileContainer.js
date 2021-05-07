import React from "react";
import Profile from "./Profile.js";
import * as axios from "axios";
import {connect} from "react-redux";
import {compose} from "redux";
import {setProfileUser} from "./../../redux/profile-reducer.js";
import {withRouter, Redirect} from "react-router-dom";
import {withAuthRedirct} from "./../../hoc/withAuthRedirect.js";

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
      
    return (
      <Profile {...this.props} profile={this.props.profile}/>
    )
    
  }
}


let mapStateToProps = (state) => ({
  profile: state.pageProfile.profile
})

export default compose(
  connect(mapStateToProps, {setProfileUser}),
  withRouter
  // withAuthRedirct
)(ProfileContainer)


// let AuthRedirectComponent = withAuthRedirct(ProfileContainer)

// let mapStateToProps = (state) => ({
//   profile: state.pageProfile.profile
// })

// let ProfileContainerWithRouter = withRouter(AuthRedirectComponent)

// export default connect(mapStateToProps, {setProfileUser})(ProfileContainerWithRouter);