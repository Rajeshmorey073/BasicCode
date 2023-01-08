import "./index.css";
import Header from "../../components/Master/Header/header";
import UserBio from "../../components/ProfilePage/ProfileContent/UserBio";
import Sidebar from "../../components/Master/LeftBar/Sidebar";
import { useEffect, useState } from 'react'
import axios from 'axios'
import { URL } from "../../config";
import Post2 from "../../components/ProfilePage/ProfileContent/post2";

const ProfilePage = () => {

  const [postList, setPostList] = useState([])
  const [likedPostList, setLikedPostList] = useState([])

  const currentUserId = sessionStorage['user_id']



  const loadPostDetails = () => {
    const url = `${URL}/posts/${currentUserId}`
    axios.get(url).then((response) => {
      const result = response.data
      let temp = null
      if (result['status'] == 'success') {
        temp = result['data']
        setPostList(temp['feed'])
        setLikedPostList(temp['likedPostsMap'])
      }
    })

  }

  useEffect(() => {
    loadPostDetails()
  }, [])



  return (
    <div className="container-fluid ">
      <Header />

      <div class="container-fluid pt-5 row mx-0 bkclr">
        <div class="col-sm-3 px-0 " > <Sidebar /></div>

        <div class="col-sm-9" style={{backgroundImage: "linear-gradient(#3b3a3a, #212529,black )"}}>
          <UserBio userId = {sessionStorage["user_id"]} />
          <div class="row ">
            <div class="col-sm">
            </div>
            <div class="col-sm-8"  >
              <div>
                
                { postList.map((post) => {
                    post.likeStatus = likedPostList[post.id]
                    return <Post2 post={post} />
                  })
                }
              </div>
            </div>
            <div class="col-sm">
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};

export default ProfilePage;
