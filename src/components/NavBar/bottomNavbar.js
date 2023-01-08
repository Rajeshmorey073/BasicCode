const BottomNavbar = () => {
    return (
        <div>
            {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">                     */}
                    <div className="navbar-nav d-flex flex-row gap-5" style={{fontSize: "11px"}}>                  
                            <a className="nav-link text-secondary" href="#">About us</a>
                            <a className="nav-link text-secondary" href="#">Terms of Service</a>
                            <a className="nav-link text-secondary" href="#">Help Center</a>
                            <a className="nav-link text-secondary" href="#">Privacy Policy</a>
                    </div>
            {/* </nav> */}
        </div>
    )
}

export default BottomNavbar