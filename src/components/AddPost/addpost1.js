// Libs
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import { URL } from "../../config";

import { toast } from "react-toastify";
import { Navigate, useNavigate } from "react-router";
import Sidebar from "../Master/LeftBar/Sidebar";

const Dropzone = () => {
  const [attachmentUrl, setAttachmentUrl] = useState("");

  const userId = sessionStorage["user_id"];
  const [details, setDetails] = useState("");
  const [tags, setTags] = useState("");

  const navigate = useNavigate();

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];

    const formData = new FormData();
    formData.append("file", file);

    axios
      .post(`${URL}/postAttachment`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log("file uploaded successfully");
        console.log(response);
        if (response["status"] == 201) {
          toast.success("Uploaded Post Attachment");
          const a = response["data"];
          console.log(a);
          setAttachmentUrl(a.publicURL);
          console.log(attachmentUrl);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  let result = null;
  const addPost = () => {
    const url = `${URL}/posts/add`;
    const body = {
      details,
      userId,
      attachmentUrl,
      tags,
    };

    axios.post(url, body).then((response) => {
      result = response.data;
      if (result["status"] == "success") {
        toast.success("Added new post!");
        console.log(result.data);
        navigate("/home");
      } else {
        toast.error("Error Adding POst");
      }
    });
  };
  return (
    <div class="container-fluid pt-5 row mx-0  bkclr">
      <div class="col-sm-3 px-0 ">
        {" "}
        <Sidebar />
      </div>

      <div
        class="col-sm-9"
        style={{ backgroundImage: "linear-gradient(#3b3a3a, #212529,black )" }}
      >
        <div class="row  ">
          <h1 className="pt-4">Add Post</h1>
          <div class="col-sm"></div>
          <div class="col-sm-8">
            <div class="card">
              <img src={`${attachmentUrl}`} class="card-img-top"/>
              <div class="card-body">
                <textarea
                  id=""
                  cols="30"
                  rows="10"
                  className="form-style mt-3"
                  onChange={(e) => {
                    setDetails(e.target.value);
                  }}
                  placeholder="Details"
                />
                <input
                  type="text"
                  className="form-style mt-3"
                  onChange={(e) => {
                    setTags(e.target.value);
                  }}
                  placeholder="Tags"
                />

                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  {isDragActive ? (
                    <p>Drop the image here ...</p>
                  ) : (
                    <button className="btn mt-3"style={{ float: "left" }}>Upload Image</button>
                  )}

                  <button
                    className="btn mt-3"
                    onClick={addPost}
                    style={{ float: "right" }}
                  >
                    Add Post
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm"></div>
        </div>
      </div>
    </div>
  );
};

export default Dropzone;
