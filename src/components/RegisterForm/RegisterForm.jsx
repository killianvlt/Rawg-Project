/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-use-before-define */
import React from 'react'
import { useForm } from 'react-hook-form'
import ButtonLinkTo from '../ButtonLinkTo/ButtonLinkTo'

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    getValues,
    watch,
    formState: { errors, isValid },
  } = useForm({ mode: 'onChange' })

  const onSubmit = (data) => console.log(data)

  return (
    <form className="flex flex-col w-96" onSubmit={handleSubmit(onSubmit)}>
      <input
        className="h-12 mt-4 bg-transparent outline-none border-b-2 border-b-slate-900 text-slate-900 placeholder-slate-900"
        type="email"
        name="email"
        placeholder="Email"
        {...register('email', {
          required: true,
          pattern: {
            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            message: 'Email must be valide !',
          },
        })}
      />
      {errors.email?.message && <span>{errors.email?.message}</span>}
      <input
        className="h-12 mt-4 bg-transparent outline-none border-b-2 border-b-slate-900 text-slate-900 placeholder-slate-900"
        type="password"
        name="password"
        placeholder="Password"
        {...register('password', {
          required: true,
          maxLength: 30,
          minLength: 6,
          pattern: {
            value:
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{6,30}$/,
            message:
              'Password must have at least one special character and one number',
          },
        })}
      />
      {errors.password?.message && <span>{errors.password?.message}</span>}
      <input
        className="h-12 mt-4 bg-transparent outline-none border-b-2 border-b-slate-900 text-slate-900 placeholder-slate-900"
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        {...register('confirmPassword', {
          required: true,
          validate: (value) => value === getValues('password'),
        })}
      />
      {errors.confirmPassword && errors.confirmPassword.type === 'validate' && (
        <div>Passwords do not match</div>
      )}
      <button
        className="w-full h-12 bg-slate-800 text-white mt-8 disabled:opacity-25"
        type="submit"
        disabled={!isValid}
      >
        Register
      </button>
      <div className="flex flex-row justify-between mt-4">
        <h2>You have an account ?</h2>
        <ButtonLinkTo
          cssClass="text-white duration-150 hover:text-slate-800"
          name="Login"
          route="/login"
        />
      </div>
    </form>
  )
}
