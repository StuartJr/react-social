import React from "react";
import Header from "./Header.js";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserData} from "./../../redux/auth-reducer.js";

class HeaderContainer extends React.Component {

  componentDidMount() {
     axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
      withCredentials: true
     })
      .then(response => {
        if (response.data.resultCode === 0) {
          let {id, email, login} = response.data.data
          this.props.setUserData(id, email, login);
          debugger
        }
      });
  }

  render() {
    return <Header {...this.props} />
  }

}
const mapStateToProps = (state) =>({})
export default connect(mapStateToProps, setUserData)(HeaderContainer);