import { useEffect, useState } from 'react'
import axios from 'axios'
import ChatFriendComponentForRightSideBar from './chatFriendComponentForRightSideBar'
import { URL } from '../../../config'


//FriendList Component On Home Page
//Passes Friend To FriendListComponent
const FriendListHome = (props) => {
  const { getMessages } = props
  const [friendList, setFriendList] = useState([])
  const currentUserId = sessionStorage['user_id']
  console.log(currentUserId)

  const loadFriendDetails = () => {

    const url = `${URL}/friend?id=${currentUserId}`

    axios.get(url).then((response) => {
      const result = response.data
      if (result['status'] == 'success') {
        setFriendList(result['data'])
      }
    })
  }
  useEffect(() => {
    loadFriendDetails()
  }, [])


  return (
    <div className='sticky-top ' >
        <h2>Friends</h2>
      {friendList.map((friend) => {
        return <ChatFriendComponentForRightSideBar friend={friend} getMessages = { getMessages }/>
      })}
    </div>
  )
}
export default FriendListHome






