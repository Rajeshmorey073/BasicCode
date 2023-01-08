import { useEffect, useState } from 'react'
import axios from 'axios'
import { URL } from '../../../config'
import Post2 from '../../Post/postdemo'


const FriendList =()=>{
    

const [post, setPost] = useState([])
  const currentUserId = sessionStorage['user_id']

const loadPostDetails = () => {
    
    const url = `${URL}/post/user/${currentUserId}`

    axios.get(url).then((response) => {
      const result = response.data
      console.log(result)
      if (result['status'] == 'success') {
        setPost(result['data'])
      }
    })
  }
  useEffect(()=>{
      loadPostDetails()
  },[])


  return(
      <div>
  


    {post.map((list)=>{
        return <Post2 post= {list}/>
    })}
    </div>
  )}
export default PostList





