import { BrowserRouter, Route } from "react-router-dom";

import "./Content.css";
import Navbar from "./../Navbar/Navbar.js";
import ProfileContainer from "./../Profile/ProfileContainer.js";
import Dialogs from "./../Dialogs/Dialogs.js";
import Users from "./../Users/UsersComponent.js"
import StoreContext from "./../../storeContex.js";
import store from "./../../redux/redux-store.js";
import {Provider} from "react-redux";


const Content = (props) => {
  return (
    <BrowserRouter>
    <Provider store={store}>
    <div className="content">
      <div className="container">
        <div className="content__wrapper">
          <div className="content__row">
            <Navbar />
          </div>
          <div className="content__row">
            {/*<Route path="/dialogs" component={Dialogs} />
            <Route path="/profile" component={Profile} />*/}

            <Route path="/dialogs" render={() => <Dialogs names={props.names} messages={props.messages} /> } />
            <Route path="/profile" render={() => <ProfileContainer text={props.text} postslist={props.postslist} dispatch={props.dispatch}/> } /> 
            <Route path="/users" render={() => <Users /> } />  
          </div>
        </div> 
      </div> 
    </div>
    </Provider>
    </BrowserRouter>
  );
};

export default Content;