import { Link } from "react-router-dom"
import Header from "../../components/Master/Header/header"
import Sidebar from "../../components/Master/LeftBar/Sidebar"
import { useNavigate } from "react-router"
import './admin.css'



const Admin = () => {
    const navigate = useNavigate()
    const reportedposts = () => {
        navigate('/reportedposts')
    }

    const blockedUsers = () => {
        navigate('/blockedusers')
    }

    const unblockAppeal=()=>{
        navigate('/unblockAppeal')
    }

    const addAdmin=()=>{
        navigate('/addAdmin')
    }

    return (
        <div className="container-fluid ">
            <Header />

            <div class="container-fluid pt-5 row mx-0 bkclr">
                <div class="col-sm-3 px-0 " > <Sidebar /></div>
                <div class="col-sm-9 pt-4 " style={{ backgroundImage: "linear-gradient(#3b3a3a, #212529,black )" }}>
                   
                   <div className="row"><h1>Admin DashBoard</h1></div>
                    <div className="row pt-4 ">
                        {/* <div>
                         <button className="btn mr-0 ml-auto " onClick={addAdmin} style={{ alignContent: "flex-end", width: "150px" }}>Add Admin</button>
                     </div> */}
                     </div>



                    <div className="row mx-5 pt-5 mt-5 " >
                        <div className="col ">
                            <div class="card" style={{ width: "18rem", backgroundImage: "linear-gradient(black, #212529, #3b3a3a)" }}>
                                <div class="card-body">
                                    <h5 class="card-title">Reported Posts </h5>

                                    <p class="card-text">View,Delete or Allow user reported posts</p>

                                    <button className="btn" onClick={reportedposts}>View Reported Posts</button>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div class="card" style={{ width: "18rem", backgroundImage: "linear-gradient(black, #212529, #3b3a3a)" }}>
                                <div class="card-body">
                                    <h5 class="card-title">Blocked Users </h5>

                                    <p class="card-text">Blocked users based on their post activity</p>

                                    <button className="btn" onClick={blockedUsers}>View Blocked Users</button>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div class="card" style={{ width: "18rem", backgroundImage: "linear-gradient(black, #212529, #3b3a3a)" }}>
                                <div class="card-body">
                                    <h5 class="card-title">Add new Admin </h5>

                                    <p class="card-text">Add a new admin for efficient moderation</p>

                                    <button className="btn" onClick={addAdmin}>Add Admin</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )






}

export default Admin