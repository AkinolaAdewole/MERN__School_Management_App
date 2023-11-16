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

      const onChange=(e: React.ChangeEvent<HTMLInputElement>)=>{}

      const handleSubmit=(e: React.FormEvent<HTMLFormElement>)=>{}

  return (
    <>
        <div>
            <div className='container-fluid'>
              <div className='row'>
                <div className='shadow col-6 mx-auto'>
                  <h2> <FaSignInAlt/> Login </h2>

                  <form action="" onSubmit={handleSubmit}>
                    <label htmlFor="">Email</label>
                    <input type="email" name='email' value={email}
                     className='form-control my-2' onChange={onChange} />

                     <label htmlFor="">Password</label>
                     <input type="password" name='password' value={password} 
                      className='form-control my-2' onChange={onChange}/>
                  </form>
                </div>
              </div>
            </div>
        </div>
    </>
  )
}

export default SignInForm