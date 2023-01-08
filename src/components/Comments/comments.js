
import { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import { URL } from '../../config'
import Comment from './comment'
import { useLocation } from 'react-router'
import { toast } from 'react-toastify'

const Comments = () => {
    
    const userId = sessionStorage['user_id']
    const { state } = useLocation()
    const { postId }  = state
    const [comments, setComments] = useState([])
    const [comment, setComment] = useState([])

    const getComments = () => {

        const url = `${URL}/comments/${postId}`
        
        axios.get(url).then((response) => {
            const result = response.data

            if (result['status'] == 'success') {
                setComments(result['data'])
                // console.log(result['data'])
            }
        })
    }


    const addComment = () => {

        const url = `${URL}/comment/${postId}`
        const body = {
            userId,
            comment
        }
        console.log(body)
        axios.post(url, body).then((response) => {
            const result = response.data
            setComment('')
            if (result['status'] == 'success') {
                console.log(result['data'])
                // refreshing the blog details
                getComments()
            }
        })
    }
    
    // const messagesEndRef = useRef(null)
    // const scrollToBottom = () => {
    //     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    //   }
    

    useEffect(() => {
        getComments()
        // scrollToBottom()
    }, [])


    return (
        <div className="col">
            <div className="row mt-4" 
            style={{ overflow: "scroll", height: "60vh" }} 
            >
                {comments.map((comment) => {
                    return <Comment comment={comment} />
                })}
            </div>

            <div className="row" >
                <textarea
                    onChange={(e) => {
                        setComment(e.target.value)
                    }}
                    type="text"
                    className="form-style"
                    placeholder="Comment"
                />
                <button className="btn mt-2" onClick={addComment}  >send</button>

            </div>
        </div>
    )


}

export default Comments