import axios from "axios"
import { useEffect, useState } from 'react'
import Post2 from "../ProfilePage/ProfileContent/post2"
import { URL } from "../../config"
import Sidebar from "../Master/LeftBar/Sidebar"
import Header from "../Master/Header/header"
import FriendRequestComponent from "../FriendList/FriendRequestComponent/friendRequestcomponent"

const BlockedUsers = () => {
    const currentUserId = sessionStorage['user_id']
    
    const [blockedUsersList, setBlockedUsersList] = useState([])

    const getBlockedUsers = () => {
        const url = `${URL}/users/blocked`
        

        axios.get(url).then((response) => {
            const result = response.data
            if (result['status'] == 'success') {
                setBlockedUsersList(result['data'])
                
            }
        })
    }



    useEffect(() => {
        getBlockedUsers()
    }, [])


    return (
<div className="container-fluid px-0">
            <Header />
            <div class="container-fluid pt-5 row mx-0 bkclr">
      <div class="col-sm-3 px-0 " > <Sidebar /></div>

      <div class="col-sm-9 pt-4 d-flex flex-column" style={{backgroundImage: "linear-gradient(#3b3a3a, #212529,black )"}}>
        <div className="row   d-flex  flex-wrap">
        {(blockedUsersList.length  == 0) ? ( <p>No users Blocked</p> ) :
            blockedUsersList.map((user) => {
              return <FriendRequestComponent user={user}  getBlockedUsers={getBlockedUsers}/>
            })}
        </div>
        <div class="row ">
      </div>

    </div>
</div></div>


    )
}
export default BlockedUsers
