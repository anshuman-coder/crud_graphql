import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux"
import { SignUpUser } from '../Redux/actions/loginSignUp.action';

const initialForm = {
  fullName: "",
  email: "",
  password: ""
};

const SignUp = () => {

  //initializing the states
  const [formData, setFormData] = useState(initialForm);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //form data change function
  const handleFormChange = (e) => { 
    setFormData({
      ...formData,
      [`${e.target.id}`]: e.target.value
    })
  }

  //form submit handler
  const handleFormSubmit = async (e) => { 
    e.preventDefault();
    await dispatch(SignUpUser(formData));
    navigate("/");
  }
  

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md">
        <form
          className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4"
          onChange={handleFormChange}
          onSubmit={handleFormSubmit}
        >
          <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="fullName">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="fullName"
              type="text"
              placeholder="Enter your name"
              value={formData["fullName"]}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your Email"
              value={formData["email"]}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Enter your password"
              value={formData["password"]}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign Up
            </button>
            <Link
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              to="/login"
            >
              Already have an account!
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp