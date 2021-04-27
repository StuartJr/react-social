import React from 'react';
import loading from "./../../../assets/tenor.gif";
import "./Preloader.scss";

let Preloader = (props) => {
  return (
    <div>
      <img className="loading" src={loading} alt="loading" />
    </div>
  )
}

export default Preloader;