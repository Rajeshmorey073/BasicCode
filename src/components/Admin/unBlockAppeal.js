import React from 'react'
import Header from '../Master/Header/header'
import Sidebar from '../Master/LeftBar/Sidebar'

const UnBlockAppeal = () => {

    // const getAppeal = () => {
    //     const url = `${URL}/posts/reported/${currentUserId}`
    //     let temp = null

    //     axios.get(url).then((response) => {
    //         const result = response.data
    //         if (result['status'] == 'success') {
               
    //         }
    //     })
    // }

  return (
    <div className="container-fluid px-0">
            <Header />
        <div class="container-fluid pt-5 row mx-0 bkclr">
            <div class="col-sm-3  " > <Sidebar /></div>

            <div class="col-sm-9">

               <h1>UnBlockAppeal</h1>
            </div>

        </div>
</div>
  )
}

export default UnBlockAppeal