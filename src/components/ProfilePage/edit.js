import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { useLocation } from 'react-router'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useNavigate } from 'react-router'
import { URL } from '../../config'
// import './profileedit.css'

export default function Edit(props) {
    // const { user } = props
    const { state } = useLocation()

    const currentUserId = sessionStorage['user_id']
    

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [bio, setBio] = useState('')
    const [birthDate, setBirthDate] = useState('')
    const [city, setCity] = useState('')
    const [statee, setStatee] = useState('')
    const [country, setCountry] = useState('')
    const [postalCode, setPostalCode] = useState(0)
    const [gender, setGender] = useState(0)
    const [profileImageUrl, setProfileImageUrl] = useState(0)
    const navigate = useNavigate()

    const editprofile = () => {
        const body = {
            firstName,
            lastName,
            email,
            phone,
            birthDate,
            city,
            country,
            postalCode,
            bio,
            gender,
            profileImageUrl
        }
        body['state'] = statee

        console.log(body)
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

    //Profile Image Add


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
                    if(response['status']==201){
                        toast.success('Uploaded Profile Attachment')
                        const a = response["data"]
                        console.log(a)
                        setProfileImageUrl(a.publicURL)
                        console.log(profileImageUrl)
                    }
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        []
    );

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });




    useEffect(() => {
        const { user } = state
        console.log(user)
        setFirstName(user.firstName)
        setLastName(user.lastName)
        setEmail(user.email)
        setPhone(user.phone)
        setBio(user.bio)
        setBirthDate(user.birthDate)
        setCity(user.city)
        setStatee(user.state)
        setCountry(user.country)
        setPostalCode(user.postalCode)
        setGender(user.gender)
        setProfileImageUrl(user.profileImageUrl)
    }, [])


    return (

        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div className="form">
                            <div className="row">
                                <div className="col">
                                    <div className="mb-3">
                                        <input type="text" placeholder='First Name' className="form-control" value={firstName} onChange={(e) => {
                                            setFirstName(e.target.value)
                                        }} />
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="mb-3">
                                        <input type="text" placeholder='Last Name' className="form-control" value={lastName} onChange={(e) => {
                                            setLastName(e.target.value)
                                        }} />
                                    </div>
                                </div>
                            </div>

                            <div className="mb-3">
                                <input type="text" placeholder='Email Address' className="form-control" value={email} onChange={(e) => {
                                    setEmail(e.target.value)
                                }} />
                            </div>
                            <div className="mb-3">
                                <input type="number" placeholder='Phone' className="form-control" value={phone} onChange={(e) => {
                                    setPhone(e.target.value)
                                }} />
                            </div>
                            <div className="mb-3">
                                <input type="text" placeholder='City' className="form-control" value={city} onChange={(e) => {
                                    setCity(e.target.value)
                                }} />
                            </div>
                            <div className="mb-3">
                                <input type="text" placeholder='State' className="form-control" value={state} onChange={(e) => {
                                    setStatee(e.target.value)
                                }} />
                            </div>
                            <div className="mb-3">
                                <input type="text" placeholder='Country' className="form-control" value={country} onChange={(e) => {
                                    setCountry(e.target.value)
                                }} />
                            </div>
                            <div className="mb-3">
                                <input type="number" placeholder='Postal Code' className="form-control" value={postalCode} onChange={(e) => {
                                    setPostalCode(e.target.value)
                                }} />
                            </div>
                            <div className="row">
                                <label htmlFor="" className="label-control">Date of birth</label>
                                <div className="col">
                                    <div className="mb-3">
                                        <input type="date" placeholder='Date Of Birth' className="form-control" value={birthDate} onChange={(e) => {
                                            setBirthDate(e.target.value)
                                        }} />
                                    </div>
                                </div>
                                <div className="col">
                                    <div class="input-group mb-3">
                                        <label class="input-group-text" for="inputGroupSelect01">Gender</label>
                                        <select class="form-select" id="inputGroupSelect01">
                                            <option selected>Choose...</option>
                                            <option value="1">Male</option>
                                            <option value="2">Female</option>
                                            <option value="3">Other</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <input type="text" placeholder='Bio' className="form-control" value={bio} onChange={(e) => {
                                    setBio(e.target.value)
                                }} />
                            </div>


                         
                            

                            <div className="mb-3 d-inline-flex flex-column align-items-center">
                                <button className="btn btn-success col-6" onClick={editprofile}>Save</button>
                            </div>

                          
                        </div>
                        <div className="col"></div>

                        {/* { navigate('/editProfile', { state: { user: user } }) } */}
                        {/* <Edit user={user}/> */}
                    </div>
                    {/* <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Understood</button>
                                </div> */}
                </div>
            </div>
        </div>



    )
}
