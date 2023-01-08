
import './index.css'
import BottomNavbar from '../../components/NavBar/bottomNavbar'
import Signin from "../../components/Signin";
import Signup from "../../components/Signup";
import { useState } from 'react';


const Index = () => {
    const [isShow, showModal] = useState(false);


    const handleCallback = () => {
        showModal(false);
    };
    return (
        <div>

            <div className="row">
                <div className="col-sm-8 pt-0 px-0">
                    <img src="./index.jpg"
                        alt="" style={{ width: "100%", height: "98vh" }} />
                        <h1 className='first-txt  '  >Welcome to</h1>
                       <div className='geeks  '> <h1   >PiczBook</h1></div>
                       <div className='geeks1  '> <h1   >Think, Explore, Connect</h1></div>

                </div>
                <div className="col-sm-4 d-flex flex-column gap-1 justify-content-between align-items-center d-grid mx-auto"
                    style={{ backgroundColor: "#232323" }}
                >
                    <div className="mt-3"></div>
                    <div className="mt-5 d-grid col-6 mx-auto">
                        <button type="button" onClick={() => showModal(true)} className="btn btn-outline-success rounded-pill mb-1" data-bs-toggle="modal" data-bs-target="#exampleModal1">
                            Sign In
                        </button>
                        ${isShow ? (
                        <div className={`modal fade show`} id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true" style={{display: 'block',backgroundColor: '#00000085'}}>
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header" style={{ backgroundColor: "#abb0c7" }}>
                                        <h1 className="modal-title fw-5" id="exampleModalLabel1">Sign In</h1>
                                        <button type="button" onClick={() => showModal(false)} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body" style={{ backgroundColor: "#abb0c7" }} >
                                        <Signin parentCallback={handleCallback} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        ): <div/>}
                        <hr />
                    
                        <p className="text-center text-secondary"> Already have An Account?</p>

                        <button type="button" className="btn btn-outline-success rounded-pill mb-1" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Sign up
                        </button>

                        <div className="modal" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header" style={{ backgroundColor: "#abb0c7" }}>
                                        <h1 className="modal-title fw-5" id="exampleModalLabel">Sign Up</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body" style={{ backgroundColor: "#abb0c7" }} >
                                        <Signup />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p style={{ fontSize: "11px", color: "#c4c3ca" }}>By signing up, you agree to the <a href="#"
                            className="text-decoration-none" style={{ color: "#ffeba7" }}>Terms of Service</a> and <a href="#" className="text-decoration-none" style={{ color: "#ffeba7" }}>
                                Privacy Policy</a>, including <a href="#" className="text-decoration-none" style={{ color: "#ffeba7" }}>Cookie Use</a>.</p>
                    </div>

                    <BottomNavbar />
                </div>
            </div>
        </div>

    )


}




export default Index;