import React, { useEffect, useState } from 'react'
import FriendRequestComponent from '../FriendList/FriendRequestComponent/friendRequestcomponent';
import Sidebar from '../Master/LeftBar/Sidebar';
import axios from 'axios';
import RcmdsComponent from './rcmdsComponent';
import { URL } from '../../config';

export default function RecommendationsBody() {
    const currentUserId = sessionStorage['user_id']
    const [nonFriendList, setNonFriendList] = useState([])

    const loadRecommendations = () => {
        const url = `${URL}/addfriend/${currentUserId}`
    
        axios.get(url).then((response) => {
          const result = response.data
          if (result['status'] == 'success') {
            setNonFriendList(result['data'])
          }
        })
      }

    useEffect(() => {
        loadRecommendations()
    }, [])

  return (
    <div class="container-fluid pt-5 row  mx-0 bkclr">
      <div class="col-sm-3  px-0" > <Sidebar /></div>

      <div class="col-sm-9 d-flex flex-column" style={{backgroundImage: "linear-gradient(#3b3a3a, #212529,black )"}}>
      <div > 
        <h2>Recommendations</h2>
        <div className='d-flex flex-wrap'>  
        {nonFriendList.map((nonFriend) => {
        return <RcmdsComponent nonFriend={nonFriend} loadRecommendations = {loadRecommendations} />
      })}
      </div>
     
    </div>
        {/* <div class="row ">

          <div>
            <h2>Friends</h2>
            {friendList.map((friend) => {
              return <FriendComponentForRightSideBar friend={friend} />
            })}
          </div>
        </div> */}

      </div>

    </div>
  )
}
