import SearchBar from "./searchBar"
import { useNavigate } from "react-router";
import {
  FaCog
} from "react-icons/fa";
import { Link } from "react-router-dom";
const Header = () =>{
  //fixed-top

  const navigate = useNavigate();

  const logoutUser = () => {
    // remove the logged users details from session storage
    sessionStorage.removeItem('id')
    sessionStorage.removeItem('firstName')
    sessionStorage.removeItem('lastName')
    sessionStorage.removeItem('loginStatus')

    // navigate to sign in component
    navigate('/')
  }

return(

    <div>
      <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark"  style={{backgroundImage: "linear-gradient(black, #212529, #3b3a3a)"}}>   
        <div class="container-fluid">
          <a class="navbar-brand " href="/home" style={{color:"#ffeba7",fontWeight:500}}> PiczBook</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0" >
              

              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/home">Home</a>
              </li>

              <li class="nav-item">
              <Link to="/chat" className="nav-link active">Chat</Link>
              </li>

              <li class="nav-item">
              <Link to="/friends" className="nav-link active">Friends</Link>
              </li>

              <li class="nav-item">
              <Link to="/trending" className="nav-link active">Trending</Link>
              </li>

              <li class="nav-item">
              <Link to="/recommendations" className="nav-link active">Recommendations</Link>
              </li>

             
             
              <li class="nav-item dropdown" >
                <a class="nav-link dropdown-toggle"    href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Settings
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item"  href="/profile">Profile</a></li>
                  <li><a class="dropdown-item" type="button" onClick={logoutUser}>Logout</a></li>
                  
                </ul>
              </li>
             
            </ul>
            <form class="d-flex">
              <input class="form-control rounded-pill me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button class="btn btn-sm btn-outline-success rounded-pill me-3" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>

    // <div className="bg-primary p-3 mb-3 row">
    //   <div className="col-3">
    //      {/* <Profile /> */}
    //   </div>
    //   <div className="col">
    //     <SearchBar />
    //   </div>
    //   <div className="col-3">
    //     profile/settings
    //   </div>
    // </div>
 

)

}

export default Header;