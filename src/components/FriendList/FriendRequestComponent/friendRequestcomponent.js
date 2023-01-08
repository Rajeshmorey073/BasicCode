import { URL } from "../../../config"
import {
    Check,
    Cancel,

} from "@material-ui/icons"
import axios from "axios"
import { toast } from "react-toastify"
import { useState } from "react"

//Recieving Friends from /Home/FriendList/friendlist


const FriendRequestComponent = (props) => {
    const { friendRequestList, loadFriendRequestDetails, loadFriendDetails } = props
    const { user, getBlockedUsers } = props

   
    const currentUserId = sessionStorage['user_id']
    

    const acceptFriendRequest = () => {
        const url = `${URL}/acceptReq`
        const sourceId = friendRequestList.id
        const targetId = currentUserId
        const body = {
            sourceId,
            targetId,
        }

        axios.patch(url, body).then((response) => {
            const result = response.data
            if (result['status'] == 'success') {
                toast.success(friendRequestList.firstName + ' is now your friend')
                loadFriendRequestDetails()
                loadFriendDetails()
            } else (
                toast.error('Error adding Friend')
            )
        })
    }

    const declineFriendRequest = () => {
        const sourceId = friendRequestList.id
        const targetId = currentUserId
        console.log(sourceId)
        console.log(targetId)
        const url = `${URL}/unfriend`
        const body = {
            sourceId,
            targetId,
        }
        console.log(body)

        axios.post(url, body).then((response) => {
            const result = response.data
            if (result['status'] == 'success') {
                toast.success(friendRequestList.firstName + 's request declined')
                loadFriendRequestDetails()
            } else (
                toast.error('Error deleting Friend')
            )
        })
    }

    const unblockUser = (id) => {
        const url = `${URL}/unblock/${id}`
        axios.patch(url).then((response) => {
            const result = response.data
            if (result['status'] == 'success') {
                toast.success('User UnBlocked')
                getBlockedUsers()
            } else (
                toast.error('Error Unblocking User')
            )
        })

    }


    return (
        <div >

            {user == undefined && (
                <div class="card m-2" style={{ width: "11rem" }}>
                    <img src="https://picsum.photos/100" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h4>{friendRequestList.firstName}  {friendRequestList.lastName}</h4>
                        <p class="card-text">{friendRequestList.bio}</p>
                        <button className="btn" onClick={acceptFriendRequest} style={{ width: 13, float: "left", backgroundColor: "green" }}><Check /></button>
                        <button className="btn" onClick={declineFriendRequest} style={{ width: 13, float: "right", backgroundColor: "maroon" }}><Cancel /></button>
                    </div>
                </div>
            )}
            {user != undefined && (
                <div class="card m-2" style={{ width: "11rem" }}>
                    <img src="https://picsum.photos/100" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h4>{user.firstName}  {user.lastName}</h4>
                        <p class="card-text">{user.bio}</p>
                        <button className="btn" onClick={()=>unblockUser(user.id)} style={{ width: 13, float: "left" }}>UnBlock</button>

                    </div>
                </div>)}


        </div>
    )

}
export default FriendRequestComponent