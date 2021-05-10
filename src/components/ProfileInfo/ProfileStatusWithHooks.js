import React, {useState, useEffect} from "react";

const ProfileStatusWithHooks = (props) => {

  let [editMode, seteditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status])

  const activateEditMode = () => {
    seteditMode(true);
  }

  const deactivateEditMode = () => {
    seteditMode(false);
  }

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  }

  return (
    <div className="status">
      { !editMode ? 
        <div className="status__item">
          <span onDoubleClick={activateEditMode} className="status__span">{status}</span>
        </div>
        :
        <div className="status__item">
          <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} className="status__input" value={status} />
        </div>
      }
      </div>
  )
}

export default ProfileStatusWithHooks;