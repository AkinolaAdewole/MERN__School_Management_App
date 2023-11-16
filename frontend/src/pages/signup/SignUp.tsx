import React, { useState } from 'react'


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

  return (
    <>
      <div>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-6 shadow-sm mx-auto'>

              <form action="">

                <label htmlFor="" className='form-control my-2'>Firstname</label>
                <input type="text" name='firstname' 
                  className='form-control my-2' 
                  value={formData.firstname} />

                <label htmlFor="">Lastname</label>
                <input type="text" name='lastname' 
                  className='form-control my-2'
                  value={formData.lastname}/>

                  <label htmlFor="">Email</label>
                  <input type="text" name='email' 
                    className='form-control my-2'
                    value={formData.email}/>

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

export default SignUp