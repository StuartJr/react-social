import "./ProfileInfo.css";

const ProfileInfo = () => {
  return (
    <div className="profile-info">
      <div className="profile-info__avatar">
        <img src="https://yt3.ggpht.com/a/AATXAJwueKcxgjjkF7pyYFCWCaZTkF-ZruSEG1VnIg=s900-c-k-c0xffffffff-no-rj-mo" alt="img" className="profile-info__avatar-img" />
      </div>
      <div className="profile-info__wrapper">
        <p className="profile-info__title">Dmitry</p>
        <ul className="profile-info__list">
          <li className="profile-info__list-item">Date of Birth: 2 january</li>
          <li className="profile-info__list-item">City: Moscow</li>
          <li className="profile-info__list-item">Education: BSU 11</li>
          <li className="profile-info__list-item">Web Site: No</li>
        </ul>
      </div>
    </div>
  )
}

export default ProfileInfo