import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './nullstyle.css';
import reportWebVitals from './reportWebVitals';
import "./assets/style/style.scss";

import HeaderContainer from "./components/Header/HeaderContainer.js"
import Content from "./components/Content/Content.js"
import Footer from "./components/Footer/Footer.js"

import store from "./redux/redux-store.js";
import {Provider} from "react-redux";

ReactDOM.render(
  <React.StrictMode>
  <Provider store={store}>
    <HeaderContainer />
  </Provider>
    <Content
      names={store.getState().pageMessages.names}
      text={store.getState().pageProfile.textvalue}
      messages={store.getState().pageMessages.messages}
      postslist={store.getState().pageProfile.posts}
      dispatch={store.dispatch.bind(store)}
    />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

window.store = store
reportWebVitals();