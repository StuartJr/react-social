import React from "react";
import * as axios from "axios";
const Users = (props) => {


  // if (props.users.length === 0) {
  //   props.setUsers([
  //     {id: 1, photoUrl: "https://cdn1.ozone.ru/multimedia/1037541059.jpg", follow: false, name: "Vasya", status: "I am ok", location: {contry: "Russia", cityname: "Moscow"}},
  //     {id: 2, photoUrl: "", follow: true, name: "Petya", status: "I am ok2", location: {contry: "Ukrine", cityname: "Kiev"}},
  //     {id: 3, photoUrl: "", follow: false, name: "Sasha", status: "I am ok3", location: {contry: "Belarus", cityname: "Minsk"}}
  //   ])
  // }

  if (props.users.length === 0) {
    axios.get("https://social-network.samuraijs.com/api/1.0/users")
      .then(response => {
        props.setUsers(response.data.items)
      })
  }


  return (
    <div>
      { props.users.map((user, index) => 
      <div key={index} className="users">
        <div className="users__wrapper">
          <div className="users__column">
            { user.photos.small ? 
              <img src={user.photos.small} alt="img" className="users__img" /> : 
              <img src="https://yt3.ggpht.com/a/AATXAJwueKcxgjjkF7pyYFCWCaZTkF-ZruSEG1VnIg=s900-c-k-c0xffffffff-no-rj-mo" alt="img" className="users__img" />
            }    
            { user.follow ? 
              <button onClick={() => {props.unfollow(user.id)}} className="users__btn">Unfollow</button> : 
              <button onClick={() => {props.follow(user.id)}} className="users__btn">Follow</button> 
            }
          </div>
          <div className="users__column">
            <p className="users__text">{user.name}</p>
            <p className="users__text">{user.status}</p>
            <p className="users__text">{user.id}</p>
            {/*<p className="users__text">{user.location.contry}</p>
            <p className="users__text">{user.location.cityname}</p>*/}
          </div>
        </div>
      </div>
      )}
    </div>
    )
}

export default Users;