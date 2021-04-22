import React from "react";
import * as axios from "axios";


class User extends React.Component {
  constructor(props) {
    super(props);
    axios.get("https://social-network.samuraijs.com/api/1.0/users")
      .then(response => {
        const listAxios = document.getElementById("listaxios");
        let listItem = "";
        for (let item of response.data.items) {
          listItem += `<div>NAME: ${item.name} + ID: ${item.id}</div>`;
          listAxios.innerHTML = listItem;
        }
      })
  }
  render() {
    return (
      <div>
        <div id="listaxios"></div>
      </div>
      )
  }
}


export default User;