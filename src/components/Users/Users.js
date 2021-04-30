import React from "react";
import {NavLink} from "react-router-dom";
// import "./Users.css";

let  Users = (props) => {

  let pageCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
      pages.push(i);
    }


  return (
    <div>
      <div className="pagination">
        { pages.map((item, index) => {
          return (
            <p 
              key={index} 
              onClick={(e) => {props.onPageChanged(index+1)}}
              className="pagination__item">
              {/*className={this.props.currentPage == item ? "pagination__item-active": "pagination__item"}>*/}
              {item}
            </p>
          )
        })
        
        }
      </div>
      { props.users.map((user, index) => 
      <div key={index} className="users">
        <div className="users__wrapper">
          <div className="users__column">
            <NavLink to={`/profile/${user.id}`}>    
            { user.photos.small ? 
              <img src={user.photos.small} alt="img" className="users__img" /> : 
              <img src="https://yt3.ggpht.com/a/AATXAJwueKcxgjjkF7pyYFCWCaZTkF-ZruSEG1VnIg=s900-c-k-c0xffffffff-no-rj-mo" alt="img" className="users__img" />
            }  
            </NavLink>  
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