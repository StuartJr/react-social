import React from "react";
import { Redirect } from "react-router-dom";
import {connect} from "react-redux";

let mapStateToPropsRedirect = (state) => ({
  isAuth: state.auth.isAuth
})

export const withAuthRedirct = (Component) => {
  class RedirectComponent extends React.Component {
    render() {
      if (this.props.isAuth === false) return <Redirect to={'/login'} />
      return <Component {...this.props} />
    }
  }

  let RecirectAuthRedirectComponent = connect(mapStateToPropsRedirect)(RedirectComponent)

  return RecirectAuthRedirectComponent;
}