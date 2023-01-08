import { useState } from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useNavigate } from 'react-router'
 import { URL } from '../../config'

const Signin = (props) => {
  console.log(props)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const signinUser = () => {
   
    if (email.length == 0) {
      toast.warning('please enter email')
    } else if (password.length == 0) {
      toast.warning('please enter password')
    } else {
      const body = {
        email,
        password,
      }

      // url to make signin api call
      const url = `${URL}/signin`
      let i = 0;
      // make api call using axios
      axios.post(url, body).then((response) => {
        // get the server result
        const result = response.data
        console.log(result)
        if (result['status'] == 'success') {
          toast.success('Welcome to the application')

          // get the data sent by server
          const { id, firstName, lastName,role,profileImageUrl } = result['data']

          // persist the logged in user's information for future use
          sessionStorage['user_id'] = id
          console.log(id)
          sessionStorage['firstName'] = firstName
          sessionStorage['lastName'] = lastName
          sessionStorage['loginStatus'] = 1
          // sessionStorage['state'] = state
          sessionStorage['role'] = role
          sessionStorage['profileImageUrl']=profileImageUrl

          props.parentCallback()
          // navigate to home component
          navigate('/home')
        } else {
          toast.error('Invalid Email or password')
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
                  setEmail(e.target.value)
                }}
                type="email"
                className="form-style"
                placeholder="Email address"
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
              <button onClick={signinUser} className="btn btn-primary">
                Signin
              </button>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default Signin