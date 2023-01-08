import { useEffect, useState } from 'react'
import axios from 'axios'
import FriendRequestComponent from './friendRequestcomponent.js'
import { URL } from '../../../config'


//FriendList Component On Home Page
//Passes Friend To FriendListComponent
const FriendRequestList = (props) => {
  const { loadFriendDetails } = props
  const [friendRequestList, setFriendRequestList] = useState([])
  const currentUserId = sessionStorage['user_id']

  const loadFriendRequestDetails = () => {

    const url = `${URL}/friendReqList?id=${currentUserId}`

    axios.get(url).then((response) => {
      const result = response.data

      if (result['status'] == 'success') {
        setFriendRequestList(result['data'])
        console.log(friendRequestList.length)
      }
    })
  }


  useEffect(() => {
    loadFriendRequestDetails()
  }, [])




  return (
    <div >
      <h2>Friend Requests</h2>
      <div className='d-flex flex-wrap'>
        
        {(friendRequestList.length  == 0) ? ( <p>No Friend Requests Available</p> ) :
          friendRequestList.map((friendRequest) => {

            return <FriendRequestComponent friendRequestList={friendRequest} loadFriendRequestDetails={loadFriendRequestDetails} loadFriendDetails={loadFriendDetails} />


          })}
      </div>

    </div>
  )
}
export default FriendRequestList






