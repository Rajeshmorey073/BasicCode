import "./body.css";
import AddPost from "../AddPost/addpost";
import Sidebar from "../../Master/LeftBar/Sidebar";
import FriendComponentForRightSideBar from "../FriendList/friendComponentForRightSideBar";
import { useEffect, useState } from "react";
import axios from "axios";
import { URL } from "../../../config";
import Post2 from "../../ProfilePage/ProfileContent/post2";
import UserBio from "../../ProfilePage/ProfileContent/UserBio";
//Home Body:--Contains SideBar Friends Posts And Friend List Components
//2 col:--Sidebar and HomePage
//2nd Col:--{
//2rows:
//-~~1st row:--2 cols:-1st col:-Add Post And tags
//~~~~~~~~~~~~~~~~~~~~2nd col:- empty // Suggestion :-Add Trending Tags

//~~2nd row:--2 cols:-1st col:-FriendsPosts
//~~~~~~~~~~~~~~~~~~~~2nd col- andFriends List

const Body = () => {
  const currentUserId = sessionStorage["user_id"];
  const firstName = sessionStorage["firstName"];

  const [postList, setPostList] = useState([]);
  const [likedPostList, setLikedPostList] = useState([]);
  const [friendList, setFriendList] = useState([]);
  const profileImageUrl = sessionStorage["profileImageUrl"];
  const loadPostDetails = () => {
    const url = `${URL}/postsOfFriends/${currentUserId}`;

    axios.get(url).then((response) => {
      const result = response.data;
      let temp = null;
      if (result["status"] == "success") {
        temp = result["data"];
        setPostList(temp["feed"]);
        setLikedPostList(temp["likedPostsMap"]);
      }
    });
  };

  const loadFriendDetails = () => {
    const url = `${URL}/friend?id=${currentUserId}`;
    axios.get(url).then((response) => {
      const result = response.data;
      if (result["status"] == "success") {
        setFriendList(result["data"]);
      }
    });
  };

  useEffect(() => {
    loadPostDetails();
    loadFriendDetails();
  }, []);

  return (
    <div class="container-fluid pt-5 row mx-0 bkclr">
      <div class="col-sm-3 px-0 ">
        {" "}
        <Sidebar />
      </div>

      <div
        class="col-sm-9"
        style={{ backgroundImage: "linear-gradient(#3b3a3a, #212529,black )" }}
      >
        <div className="row ">
          <div className="col-sm-8 ">
            <h3>Welcome {firstName},What's on your Mind?</h3>
            <AddPost loadPostDetails={loadPostDetails} />

            {postList.map((post) => {
              post.likeStatus = likedPostList[post.id];
              return <Post2 post={post} loadPostDetails={loadPostDetails} />;
            })}
          </div>
          <div class="col-sm-4 pt-4" >
            <h3>Friends</h3>
            {friendList.length == 0 ? (
              <p>No Friends Available</p>
            ) : (
              friendList.map((friend) => {
                return <FriendComponentForRightSideBar friend={friend} />;
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
