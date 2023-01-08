import Header from "../../components/Master/Header/header";
import Sidebar from "../../components/Master/LeftBar/Sidebar";
import Comments from "../../components/Comments/comments";

const AddComment = () => {
  return (

    <div className="container-fluid ">
                <Header />

                <div class="container-fluid pt-5 row  bkclr">
                    <div class="col-sm-3  " > <Sidebar /></div>

                    <div class="col-sm-9" style={{backgroundImage: "linear-gradient(#3b3a3a, #212529,black )"}}>

                        <Comments/>
                    </div>

                </div>



            </div>
    
  );
};

export default AddComment;
