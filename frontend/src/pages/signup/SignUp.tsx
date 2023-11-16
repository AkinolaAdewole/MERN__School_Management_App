import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'
import {FaUser} from 'react-icons/fa'
import Spinner from '../../components/Spinner';


interface SignUpForm{
    firstname: string;
    lastname: string;
    email: string;
    password: string
}
const SignUp = () => {
    const [formData, setFormData]= useState<SignUpForm>({
        firstname:'',
        lastname:'',
        email:'',
        password:''
    })

    const { firstname, lastname, email, password} = formData

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }))
    }


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log(formData);
      // Other form submission logic
    };
    

  return (
    <>
      <div>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-6 shadow-sm mx-auto'>
              <h2><FaUser/> Register</h2>

              <form action=""  onSubmit={handleSubmit}>

                <label htmlFor="">Firstname</label>
                <input type="text" name='firstname' 
                  className='form-control my-2' 
                  value={firstname} onChange={onChange} />

                <label htmlFor="">Lastname</label>
                <input type="text" name='lastname' 
                  className='form-control my-2'
                  value={lastname} onChange={onChange}/>

                  <label htmlFor="">Email</label>
                  <input type="text" name='email' 
                    className='form-control my-2'
                    value={email} onChange={onChange}/>

                  <label htmlFor="">Password</label>
                  <input type="password" name='password'
                    className='form-control my-2'
                    value={password} onChange={onChange}/>

                  <input type="checkbox" className=' my-2' />

                  <div>
                    <button className='my-2'>SUBMIT</button>
                  </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp