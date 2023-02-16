import React from 'react'
import RegisterForm from '../../components/RegisterForm/RegisterForm'
import Title from '../../components/Title/Title'

export default function Register() {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center">
        <span className="pt-10">
          <Title />
        </span>
      </div>
      <div className="flex justify-center mt-52">
        <div className="p-11 bg-opacity-90 rounded-xl bg-blue-500">
          <RegisterForm />
        </div>
      </div>
    </div>
  )
}
