import { URL } from "../../config"
import axios from "axios"
import { useEffect, useState } from 'react'
import { toast } from "react-toastify"
import { Navigate, useLocation, useNavigate } from "react-router"
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import Sidebar from "../Master/LeftBar/Sidebar"
import Header from "../Master/Header/header"

const EditProfileBody = (props) => {
    // const { user } = props
    const navigate = useNavigate()
    const currentUserId = sessionStorage['user_id']

    const [user, setUser] = useState([])

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [bio, setBio] = useState('')
    const [birthDate, setBirthDate] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [country, setCountry] = useState('')
    const [postalCode, setPostalCode] = useState(0)
    const [gender, setGender] = useState(0)
    const [profileImageUrl, setProfileImageUrl] = useState('')

    const getUserData = () => {
        const url = `${URL}/profile/${currentUserId}`

        axios.get(url).then((response) => {
            const result = response.data
            if (result['status'] == 'success') {
                const user = result['data']
                console.log(result['data'])
                // console.log(user)
                setFirstName(user.firstName)
                setLastName(user.lastName)
                setEmail(user.email)
                setPhone(user.phone)
                setBio(user.bio)
                setBirthDate(user.birthDate)
                setCity(user.city)
                setState(user.state)
                setCountry(user.country)
                setPostalCode(user.postalCode)
                setGender(user.gender)
            } else {
                toast.error(result['error'])
            }
        })
    }

    const editprofile = () => {
        if (gender == 3)
            toast.error("Enter gender as M/F/O")
        const body = {
            firstName,
            lastName,
            email,
            phone,
            birthDate,
            city,
            state,
            country,
            postalCode,
            bio,
            gender,
            profileImageUrl
        }
        // body['state'] = statee

        // url to call the api
        const url = `${URL}/profile/edit/${currentUserId}`

        // http method: post
        // body: contains the data to be sent to the API
        axios.put(url, body).then((response) => {
            // get the data from the response
            const result = response.data
            if (result['status'] == 'success') {
                toast.success('Successfully Edited Profile')
                navigate('/profile')
            } else {
                toast.error(result['error'])
            }
        })
    }




    //Add Profile Image

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
                        toast.success('Uploaded Profile Attachment')
                        const a = response["data"]
                        console.log(a)
                        setProfileImageUrl(a.publicURL)
                        console.log(profileImageUrl)
                        sessionStorage['profileImageUrl']=profileImageUrl
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        []
    );

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });


    const cancel = () => {
        navigate('/profile')
    }

    useEffect(() => {
        getUserData()
    }, [])

    return (
       
           

                <div class="container-fluid pt-5 row mx-0 bkclr">
                    <div class="col-sm-3  " > <Sidebar /></div>

                    <div class="col-sm-9 pt-5 " >

                        <div className="form">
                            <div className="row">
                                <div className="col">
                                    <div className="mb-3">
                                        <input type="text" placeholder='First Name' className="form-style" value={firstName} onChange={(e) => {
                                            setFirstName(e.target.value)
                                        }} />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="mb-3">
                                        <input type="text" placeholder='Last Name' className="form-style" value={lastName} onChange={(e) => {
                                            setLastName(e.target.value)
                                        }} />
                                    </div>
                                </div>
                            </div>

                            <div className="mb-3">
                                <input type="text" placeholder='Email Address' className="form-style" value={email} onChange={(e) => {
                                    setEmail(e.target.value)
                                }} />
                            </div>
                            <div className="mb-3">
                                <input type="number" placeholder='Phone' className="form-style" value={phone} onChange={(e) => {
                                    setPhone(e.target.value)
                                }} />
                            </div>
                            <div className="mb-3">
                                <input type="text" placeholder='City' className="form-style" value={city} onChange={(e) => {
                                    setCity(e.target.value)
                                }} />
                            </div>
                            <div className="mb-3">
                                <input type="text" placeholder='State' className="form-style" value={state} onChange={(e) => {
                                    setState(e.target.value)
                                }} />
                            </div>
                            <div className="mb-3">
                                <input type="text" placeholder='Country' className="form-style" value={country} onChange={(e) => {
                                    setCountry(e.target.value)
                                }} />
                            </div>
                            <div className="mb-3">
                                <input type="number" placeholder='Postal Code' className="form-style" value={postalCode} onChange={(e) => {
                                    setPostalCode(e.target.value)
                                }} />
                            </div>
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="" className="label-control">Date of birth</label>
                                    <div className="mb-3">
                                        <input type="date" placeholder='Date Of Birth' className="form-style" value={birthDate} onChange={(e) => {
                                            setBirthDate(e.target.value)
                                        }} />
                                    </div>
                                </div>
                                <div className="col mb-3">
                                    <label htmlFor="" className="label-control">Gender</label>
                                    <input type="text" placeholder='Gender' className="form-style" value={gender ? "M" : "F"}
                                        onChange={(e) => {
                                            if (e.target.value == "M") setGender(1);
                                            if (e.target.value == "F") setGender(0);
                                            if (e.target.value == "O") setGender(2);
                                            else setGender(3);

                                        }} />
                                </div>
                            </div>
                            <div className="mb-3">
                                <input type="text" placeholder='Bio' className="form-style" value={bio} onChange={(e) => {
                                    setBio(e.target.value)
                                }} />
                            </div>
                            <div className="mb-3">
                                <div {...getRootProps()}>
                                    <input {...getInputProps()} />
                                    {isDragActive ? (
                                        <p>Drop the image here ...</p>
                                    ) : (
                                        <button className="btn">Upload Profile Image</button>
                                    )}
                                </div>
                            </div>
                            <div className="mb-3 d-inline-flex flex-column align-items-center">
                                <button className="btn btn-success col-6" onClick={editprofile}>Save</button>
                            </div>
                            <div className="mb-3 d-inline-flex flex-column align-items-center">
                                <button className="btn btn-danger col-6" onClick={cancel}>Cancel</button>
                            </div>
                        </div>
                    </div>

                </div>



           
     
    )
}

export default EditProfileBody