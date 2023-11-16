import React,{useState, useEffect} from 'react'
import { FaSignInAlt } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import Spinner from '../../components/Spinner'


interface SignInFormData{
    email: string;
    password: string
}

const SignInForm = () => {
    const [formData, setFormData] = useState<SignInFormData>({
        email:'',
        password:''
      })

      const {email, password} = formData
  return (
    <>
        <div>
            <div className='container-fluid'>
              <div className='row'>
                <div className='shadow col-6 mx-auto'>
                  <h1> <FaSignInAlt/> Login </h1>

                  <form action="">
                    <label htmlFor="">Email</label>
                    <input type="email" name='email'
                     className='form-control my-2' />

                     <label htmlFor="">Password</label>
                     <input type="password" name='password' 
                      className='form-control my-2'/>
                  </form>
                </div>
              </div>
            </div>
        </div>
    </>
  )
}

export default SignInForm