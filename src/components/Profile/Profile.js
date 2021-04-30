import "./Profile.css";
import ProfileInfo from "./../ProfileInfo/ProfileInfo.js"
import ProfilePost from "./../ProfilePost/ProfilePostComponent.js"

const Profile = (props) => {
  return (
    <div className="profile">
      <div className="porfile__wrapper">
        <div className="profile__row"></div>
        <div className="profile__row">
          <ProfileInfo profile={props.profile}/>
        </div>
        <div className="profile__row">
          <ProfilePost text={props.text} postslist={props.postslist} dispatch={props.dispatch} />
        </div>
      </div>
    </div>
  )
}

export default Profile;