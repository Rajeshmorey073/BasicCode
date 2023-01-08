import {
    SendOutlined,
    AttachFileOutlined,
} from "@material-ui/icons";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import { toast } from "react-toastify"
import { Navigate, useNavigate } from "react-router"
import { URL } from "../../../config";

//Add Post Fiend On Home Page
//1row--2cols:--1st col:--Add Post Details text area /Add Attachment Button
//~~~~~~~~~~~~~~2ns col:--Add Tags /Add Post Button

const AddPost = (props) => {
    const { loadPostDetails } = props
    const [attachmentUrl, setAttachmentUrl] = useState('')

    const userId = sessionStorage['user_id']
    const [details, setDetails] = useState('')
    const [tags, setTags] = useState('')

    const navigate = useNavigate()


    const onDrop = useCallback(
        (acceptedFiles) => {
            const file = acceptedFiles[0];

            const formData = new FormData();
            formData.append("file", file);

            axios
                .post(
                    `${URL}/postAttachment`,
                    formData,
                    {
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    }
                )
                .then((response) => {
                    console.log("file uploaded successfully");
                    console.log(response)
                    if (response['status'] == 201) {
                        toast.success('Uploaded Post Attachment')
                        const a = response["data"]
                        console.log(a)
                        setAttachmentUrl(a.publicURL)
                        console.log(attachmentUrl)
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        []
    );

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    let result = null
    const addPost = () => {

        const url = `${URL}/posts/add`
        const body = {
            details,
            userId,
            attachmentUrl,
            tags,
        }

        axios.post(url, body).then((response) => {
            result = response.data
            if (result['status'] == 'success') {
                toast.success('Added new post!')
                console.log(result.data)
                document.getElementById("clear").value = ""
                setDetails("")
                setTags("")
                loadPostDetails()
            } else {
                toast.error('Error Adding POst')
            }
        })
    }


    return (
        <div className="row mb-3 pt-5 ">
            <img src={`${attachmentUrl}`} class="card-img-top" />
            <div id="clear" className="col-8"> <textarea
                type="text"
                className="form-style"
                placeholder="Add Post~Details"
                onChange={(e) => {
                    setDetails(e.target.value)
                }}
            />
                
                <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    {isDragActive ? (
                        <p>Drop the image here ...</p>
                    ) : (
                        <button className="btn">Upload Image</button>
                    )}
                </div>
            </div>


            <div id="clear" className="col-4"> <textarea
                type="text"
                className="form-style"
                placeholder="Add Tags"
                onChange={(e) => {
                    setTags(e.target.value)
                }}
            />
                <button className="btn" onClick={addPost} style={{ float: "right" }}>Add Post  <SendOutlined /></button>
            </div>

        </div>)
}
export default AddPost