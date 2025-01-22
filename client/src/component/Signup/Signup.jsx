import React from "react";
import Header from "../Homepage/Header";
import Footer from "../Homepage/Footer";
import signimg from "../../assets/signup.png"; 
import axios from "axios";  // Import axios for API requests
import { useNavigate,Link } from "react-router-dom";
import logo from "../../assets/logo.png"; 

export default function Signup () {
    const navigate = useNavigate();
    const handleSubmit = async (event) => {
        event.preventDefault();
        if(event.target.password.value !== event.target.confirmPassword.value){
            alert("Password Mismatch");
        }
        else{
            const data = {
                firstName: event.target.firstName.value,
                lastName: event.target.lastName.value,
                contactNo: event.target.contactNo.value,
                whatsappNo: event.target.whatsappNo.value,
                email: event.target.email.value,
                state: event.target.state.value,
                referralCode: event.target.referralCode.value,
                password: event.target.password.value,
              };
          
              try {
                await axios.post('http://localhost:3000/api/signup', data);
                alert('User Registered Successfully');
                navigate('/login')

              } catch (error) {
                alert('Failed to register user');
              }
        }
        
      };
    
  return (
    <div>
        <Header />
   
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden max-w-5xl w-full">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src={signimg}
            alt="Sign Up"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 p-6 bg-blue-900 text-white mt-5">
          <h2 className="text-2xl font-bold text-center mb-4">Sign up</h2>
          <p className="text-sm text-center mb-6">
            Fill in your credentials and click on the Sign up button
          </p>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="firstName" className="block text-sm mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full p-2 rounded border border-gray-300 text-gray-900"
                  placeholder="First Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full p-2 rounded border border-gray-300 text-gray-900"
                  placeholder="Last Name"
                  required
                />
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="contactNo" className="block text-sm mb-1">
                Contact No
              </label>
              <input
                type="number"
                id="contactNo"
                className="w-full p-2 rounded border border-gray-300 text-gray-900"
                placeholder="Contact Number"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="whatsappNo" className="block text-sm mb-1">
                WhatsApp No
              </label>
              <input
                type="number"
                id="whatsappNo"
                className="w-full p-2 rounded border border-gray-300 text-gray-900"
                placeholder="WhatsApp Number"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2 rounded border border-gray-300 text-gray-900"
                placeholder="Email Address"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="state" className="block text-sm mb-1">
                State
              </label>
              <input
                type="text"
                id="state"
                className="w-full p-2 rounded border border-gray-300 text-gray-900"
                placeholder="State"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="referralCode" className="block text-sm mb-1">
                Referral Code
              </label>
              <input
                type="text"
                id="referralCode"
                className="w-full p-2 rounded border border-gray-300 text-gray-900"
                placeholder="Referral Code"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-sm mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full p-2 rounded border border-gray-300 text-gray-900"
                placeholder="Password"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="confirmPassword" className="block text-sm mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                className="w-full p-2 rounded border border-gray-300 text-gray-900"
                placeholder="Confirm Password"
                required
              />
            </div>

            <div className="flex items-center mb-6">
              <input
                type="checkbox"
                id="terms"
                className="mr-2 w-4 h-4"
                checked
                readOnly
              />
              <label htmlFor="terms" className="text-sm">
                I agree to the{" "}
                <span className="underline">Terms and Conditions</span> and{" "}
                <span className="underline">Privacy Policy</span>.
              </label>
            </div>

            <div className="flex gap-4">
              <button
                type="submit"
                className="w-full py-2 px-4 bg-green-500 text-white font-bold rounded hover:bg-green-600"
              >
                Register
              </button>
              <button
                type="button"
                className="w-full py-2 px-4 bg-black text-white font-bold rounded hover:bg-gray-800"
              >
                <Link to='/login'>Login</Link>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

<Footer imgsrc={logo}/>
    </div>
  );
};

