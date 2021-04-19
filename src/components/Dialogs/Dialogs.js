import "./Dialogs.css";
import { NavLink } from "react-router-dom"
import DialogsMessages from "./DialogsMessages/DialogsMessages.js";


const Dialogs = (props) => {
  return (
    <div className="dialogs">
      <h1 className="dialogs__title">Dialogs</h1>
      <div className="dialogs__wrapper">
        <div className="dialogs__name">
        {props.names.map((item, index) => (
          <div key={index} className="dialogs__name-item">
            <NavLink to={"/dialogs/"+ index} className="dialogs__name-text">{item}</NavLink>
          </div>
        ))}
        </div>
        <div className="dialogs__messages">
        { props.messages.map((item, index) => (
          <DialogsMessages key={index} name={item.name} message={item.mesage} />
        ))}
        </div>
      </div>
    </div>
  );
};  

export default Dialogs;