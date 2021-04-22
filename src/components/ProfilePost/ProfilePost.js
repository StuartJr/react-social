import React from "react";
import "./ProfilePost.css";
import Post from "./Post/Post.js"

const ProfilePost = (props) => {
  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
    // newPostElement.current.value = "";
  };

  let postChenge = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
    // let text = e.target.value;
    // props.dispatch(changePostActionCreator(text));
  };

  return (
    <div className="profile-post">
      <div className="profile-post__wrapper">
        <p className="profile-post__title">My post</p>
        <textarea value={props.textvalue} onChange={postChenge} ref={newPostElement} placeholder="your news" type="text" className="profile-post__input" />
        <div className="profile-post__btn-wrapper">
          <button onClick={addPost} className="profile-post__btn">Send</button>
        </div>
      </div>
      {props.postslist.map((item, index) => (
        <Post key={index} text={item} />
      ))}
    </div>
  )
}

export default ProfilePost;