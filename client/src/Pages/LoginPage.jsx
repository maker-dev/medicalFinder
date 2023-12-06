import React from 'react'
import Navbar from "../Components/ui/Navbar";
import Text  from '../Components/inputs/Text';
import Password from '../Components/inputs/Password';
import Button from '../Components/inputs/Button';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';

function LoginPage() {
  return (
    <>

      <Navbar />
      <div className="h-screen flex items-center my-4">
        <div className="w-full max-w-md mx-auto">
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 ">
            <h1 className="text-center font-black text-4xl">Login</h1>
            <h2 className="text-center  text-xl mt-2 mb-4">Welcome Back !</h2> 
            <div className="mb-4">
              <Text
                type="email"
                size="full"
                name="email"
                placeholder="E-mail*"
              />
            </div>
            <div className="mb-4">
              <Password 
              name="password"
              placeholder="Password*" />
            </div>
            
    <div className="mb-4 flex items-center">
        <a href="#" className="text-main-400 hover:underline">Forgot password?</a>
    </div>
    <div className="flex items-center justify-between">
      <Button text="Login"></Button>
    </div>
    <div className="inline-flex items-center justify-center w-full">
    <hr className="w-full h-px my-8 bg-slate-900 border-0 "/>
    <span className="absolute  rounded-full text-xs p-2 text-center font-medium text-white -translate-x-1/2 bg-slate-900 left-1/2 ">
      OR</span>
    </div>
    <div className="grid w-full place-items-center mb-4">
    <div className=" flex space-x-6">
       {/* facebook */}
    <button
  type="button"
  data-te-ripple-init
  data-te-ripple-color="light"
  className="mb-2 inline-block bg-blue-700 rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
  >
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4"
    fill="white"
    viewBox="0 0 24 24">
    <path
      d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
  </svg>
</button>
 {/* google */}
<button
  type="button"
  data-te-ripple-init
  data-te-ripple-color="light"
  className="mb-2 inline-block bg-red-600 rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4"
    fill="white"
    viewBox="0 0 24 24">
    <path
      d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
      fillRule="evenodd"
      clipRule="evenodd" />
  </svg>
</button>
 {/* linkdin */}
<button
  type="button"
  data-te-ripple-init
  data-te-ripple-color="light"
  className="mb-2 inline-block bg-blue-500 rounded px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
  >
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4"
    fill="white"
    viewBox="0 0 24 24">
    <path
      d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
  </svg>
</button>
</div>
    </div>
    <h2 className="ms-2 text-sm text-center ">Don't have an account ? <Link to="/register" className="text-main-400 hover:underline">Sign up</Link></h2>

  </form>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default LoginPage