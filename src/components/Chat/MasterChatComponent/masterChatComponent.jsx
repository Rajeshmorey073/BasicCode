
import "./masterChat.css";
// import FriendMessage from "../ChatContent/friendMessage"
// import MyMessage from "../ChatContent/myMessages"
import Chat from "../ChatContent/Chat"
import Sidebar from "../../Master/LeftBar/Sidebar";
import FriendListHome from "../../Home/FriendList/friendlist";
import { useEffect, useState} from 'react'
import axios from 'axios'
import { URL } from '../../../config'
import MyMessages from '../ChatContent/MyMessages'

import "./chatContent.css";

import { toast } from 'react-toastify'
const ChatBody = () => {

  const [messages, setMessages] = useState([])
  const [message, setMessage] = useState([])
  const sourceId = sessionStorage['user_id']
  let targetId = 0

  const getMessages = () => {
    targetId = sessionStorage['chatTargetId']
    // targetId=2
    const url = `${URL}/getMessage`
    const body = {
      sourceId,
      targetId
    }
    axios.post(url, body).then((response) => {
      const result = response.data

      if (result['status'] == 'success') {
        setMessages(result['data'])
        console.log(messages)
       
      }
    })
  }
 

  const sendMessage = () => {
    if (message.length == 0) {
      toast.warning('please enter message')
    } else {

      targetId = sessionStorage['chatTargetId']
      // targetId=2
      const url = `${URL}/message`
      const body = {
        sourceId,
        targetId,
        message
      }
      axios.post(url, body).then((response) => {
        const result = response.data
       
        if (result['status'] == 'success') {
          toast.success('successfully added a message')
          // refreshing the blog details
          getMessages()
          setMessage('')
        }
      })
    }
  }


  useEffect(() => {
    getMessages()
    // window.setInterval(getMessages, 1000);
    // scrollToBottom()
  }, [])

  return (
    <div class="container-fluid pt-5 row  mx-0 bkclr">
      <div class="col-sm-3 px-0 " > <Sidebar /></div>

      <div class="col-sm-9 " style={{backgroundImage: "linear-gradient(#3b3a3a, #212529,black )"}}>
        <div className="row ">

          <div class="row ">
            <div class="col-sm-8 px-5">
              {/* <Chat /> */}
              <div className="col">
                <h2 className="mb-4">{sessionStorage['chatFriendName']}</h2>
                <div className="row  "
                  style={{ overflow: "scroll", height: "60vh" , overflow:" hidden"}}
                >
                  {messages.map((message) => {
                    return <MyMessages messages={message} />
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
                    placeholder="Send Message"
                  />
                  <button className="btn mt-2" onClick={sendMessage}  >send</button>

                </div>
              </div>
            </div>
            <div class="col-sm-4" style={{ paddingTop: 70 }}  >
              <FriendListHome getMessages={getMessages} />
            </div>

          </div>

        </div>

      </div>
    </div>

  );
};

export default ChatBody;
