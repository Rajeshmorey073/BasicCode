import { Link } from 'react-router-dom'
import { useState } from 'react'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useNavigate } from 'react-router'
 import { URL } from '../../config'
 import './index.css'
 import { validEmail, validPassword } from './regex.js';


const Signup = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const navigate = useNavigate()

  const signupUser = () => {

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
      const url = `${URL}/signup`

      // http method: post
      // body: contains the data to be sent to the API
      axios.post(url, body).then((response) => {
        // get the data from the response
        const result = response.data
        console.log(result)
        if (result['status'] == 'success') {
          toast.success('Successfully signed up new user')

          // props.parentCallback1()
          // navigate to the signin page
          navigate('/')
        } else {
          toast.error(result['error'])
        }
      })
    }
  }

  return (
    <div>
      

      <div className="row">
       
        <div className="col">
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
              <button onClick={signupUser} className="btn btn-primary">
                Signup
              </button>
            </div>
          </div>
        </div>
      
      </div>
    </div>
  )
}

export default Signup
