import React from "react";
import * as axios from "axios";

class Users extends React.Component {

  componentDidMount() {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
         this.props.setUsers(response.data.items)
         this.props.setTotalCount(response.data.totalCount)
         const allItemPagination = document.querySelectorAll(".pagination__item");
         const maxLength = Number(allItemPagination.length - 1);
         allItemPagination[0].style.display="flex";
         allItemPagination[0].classList.add("pagination__item-active");
         allItemPagination[maxLength].style.display="flex";
          for (let i = 0; i < 3; i++) {
            if ( i <= allItemPagination.length - 1) {
              allItemPagination[i].style.display="flex";
            }
          }
      });
  }

  onPageChanged = (index) => {
    this.props.setCurrentPage(index);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${index}&count=${this.props.pageSize}`)
      .then(response => {
         this.props.setUsers(response.data.items)
      });
    const allItemPagination = document.querySelectorAll(".pagination__item");
    for (let item of allItemPagination) {
      item.style.display="none";
      item.classList.remove("pagination__item-active");
    }
    for (let i = index-1; i < index+2; i++) {
      if ( i < allItemPagination.length - 1) {
        allItemPagination[i].style.display="flex";
      }
    }
    for (let i = index; i > index-4; i--) {
      if (i !== allItemPagination.length) {
        if (i > -1) {
          allItemPagination[i].style.display="flex";
        }
      }
    }
    allItemPagination[index-1].classList.add("pagination__item-active");
    allItemPagination[0].style.display="flex";
    allItemPagination[allItemPagination.length - 1].style.display="flex";
  }

  render() {

    let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

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
              onClick={(e) => {this.onPageChanged(index+1)}}
              className="pagination__item">
              {/*className={this.props.currentPage == item ? "pagination__item-active": "pagination__item"}>*/}
              {item}
            </p>
          )
        })
        
        }
      </div>
      { this.props.users.map((user, index) => 
      <div key={index} className="users">
        <div className="users__wrapper">
          <div className="users__column">
            { user.photos.small ? 
              <img src={user.photos.small} alt="img" className="users__img" /> : 
              <img src="https://yt3.ggpht.com/a/AATXAJwueKcxgjjkF7pyYFCWCaZTkF-ZruSEG1VnIg=s900-c-k-c0xffffffff-no-rj-mo" alt="img" className="users__img" />
            }    
            { user.follow ? 
              <button onClick={() => {this.props.unfollow(user.id)}} className="users__btn">Unfollow</button> : 
              <button onClick={() => {this.props.follow(user.id)}} className="users__btn">Follow</button> 
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
}


// const Users = (props) => {


//   // if (props.users.length === 0) {
//   //   props.setUsers([
//   //     {id: 1, photoUrl: "https://cdn1.ozone.ru/multimedia/1037541059.jpg", follow: false, name: "Vasya", status: "I am ok", location: {contry: "Russia", cityname: "Moscow"}},
//   //     {id: 2, photoUrl: "", follow: true, name: "Petya", status: "I am ok2", location: {contry: "Ukrine", cityname: "Kiev"}},
//   //     {id: 3, photoUrl: "", follow: false, name: "Sasha", status: "I am ok3", location: {contry: "Belarus", cityname: "Minsk"}}
//   //   ])
//   // }

//   if (props.users.length === 0) {
//     axios.get("https://social-network.samuraijs.com/api/1.0/users")
//       .then(response => {
//         props.setUsers(response.data.items)
//       })
//   }


//   return (
//     <div>
//       { props.users.map((user, index) => 
//       <div key={index} className="users">
//         <div className="users__wrapper">
//           <div className="users__column">
//             { user.photos.small ? 
//               <img src={user.photos.small} alt="img" className="users__img" /> : 
//               <img src="https://yt3.ggpht.com/a/AATXAJwueKcxgjjkF7pyYFCWCaZTkF-ZruSEG1VnIg=s900-c-k-c0xffffffff-no-rj-mo" alt="img" className="users__img" />
//             }    
//             { user.follow ? 
//               <button onClick={() => {props.unfollow(user.id)}} className="users__btn">Unfollow</button> : 
//               <button onClick={() => {props.follow(user.id)}} className="users__btn">Follow</button> 
//             }
//           </div>
//           <div className="users__column">
//             <p className="users__text">{user.name}</p>
//             <p className="users__text">{user.status}</p>
//             <p className="users__text">{user.id}</p>
//             {/*<p className="users__text">{user.location.contry}</p>
//             <p className="users__text">{user.location.cityname}</p>*/}
//           </div>
//         </div>
//       </div>
//       )}
//     </div>
//     )
// }

export default Users;