/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react'
import Alert from '../Alert/Alert'
import ButtonLinkTo from '../ButtonLinkTo/ButtonLinkTo'

export default function LoginForm() {
  return (
    <form className="flex flex-col">
      <input
        className="h-12 mt-4 bg-transparent outline-none border-b-2 border-b-slate-900 text-slate-900 placeholder-slate-900"
        type="text"
        name="emailInput"
        placeholder="Email"
      />
      <input
        className="h-12 mt-4 bg-transparent outline-none border-b-2 border-b-slate-900 text-slate-900 placeholder-slate-900"
        type="password"
        name="passwordInput"
        placeholder="Password"
      />

      <button
        className="w-80 h-12 bg-slate-800 text-white mt-8 disabled:opacity-25"
        type="submit"
      >
        Login
      </button>
      <div className="flex flex-row justify-between mt-4">
        <h2>You don't have an account ?</h2>
        <ButtonLinkTo
          cssClass="text-white duration-150 hover:text-slate-800"
          name="Register"
          route="/register"
        />
      </div>
    </form>
  )
}
