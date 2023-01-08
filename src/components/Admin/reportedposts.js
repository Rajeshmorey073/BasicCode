import axios from "axios"
import { useEffect, useState } from 'react'
import Post2 from "../ProfilePage/ProfileContent/post2"
import { URL } from "../../config"
import Sidebar from "../Master/LeftBar/Sidebar"
import Header from "../Master/Header/header"

const ReportedPosts = () => {
    const currentUserId = sessionStorage['user_id']
    const [reportedPostList, setReportedPostList] = useState([])
    const [likedPostList, setLikedPostList] = useState([])


    const getReportedPosts = () => {
        const url = `${URL}/posts/reported/${currentUserId}`
        let temp = null

        axios.get(url).then((response) => {
            const result = response.data
            if (result['status'] == 'success') {
                temp = result['data']
                console.log(result['data'])
                setReportedPostList(temp['feed'])
                setLikedPostList(temp['likedPostsMap'])
            }
        })
    }



    useEffect(() => {
        getReportedPosts()
    }, [])


    return (
<div className="container-fluid px-0">
            <Header />
        <div class="container-fluid pt-5 row mx-0 bkclr">
            <div class="col-sm-3  " > <Sidebar /></div>

            <div class="col-sm-9">

                <div class="row  ">
                    <h1 className="pt-4">Reported Posts</h1>
                    <div class="col-sm">
                    </div>
                    <div class="col-sm-8"  >
                        <div>
                            {reportedPostList.map((post) => {
                                if (likedPostList[post.id] == 1)
                                    post.likeStatus = true
                                else
                                    post.likeStatus = false
                                return <Post2 post={post}  getReportedPosts={getReportedPosts}/>
                            })
                            }
                        </div>

                    </div>
                    <div class="col-sm">
                    </div>
                </div>

            </div>

        </div>
</div>


    )
}
export default ReportedPosts
