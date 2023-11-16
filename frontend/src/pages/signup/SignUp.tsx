import React, { useState } from 'react'


interface SignUpForm{
    firstname: string;
    lastname: string;
    email: string;
    password: string
}
const SignUp = () => {
    const [formData, setFormData]= useState({
        firstname:'',
        lastname:'',
        email:'',
        password:''
    })

  return (
    <>SignUp</>
  )
}

export default SignUp