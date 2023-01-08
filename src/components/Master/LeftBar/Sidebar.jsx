import "./sidebar.css";
import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  PersonOutline,
  PeopleAltOutlined,
  School
} from "@material-ui/icons";
import { Link } from "react-router-dom";


export default function Sidebar() {
 
  
  const userName = sessionStorage['firstName']
  return (
    <div className="sidebar hideSidebar  px-0" style={{backgroundImage: "linear-gradient(#3b3a3a, #212529,black )", overflow:" hidden"}}>
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <School className="sidebarIcon" />
            <Link to="/addPost" className="sbtn" style={{ height: 80, backgroundColor: "#a58313" }} >Add Post</Link>
          </li>
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <Link to="/home" className="sbtn">Home</Link>
          </li>
          <li className="sidebarListItem">
            <Chat className="sidebarIcon" />
            <Link to="/chat" className="sbtn">Chat</Link>
          </li>
          <li className="sidebarListItem">
            <PlayCircleFilledOutlined className="sidebarIcon" />
            <Link to="/trending" className="sbtn">Trending</Link>
          </li>
          <li className="sidebarListItem">
            <PeopleAltOutlined className="sidebarIcon" />
            <Link to="/recommendations" className="sbtn">Recommendations</Link>
          </li>
          <li className="sidebarListItem">
            <Group className="sidebarIcon" />
            <a>
              <Link to="/friends" className="sbtn">Friends</Link>
            </a>
          </li>
          {sessionStorage['role'] == 'admin' && (<li className="sidebarListItem">
            <Group className="sidebarIcon" />
            <a>
              <Link to="/admin" className="sbtn">Admin Dashboard</Link>
            </a>
          </li>)
          
        }


        </ul>
        <PersonOutline className="sidebarIcon" />
        <Link to="/profile " className="sbtn" style={{ height: 80, backgroundColor: "#a58313" }} >{userName}  </Link>

      </div>
    </div>

  );
}
