import { useEffect, useState } from "react";
import axios from "axios";
import Heart from "react-animated-heart";
import moment from "moment-timezone";
import { URL } from "../../../config";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import Comments from "../../Comments/comments";
import "./post2.css";
import {
  Comment,
  Delete,
  Block,
  Edit,
  ReportOutlined,
} from "@material-ui/icons";

//PostList on ProfilePage
const Post2 = (props) => {
  const { post } = props;
  const { loadPostDetails } = props;
  const { getReportedPosts } = props;
  const [isClick, setClick] = useState(false);
  const currentUserId = sessionStorage["user_id"];
  const name = sessionStorage["firstName"];
  const [likeCount, setLikeCount] = useState(post.likeCount);
  const navigate = useNavigate();
  console.log(loadPostDetails);
  console.log(getReportedPosts);
  const deletePostById = () => {
    const url = `${URL}/posts/${post.id}`;
    axios.delete(url).then((response) => {
      const result = response.data;
      if (result["status"] == "success") {
        toast.success("Successfully Deleted Post");
        if (loadPostDetails == undefined) {
          getReportedPosts();
        } else {
          loadPostDetails();
        }

        // navigate('/')
      }
    });
  };

  const reportPost = () => {
    const url = `${URL}/posts/report/${post.id}`;
    axios.patch(url).then((response) => {
      const result = response.data;
      if (result["status"] == "success") {
        console.log(result)
        toast.success("Successfully Reported Post");
      }
    });
  };

  //Like Posts

  const toggleLike = (type) => {
    const body = {
      type,
      userId: currentUserId,
    };

    const url = `${URL}/posts/${post.id}/toggle-like`;
    axios.patch(url, body).then((response) => {
      const result = response.data;
      if (result["status"] == "success") {
        setLikeCount(result["data"].likeCount);
      } else {
        toast.error(result["error"]);
      }
    });
  };

  //block user
  const blockuser = (id) => {
    const url = `${URL}/block/${id}`;
    axios.patch(url).then((response) => {
      const result = response.data;
      console.log(result);
      if (result["status"] == "success") {
        toast.success("User Blocked");
      } else toast.error(result["error"]);
    });
  };

  const getComments = () => {
    navigate("/comments", { state: { postId: post.id } });
    // return <div><Comments/>
    //   </div>
  };

  const editPost = () => {
    navigate("editPost", { state: { postId: post.id } });
  };

  const otherProfile = () => {
    navigate("/otherProfile", { state: { userId: post.userId } });
  };

  return (
    <div style={{ padding: "10px" }}>
      <div
        class="card"
        style={{ backgroundImage: "linear-gradient(#3b3a3a, #212529,black )" }}
      >
        <div className="d-flex"></div>
        <a
          onClick={otherProfile}
          class="card-text text-start pt-4 ms-5 mb-2"
          style={{ color: "#ffeba7", textDecoration: "none" }}
        >
         <h3 className="mb-2 "> {post.firstName} {post.lastName}</h3>
        </a>
        <img src={`${post.attachmentUrl}`} class="card-img-top" />

        <div class="card-body">
          <p class="card-text"> {post.details}</p>
          <h5 class="card-header text-muted">Tags:{post.tags}</h5>
          

          <div className="d-flex justify-contents-center align-items-center">
            <div style={{ float: "left" }}>
              <Heart
                isClick={post.likeStatus ? !isClick : isClick}
                onClick={() => {
                  setClick(!isClick);
                  toggleLike(1);
                }}
              />
            </div>
            <h6 className="mt-0 pt-0"> Likes:{likeCount}</h6>
            <div className="col text-end">
              <div title="Block"> {sessionStorage["role"] == "admin" && (
                <Block
                  onClick={() => blockuser(post.userId)}
                  className="mx-2"
                  style={{ float: "right" }}
                >
                  Block User
                </Block>
              )}</div>
             

             <div title="Report"> <ReportOutlined
                onClick={reportPost}
                className="mx-2"
                style={{ float: "right" }}
              ></ReportOutlined></div>

<div title="Delete">
              {(post.userId == currentUserId ||
                sessionStorage["role"] == "admin") && (
                <Delete
                  onClick={deletePostById}
                  className="mx-2"
                  style={{ float: "right" }}
                >
                  Delete
                </Delete>
              )}
</div>

<div title="Edit">
              {post.userId == currentUserId && (
                <div>
                  <Edit
                    className=" ms-2"
                    onClick={editPost}
                    style={{ float: "right" }}
                  >
                    Edit Post
                  </Edit>
                </div>
              )}
</div>

<div title="Comments">
              <Comment
                onClick={getComments}
                className=" mx-2"
                style={{ float: "right" }}
              >
                Comments
              </Comment>
              </div>
            </div>
          </div>
        </div>
        <p class="card-text mb-2 text-muted"> {moment(post.createdTimestamp).fromNow()}</p>
      </div>
    </div>
  );
};
export default Post2;
