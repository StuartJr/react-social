import React from "react";

class ProfileStatus extends React.Component {
  state = {
    editMode: false
  }

  activateEditMode() {
    this.setState({
      editMode: true
    })
  }

  deactivateEditMode() {
    this.setState({
      editMode: false
    })
  }

  render() {
    return (
      <div className="status">
      { !this.state.editMode ? 
        <div className="status__item">
          <span onDoubleClick={this.activateEditMode.bind(this)} className="status__span">{this.props.status}</span>
        </div>
        :
        <div className="status__item">
          <input autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} className="status__input" value={this.props.status} />
        </div>
      }
      </div>
    )
  }
}

export default ProfileStatus;