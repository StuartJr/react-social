import React from "react";

class ProfileStatus extends React.Component {

  statusUpdate = React.createRef()

  state = {
    editMode: false,
    status: this.props.status
  }
  activateEditMode = () => {
    this.setState({
      editMode: true
    })
  }

  deactivateEditMode = () => {
    this.setState({
      editMode: false
    })
  }

  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
      })
    }

  }

  render() {
    return (
      <div className="status">
      { !this.state.editMode ? 
        <div className="status__item">
          <span onDoubleClick={this.activateEditMode} className="status__span">{this.state.status}</span>
        </div>
        :
        <div className="status__item">
          <input onChange={this.onStatusChange} ref={this.statusUpdate} autoFocus={true} onBlur={this.deactivateEditMode} className="status__input" value={this.state.status} />
        </div>
      }
      </div>
    )
  }
}

export default ProfileStatus;