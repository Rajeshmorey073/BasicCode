import Signin from './components/Signin'
import Signup from './components/Signup'
import Index from './pages/Index'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Home from './pages/Home'
import Admin from './pages/Admin/admin'
import ProfilePage from './pages/Profile'
import Post2 from './components/ProfilePage/ProfileContent/post2'
import Chat from './pages/Chat'
import Trending from './pages/Trending'
import Friends from './pages/Friends'
import AddPost from './pages/AddPost'
import EditProfile from './pages/EditProfile'
import EditProfileBody from './components/EditProfile/editProfile'
import EditPost from './components/EditPost/editPost'
import AddComment from './pages/Comment'
import Recommendations from './pages/Recommendations'
import ReportedPosts from './components/Admin/reportedposts'
import BlockedUsers from './components/Admin/blockedusers'
import UnBlockAppeal from './components/Admin/unBlockAppeal'
import OtherProfilePage from './pages/OtherProfile'
import AddAdmin from './pages/Admin/addAdmin'
const AuthorizeUser = () => {
  const loginStatus = sessionStorage['loginStatus']
  console.log(loginStatus)
  return loginStatus == '1'? <Home /> : <Index />
}

function App() {
  return (
    <div className="container-fluid " >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthorizeUser /> } />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/addPost" element={<AddPost />} />
          <Route path="/comments" element={<AddComment />} />
          <Route path="/recommendations" element={<Recommendations />} />
          <Route path="/profile" element={<ProfilePage />} />
          {/* <Route path="/editProfile" element={<EditProfile />} /> */}
          <Route path="/home/editPost" element={<EditPost />} />
          <Route path="/editprofile1" element={<EditProfile />} />
          <Route path="/loadpostdetails" element={<Post2 />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/reportedposts" element={<ReportedPosts />} />
          <Route path="/blockedusers" element={<BlockedUsers />} />
          <Route path="/unblockappeal" element={<UnBlockAppeal />} />
          <Route path="/otherProfile" element={<OtherProfilePage />} />
          <Route path="/addAdmin" element={<AddAdmin />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer theme="colored" />
    </div>
  )
}

export default App

