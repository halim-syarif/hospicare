import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import { setErrorMessage, userLogin } from "../store/actions/userAction";

import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
  const history = useHistory()
  const dispatch = useDispatch()
  const { isLogin, isLoading, errorMessage } = useSelector(state => state.userState)
  const [payload, setPayload] = useState({
    email: '',
    password: ''
  })

  useEffect(() => {
    if(isLogin || localStorage.getItem('access_token')){ 
      history.push('/home')
    }
    // eslint-disable-next-line
  }, [isLogin])

  useEffect(() => {
    if(errorMessage !== ''){
      toast.warn(errorMessage, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark'
      })
      dispatch(setErrorMessage(''))
    }
  }, [errorMessage])

  function inputHandle(e){
    setPayload({
      ...payload,
      [e.target.name]: e.target.value
    })
  }

  function loginHandle(e){
    e.preventDefault()
    dispatch(userLogin(payload))
  }

  return (
    <>
      <ToastContainer />
      <div className="container mx-auto mt-24 px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <div className="text-blueGray-400 text-center mb-3 mt-10 font-bold">
                  <div>Sign in with credentials</div>
                </div>
                <form onSubmit={(e) => loginHandle(e)}>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Email
                    </label>
                    <input
                      onChange={(e) => inputHandle(e)}
                      name="email"
                      type="email"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Email"
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Password
                    </label>
                    <input
                      onChange={(e) => inputHandle(e)}
                      name="password"
                      type="password"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Password"
                    />
                  </div>
                  <div>
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        id="customCheckLogin"
                        type="checkbox"
                        className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                      />
                      <span className="ml-2 text-sm font-semibold text-blueGray-600">
                        Remember me
                      </span>
                    </label>
                  </div>

                  <div className="text-center mt-6">
                    <button
                      className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="submit"
                    >
                      Sign In
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
