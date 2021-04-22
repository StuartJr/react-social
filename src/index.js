import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './nullstyle.css';
import reportWebVitals from './reportWebVitals';

import Header from "./components/Header/Header.js"
import Content from "./components/Content/Content.js"
import Footer from "./components/Footer/Footer.js"

import store from "./redux/redux-store.js";

ReactDOM.render(
  <React.StrictMode>
    <Header />
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


reportWebVitals();