//Friends List Individual Component On HomePage
import {
    Chat
} from "@material-ui/icons";


//Recieving Friends from /Home/FriendList/friendlist

const ChatFriendComponentForRightSideBar = (props) => {

    const { friend, getMessages } = props
    return (
        <div >

            <div class="card " style={{
                textAlign: "start"
            }}>

                <li class="list-group-item " style={{
                    backgroundColor: "rgb(59, 58, 58)",
                    color: "#f0f8ff",
                    backgroundImage: "linear-gradient(#3b3a3a,#4c4949)"
                         }}>
                             {/* {friend.firstName}  {friend.lastName} */}

                    {/* <a href="" style={{ float: "right", height: 20, width: 30 }}><Chat style={{ color: "#ffeba7" }} />
                    </a> */}
                    {/* <button className = "btn" onClick={ sessionStorage['chatTargetId'] = friend.id;
                                                        getMessages();
                                                        }>ahyweruyhwe</button>
                     */}
                     <button className="btn" onClick={() => {   sessionStorage['chatTargetId'] = friend.id;
                                                                sessionStorage['chatFriendName'] = friend.firstName +" "+ friend.lastName;
                                                                getMessages()
                                                            }}>{friend.firstName}  {friend.lastName}</button>

                </li>

            </div>
        </div>
    )

}
export default ChatFriendComponentForRightSideBar