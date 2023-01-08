
import "./body.css";
import FriendRequestList from "../FriendRequestComponent/friendRequestlist";
import Sidebar from "../../Master/LeftBar/Sidebar";
import FriendListHome from "../../Home/FriendList/friendlist";
import { useEffect, useState } from 'react'
import axios from 'axios'
// import FriendListComponent from "../../Home/FriendList/friendlistcomponent";
import FriendComponentForRightSideBar from "../../Home/FriendList/friendComponentForRightSideBar";
import { URL } from "../../../config";




const Body = () => {

  const [friendList, setFriendList] = useState([])
  const currentUserId = sessionStorage['user_id']
  console.log(currentUserId)

  const loadFriendDetails = () => {
     const url = `${URL}/friend?id=${currentUserId}`
     axios.get(url).then((response) => {
      const result = response.data
      console.log(result)
      console.log('in flist')
      if (result['status'] == 'success') {
        setFriendList(result['data'])
        console.log(friendList)
        console.log(result['data'])
      }
    })
  }
  useEffect(() => {
    loadFriendDetails()
  }, [])


  return (
    <div class="container-fluid pt-5 row mx-0 bkclr">
      <div class="col-sm-3 px-0 " > <Sidebar /></div>

      <div class="col-sm-9 d-flex flex-column pt-3" style={{backgroundImage: "linear-gradient(#3b3a3a, #212529,black )"}}>
        <div className="row ">

          <FriendRequestList  loadFriendDetails={loadFriendDetails}/>
        </div>
        <div class="row ">

          <div>
            <h2>Friends</h2>
            {(friendList.length  == 0) ? ( <p>No Friends Available</p> ) :
            friendList.map((friend) => {
              return <FriendComponentForRightSideBar friend={friend} />
            })}
          </div>
        </div>

      </div>

    </div>







  );
};

export default Body;
