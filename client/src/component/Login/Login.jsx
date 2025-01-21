import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Homepage/Footer";
import axios from "axios";  // Import axios for API requests
import Header from "../Homepage/Header";

export default function Login() {
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
        const data = {
            email: event.target.email.value,
            password: event.target.password.value,
          };
      
          try {
            const response = await axios.post('http://localhost:3000/api/login', data);
            console.log(response.data.token);

            alert('Login Successfully');
            localStorage.setItem("token",response.data.token)
            navigate('/userdash')

          } catch (error) {
            alert('Failed to Login');
          }
  };
    return (
        <div>
            <Header />

    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex w-3/4 max-w-5xl bg-white rounded-lg shadow-lg">
        {/* Left Side - Image */}
        <div className="w-1/2">
          <img
            src="/src/assets/loginpage.png" // Update with your image path
            alt="Login"
            className="object-cover w-full h-full rounded-l-lg"
          />
        </div>

        {/* Right Side - Form */}
        <div className="w-1/2 p-8 bg-blue-900 text-white rounded-r-lg">
          <h2 className="mb-6 text-3xl font-bold text-center">Login</h2>
          <p className="mb-6 text-center">
            Fill in your credentials and click on the Login button
          </p>
          <form onSubmit={handleSubmit}>
            {/* Username Field */}
            <div className="mb-4">
              <label htmlFor="username" className="block mb-1 text-sm">
                User Name
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your Email ID"
                  className="w-full px-4 py-2 text-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <span className="absolute top-2 right-4 text-gray-400">
                  {/* Icon (Optional) */}
                  <i className="fas fa-user"></i>
                </span>
              </div>
            </div>

            {/* Password Field */}
            <div className="mb-4">
              <label htmlFor="password" className="block mb-1 text-sm">
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-2 text-gray-900 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <span className="absolute top-2 right-4 text-gray-400">
                  {/* Icon (Optional) */}
                  <i className="fas fa-lock"></i>
                </span>
              </div>
              <div className="mt-1 text-right text-sm">
                <a href="#" className="text-blue-300 hover:underline">
                  Forgot Password?
                </a>
              </div>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full py-2 mb-4 font-bold text-blue-900 bg-white rounded hover:bg-gray-200"
            >
              Login
            </button>
          </form>

          {/* Sign Up Link */}
          <div className="text-center text-sm">
            Don’t have an account?{" "}
            <Link to="/signup" className="font-bold text-blue-300 hover:underline">
                Sign Up
            </Link>
        
          </div>
        </div>
      </div>
    </div>

<Footer />
    </div>
  );
}


