import { Link } from 'react-router-dom'
import { useState } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useNavigate } from 'react-router'
 import { URL } from '../../config'
 import { validEmail, validPassword } from './regex.js';
import Header from '../../components/Master/Header/header'
import Sidebar from '../../components/Master/LeftBar/Sidebar'


const AddAdmin = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const navigate = useNavigate()


  const cancel=()=>{
    navigate('/admin')
}


  const addAdmin = () => {

    if (firstName.length == 0) {
      toast.warning('Please enter first name')
    } else if (lastName.length == 0) {
      toast.warning('Please enter last name')
    } 
    else if (!validEmail.test(email)) {
      toast.warning('Please enter valid email')
   }
  else  if (!validPassword.test(password)) {
    toast.warning('Please set password with combiation of Letters and Numbers ')
   }else if (email.length == 0) {
      toast.warning('Please enter email')
    } else if (password.length == 0) {
      toast.warning('Please enter password')
    } else if (confirmPassword.length == 0) {
      toast.warning('Please confirm your password')
    } else if (password != confirmPassword) {
      toast.warning('Password does not match')
    } else {
      const body = {
        firstName,
        lastName,
        email,
        password,
      }

      // url to call the api
      const url = `${URL}/addAdmin`

      // http method: post
      // body: contains the data to be sent to the API
      axios.post(url, body).then((response) => {
        // get the data from the response
        const result = response.data
        console.log(result)
        if (result['status'] == 'success') {
          toast.success('Successfully Added New Admin')

          // props.parentCallback1()
          // navigate to the signin page
          navigate('/admin')
        } else {
          toast.error(result['error'])
        }
      })
    }
  }

  return (
    <div className="container-fluid ">
    <Header />

    <div class="container-fluid pt-5 row mx-0 bkclr">
      <div class="col-sm-3 px-0 " > <Sidebar /></div>

      
      <div class="col-sm-9 pt-3" style={{backgroundImage: "linear-gradient(#3b3a3a, #212529,black )"}}>
      <div className="row">
       <h1>Enter New Admin Details</h1>
        <div className="col pt-3">
          <div className="form">
            <div className="mb-3">
             
              <input
                onChange={(e) => {
                  setFirstName(e.target.value)
                }}
                type="text"
                className="form-style"
                placeholder="First Name"
              />
            </div>

            <div className="mb-3">
            
              <input
                onChange={(e) => {
                  setLastName(e.target.value)
                }}
                type="text"
                className="form-style"
                placeholder="Last Name"
              />
            </div>

            <div className="mb-3">
            
              <input
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
                type="text"
                className="form-style"
                placeholder="Email Address"
              />
            </div>

            <div className="mb-3">
            
              <input
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
                type="password"
                className="form-style"
                placeholder="Password"
              />
            </div>

            <div className="mb-3">
             
              <input
                onChange={(e) => {
                  setConfirmPassword(e.target.value)
                }}
                type="password"
                className="form-style"
                placeholder="Confirm Password"
              />
            </div>

            <div className="mb-3">
              <button onClick={addAdmin} className="btn btn-primary">
                Add
              </button>
              <button onClick={cancel} className="btn btn-primary mx-3">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
    </div>
  )
}

export default AddAdmin
