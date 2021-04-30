import React from "react";
import Profile from "./Profile.js";
import * as axios from "axios";
import {connect} from "react-redux";
import {setProfileUser} from "./../../redux/profile-reducer.js"

class ProfileContainer extends React.Component {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
      .then(response => {
        this.props.setProfileUser(response.data);
      });
  }

  render() {
    return (
      <Profile {...this.props} profile={this.props.profile}/>
    )
  }
}
let mapStateToProps = (state) => ({
  profile: state.pageProfile.profile,
})
export default connect(mapStateToProps, {setProfileUser})(ProfileContainer);