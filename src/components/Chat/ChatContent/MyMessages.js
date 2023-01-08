import { useEffect, useState } from 'react'
import moment from 'moment'
const MyMessage = (props) => {
    const currentUserId = sessionStorage['user_id']
    const currentFirstName = sessionStorage['firstName']
    const { messages } = props
    const [userMessage, setUserMessage] = useState([])
    const [rightMessage, setRightMessage] = useState(false)
    // console.log(messages.message)
    // //const currentUserId = sessionStorage['user_id']
    // const messagesOfSourceId = () => {


    //     if (messages.sourceId.id == currentUserId) {

    //         setUserMessage(messages.message)
    //         console.log(userMessage)
    //     }
    // }

    const usermessage = {
        title: {
            fontSize: '15px',
            fontWeight: 'bold',
            float: rightMessage ? "right" : "left",
            textAlign: rightMessage ? "right" : "left",
        },
        name: {

            fontSize: '10px'
        },
        messageTime: {
            color: 'darkgray',
            fontSize: '10px'
        },
    }
    const messageAlign = () => {
        if (messages.sourceId.id == currentUserId) {
            setRightMessage(true)
        }
    }


    useEffect(() => {
        // messagesOfSourceId()
        messageAlign()
    }, [])

    return (
        <div>
            {/* {messages  && messages.sourceId.id ==currentUserId  &&(
          
           <div className="row">
            <div class="card" style={{ textAlign: "right" }}>
                <div class="card-body">
                    {messages.message}
                    <br/>
                    {moment(messages.createdTimestamp).fromNow()}
                </div>
            </div>
            </div>
        
            )} */}

            <div className="row">
                <div class="card" 
                style={{ height: '40px' }}
                >
                    <div class="card-body">


                        <p style={usermessage.title}>

                            <p style={usermessage.name}>{messages.sourceId.firstName} : {messages.message}</p>



                            <p style={usermessage.messageTime}> {moment(messages.createdTimestamp).fromNow()}</p>

                        </p>
                    </div>
                </div>

            </div>
    
        </div>
    )
}

export default MyMessage