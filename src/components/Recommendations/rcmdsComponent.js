import { URL } from "../../config"
import {
    Check,
    Cancel
} from "@material-ui/icons"
import axios from "axios"
import { toast } from "react-toastify"
import { useState } from "react"

//Recieving Friends from /Home/FriendList/friendlist


const RcmdsComponent = (props) => {
    const { nonFriend, loadRecommendations } = props
console.log(nonFriend)
    const currentUserId = sessionStorage['user_id']
    const sourceId = currentUserId
    
   

    const sendFriendRequest = () => {
        const targetId = nonFriend.id
        const url = `${URL}/friend/add`
        console.log(targetId)
        const body = {
            sourceId,
            targetId,
        }

        axios.post(url, body).then((response) => {
            const result = response.data
            console.log(result)
            if (result['status'] == 'success') {
                toast.success('Sent Friend request to '+nonFriend.firstName)
                loadRecommendations()
               
            } else (
                toast.error('Error sending Friend request')
            )
        })
    
    
    
    }



    return (
        <div >
            <div class="card m-2" style={{ width: "13rem"}}>
                { nonFriend.profileImageUrl == "a" && <img src="https://picsum.photos/100" style={{ height: "13rem"}} class="card-img-top" alt="..." />}
                { nonFriend.profileImageUrl != "a" && <img src={`${nonFriend.profileImageUrl}`} style={{ height: "13rem"}} class="card-img-top" alt="..." />}
                <div class="card-body">
                    <h5>{nonFriend.firstName}  {nonFriend.lastName}</h5>
                   
                    <button className="btn" onClick={() => {sendFriendRequest(); this.disabled=true; }} style={{float:"left",backgroundColor:"green"}}>Send Request</button>
                </div>
            </div>
        </div>
    )

}
export default RcmdsComponent