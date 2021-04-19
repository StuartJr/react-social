import { BrowserRouter, Route } from "react-router-dom";

import "./Content.css";
import Navbar from "./../Navbar/Navbar.js";
import Profile from "./../Profile/Profile.js";
import Dialogs from "./../Dialogs/Dialogs.js";



const Content = (props) => {
  return (
    <BrowserRouter>
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
            <Route path="/profile" render={() => <Profile text={props.text} postslist={props.postslist} dispatch={props.dispatch}/> } />   
          </div>
        </div> 
      </div> 
    </div>
    </BrowserRouter>
  );
};

export default Content;