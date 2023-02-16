import React from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import Title from '../../components/Title/Title'

export default function Login() {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center">
        <span className="pt-10">
          <Title />
        </span>
      </div>
      <div className="flex justify-center mt-52">
        <div className="p-11 bg-opacity-90 rounded-xl bg-blue-500">
          <LoginForm />
        </div>
      </div>
    </div>
  )
}
