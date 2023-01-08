import { URL } from "../../config"
import axios from "axios"
import { useEffect, useState } from 'react'
import { toast } from "react-toastify"
import { Navigate, useLocation, useNavigate } from "react-router"
import Sidebar from "../Master/LeftBar/Sidebar"
import Header from "../Master/Header/header"
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

const EditPost = () => {
    // const { user } = props
    const { state } = useLocation()
    const { postId } = state
    console.log(postId)
    const navigate = useNavigate()
    const userId = sessionStorage['user_id']

    const [details, setDetails] = useState('')
    const [tags, setTags] = useState('')
    const [attachmentUrl, setAttachmentUrl] = useState('')

    const getPostData = () => {
        const url = `${URL}/postById/${postId}`

        axios.get(url).then((response) => {
            const result = response.data
            if (result['status'] == 'success') {
                const post = result['data']
                console.log(result['data'])
                // console.log(user)
                setDetails(post.details)
                setTags(post.tags)
                setAttachmentUrl(post.attachmentUrl)
            } else {
                toast.error(result['error'])
            }
        })
    }

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

    const editPost = () => {
        if (details.length == 0)
            toast.error("Enter details!!!")
        const body = {
            userId,
            details,
            attachmentUrl,
            tags
        }
        // body['state'] = statee

        // url to call the api
        const url = `${URL}/posts/edit/${postId}`

        // http method: post
        // body: contains the data to be sent to the API
        axios.put(url, body).then((response) => {
            // get the data from the response
            const result = response.data
            if (result['status'] == 'success') {
                toast.success('Successfully Edited Post')
                navigate('/home')
            } else {
                toast.error(result['error'])
            }
        })
    }

    const cancel = () => {
        navigate('/home')
    }

    useEffect(() => {
        getPostData()
    }, [])

    return (
        <div>
            <div className="container-fluid ">
                <Header />

                <div class="container-fluid pt-5 row  bkclr">
                    <div class="col-sm-3  " > <Sidebar /></div>

                    <div class="col-sm-9">

                        <div class="row  ">
                            <h1 className="pt-4">Edit Post</h1>
                            <div class="col-sm">
                            </div>
                            <div class="col-sm-8"  >

                                <div>
                                    <textarea
                                        id="" cols="30" rows="10"
                                        className="form-style mt-3"
                                        value={details}
                                        onChange={(e) => {
                                            setDetails(e.target.value)
                                        }}

                                        placeholder="Details" />

                                    <input
                                        type="text"
                                        className="form-style mt-3"
                                        value={tags}
                                        onChange={(e) => {
                                            setTags(e.target.value)
                                        }}
                                        placeholder="Tags" />
                                    <img src={`${attachmentUrl}`} class="card-img-top" />
                                    <div {...getRootProps()}>
                                        <input {...getInputProps()} />
                                        {isDragActive ? (
                                            <p>Drop the image here ...</p>
                                        ) : (
                                            <button className="btn">Upload Image</button>
                                        )}
                                    </div>

                                    <button className="btn mt-3" onClick={editPost} style={{ float: "right" }} >Edit Post</button>
                                    <button className="btn mt-3" onClick={cancel} style={{ float: "right" }} >cancel</button>

                                </div>

                            </div>
                            <div class="col-sm">
                            </div>
                        </div>
                    </div>

                </div>



            </div>
        </div>
    )
}

export default EditPost