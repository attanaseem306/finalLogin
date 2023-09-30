'use client'
import { useState } from "react"
import signIn from "../config/Singin"
import { auth } from "firebase/auth"
import {  useRouter } from "next/navigation"

export default function Login() {
  const [Email, SetEmail] = useState('')
  const [Password, SetPassword] = useState('')
  const rout=useRouter()

  const Loginbtn = async () => {
    

    if (Email != '' || Password != '') {
      const { result, error } = await signIn(Email, Password)

      if (result) {
        alert('Use Login Succefully')
        rout.replace('/')
      }

      else {

        alert(error.message)
        rout.replace('/SignUp')
      }

    }
    else if (Email == '' || Password == '') {
      alert("plz fill the input")
    }

  }

  return (

    <div className="container flex  justi px-5 py-24 mx-auto ">
      <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
        <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Login</h2>
        <div className="relative mb-4">
          <label className="leading-7 text-sm text-gray-600">Email</label>
          <input type="email" onChange={(e) => SetEmail(e.target.value)} placeholder="Email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        </div>
        <div>
          <label className="leading-7 mt-6 text-sm text-gray-600">Password</label>
          <input placeholder="Password" onChange={(e) => SetPassword(e.target.value)} type="Password" id="Password" name="Password" className=" w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        </div>

        <button onClick={Loginbtn} className="text-white bg-indigo-500 border-0 mt-6 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Login</button>
        <p className="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
      </div>
    </div>
  )
}