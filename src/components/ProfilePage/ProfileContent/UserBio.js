import "./profileBio.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { URL } from "../../../config";
import { toast } from "react-toastify";
import Edit from "../edit";
import { useNavigate } from "react-router";

//User Bio On Profile Page

const UserBio = (props) => {
  // const currentUserId = sessionStorage['user_id']
  const { userId } = props;
  const navigate = useNavigate();
  const [user, setUser] = useState([]);

  const getUserData = () => {
    const url = `${URL}/profile/${userId}`;

    axios.get(url).then((response) => {
      const result = response.data;
      if (result["status"] == "success") {
        setUser(result["data"]);
      } else {
        toast.error(result["error"]);
      }
    });
  };

  useEffect(() => {
    getUserData();
  }, []);

  const nanana = () => {
    navigate("/editprofile1");
  };

  return (
    <div className="row">
      <div className="row">
        <div class="container1">
          <img
            class="dp rounded-circle z-depth-2 fixed-top"
            src={`${user.profileImageUrl}`}
            alt="description of image"
          />
          <img
            class="cover"
            src="https://picsum.photos/200/300"
            alt="Our Location"
          />
        </div>
      </div>
      <div className="row">
        <div className="col"></div>
        <div className="col">
          <div className="profile">
            <div className="name">
              {user.firstName} {user.lastName}
            </div>
            <div className="bio">{user.bio}</div>
          </div>
        </div>
        <div className="col">
        {userId == sessionStorage["user_id"] && (
            <div className="row">
              <div className="col-4"></div>
              <div className="col-8">
                <button type="button" class="btn btn-primary" onClick={nanana}>
                  Edit Profile
                </button>
              </div>
            </div>
          )}
          </div>
      </div>
    </div>
  );
};
export default UserBio;
