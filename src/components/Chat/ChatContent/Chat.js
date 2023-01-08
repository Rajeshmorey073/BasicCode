
import { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import { URL } from '../../../config'
import MyMessages from './MyMessages'

import "./chatContent.css";

import { toast } from 'react-toastify'

const Chat = () => {

    const [messages, setMessages] = useState([])
    const [message, setMessage] = useState([])
    const sourceId = sessionStorage['user_id']
    const targetId = sessionStorage['chatTargetId']

    const getMessages = () => {
        targetId = sessionStorage['chatTargetId']
        const url = `${URL}/getMessage`
        const body = {
            sourceId,
            targetId
        }
        axios.post(url, body).then((response) => {
            const result = response.data

            if (result['status'] == 'success') {
                setMessages(result['data'])
                // console.log(result['data'])
            }
        })
    }


    const sendMessage = () => {
        targetId = sessionStorage['chatTargetId']
        const url = `${URL}/message`
        const body = {
            sourceId,
            targetId,
            message
        }
        console.log(body)
        axios.post(url, body).then((response) => {
            const result = response.data
            setMessage('')
            if (result['status'] == 'success') {
                console.log(result['data'])
                toast.success('successfully added a message')

                // refreshing the blog details
                getMessages()
            }
        })
    }
    
    // const messagesEndRef = useRef(null)
    // const scrollToBottom = () => {
    //     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    //   }
    

    useEffect(() => {
       
        getMessages()
        // scrollToBottom()
    }, [])


    return (
        <div className="col">
            <div className="row " 
            style={{ overflow: "scroll", height: "60vh" }} 
            >
                {messages.map((listOfMessages) => {
                    return <MyMessages messages={listOfMessages} />
                })}
                 {/* <div ref={messagesEndRef} /> */}
            </div>

            <div className="row" >
                <textarea
                    onChange={(e) => {
                        setMessage(e.target.value)
                    }}
                    type="text"
                    className="form-style"
                    placeholder="First Name"
                />
                <button className="btn mt-2" onClick={sendMessage}  >send</button>

            </div>
        </div>
    )


}

export default Chat