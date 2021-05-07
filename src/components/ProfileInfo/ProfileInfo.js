import "./ProfileInfo.css";
import Preloader from "./../common/Preloader/Preloader.js";
import ProfileStatus from "./ProfileStatus.js";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  return (
    <div className="profile-info">
      <div className="profile-info__avatar">
      { props.profile.photos.large ?
        <img src={props.profile.photos.large} alt="img" className="profile-info__avatar-img" /> :
        <img src="https://yt3.ggpht.com/a/AATXAJwueKcxgjjkF7pyYFCWCaZTkF-ZruSEG1VnIg=s900-c-k-c0xffffffff-no-rj-mo" alt="img" className="profile-info__avatar-img"  />
      }
      </div>
      <div className="profile-info__wrapper">
        <ProfileStatus status={props.status}/>
        <p className="profile-info__title">{props.profile.fullName}</p>
        <ul className="profile-info__list">
          <li className="profile-info__list-item">About me: {props.profile.aboutMe}</li>
          <li className="profile-info__list-item">Looking for a job description: {props.profile.lookingForAJobDescription}</li>
          <li className="profile-info__list-item">Looking for a job: {props.profile.lookingForAJob}</li>
          <li className="profile-info__list-item">User id: {props.profile.userId}</li>
        </ul>
      </div>
    </div>
  )
}

export default ProfileInfo