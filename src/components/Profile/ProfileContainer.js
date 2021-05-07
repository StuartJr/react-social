import React from "react";
import Profile from "./Profile.js";
// import * as axios from "axios";
import {connect} from "react-redux";
import {compose} from "redux";
import {setProfileUser, getStatusUser, updateStatusUser} from "./../../redux/profile-reducer.js";
import {withRouter /*, Redirect */} from "react-router-dom";
// import {withAuthRedirct} from "./../../hoc/withAuthRedirect.js";
import {getProfile} from "./../../api/Api.js";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    getProfile(userId).then(data => {this.props.setProfileUser(data);});
    document.documentElement.scrollTop = 0;
    this.props.getStatusUser(userId)
  }

  render() {
      
    return (
      <Profile {...this.props} 
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatusUser}
      />
    )
    
  }
}


let mapStateToProps = (state) => ({
  profile: state.pageProfile.profile,
  status: state.pageProfile.status
})

export default compose(
  connect(mapStateToProps, {setProfileUser, getStatusUser, updateStatusUser}),
  withRouter
  // withAuthRedirct
)(ProfileContainer)


// let AuthRedirectComponent = withAuthRedirct(ProfileContainer)

// let mapStateToProps = (state) => ({
//   profile: state.pageProfile.profile
// })

// let ProfileContainerWithRouter = withRouter(AuthRedirectComponent)

// export default connect(mapStateToProps, {setProfileUser})(ProfileContainerWithRouter);