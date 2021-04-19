import React from "react";
import "./DialogsMessages.css";

const DialogsMessages = (props) => {
  return (
    <div className="dialogs-messages">
      <div className="dialogs-messages__avatar">
        <div className="dialogs-messages__avatar-img"></div>
        <p className="dialogs-messages__avatar-name">{ props.name }</p>
      </div>
      <div className="dialogs-messages__text">
        { props.message }
      </div>
    </div>
  );
};

export default DialogsMessages;