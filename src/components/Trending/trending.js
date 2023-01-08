import axios from "axios"
import { useEffect, useState } from 'react'
import Post2 from "../ProfilePage/ProfileContent/post2"
import { URL } from "../../config"
import Sidebar from "../Master/LeftBar/Sidebar"

const TrendingPosts = () => {
    const currentUserId = sessionStorage['user_id']
    const [postList, setPostList] = useState([])
    const [likedPostList, setLikedPostList] = useState([])


    const getTrendingPosts = () => {
        const url = `${URL}/trendingPosts/${currentUserId}`
        let temp = null

        axios.get(url).then((response) => {
            const result = response.data
            if (result['status'] == 'success') {
                temp = result['data']
                setPostList(temp['feed'])
                setLikedPostList(temp['likedPostsMap'])
            }
        })
    }



    useEffect(() => {
        getTrendingPosts()
    }, [])


    return (

        <div class="container-fluid pt-5 row mx-0 bkclr">
            <div class="col-sm-3 px-0 " > <Sidebar /></div>

            <div class="col-sm-9" style={{backgroundImage: "linear-gradient(#3b3a3a, #212529,black )"}} >

                <div class="row  ">
                    <h1 className="pt-4">Trending Posts</h1>
                    <div class="col-sm">
                    </div>
                    <div class="col-sm-8"  >
                        <div>
                            {postList.map((post) => {
                                if (likedPostList[post.id] == 1)
                                    post.likeStatus = true
                                else
                                    post.likeStatus = false
                                return <Post2 post={post} />
                            })
                            }
                        </div>

                    </div>
                    <div class="col-sm">
                    </div>
                </div>

            </div>

        </div>



    )
}
export default TrendingPosts
