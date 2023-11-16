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
                <label htmlFor="">Firstname</label>
                <input type="text" name='firstname' />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp