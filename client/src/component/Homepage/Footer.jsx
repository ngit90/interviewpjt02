import React from 'react'
import './Homepage.css'
import logo from "../../assets/logo.png"; 

export default function Footer() {
  return (
    <div>
<footer className="footer bg-gray-900 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {/* Footer Logo Section */}
        <div className="footer-logo">
          <img src={logo} alt="NEXUS VENTURES" className="w-32 mb-4" />
          <p className="text-sm">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum,
            eligendi, voluptatibus deleniti ipsum officiis alias ex impedit.
          </p>
        </div>

        {/* Important Links Section */}
        <div className="footer-links">
          <h4 className="text-lg font-semibold mb-4">Important Links</h4>
          <ul className="space-y-2">
            <li>
              <a href="#contact" className="hover:text-gray-400">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#privacy" className="hover:text-gray-400">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links Section */}
        <div className="social-links">
          <h4 className="text-lg font-semibold mb-4">Terms & Conditions</h4>
          <p className="text-sm mb-4">Contact Support</p>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-gray-400"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-gray-400"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-gray-400"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://skype.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-gray-400"
            >
              <i className="fab fa-skype"></i>
            </a>
          </div>
        </div>
      </div>
 {/* Footer Bottom Section */}
    </footer>
    <div className=" copy w-full border-t border-gray-700  text-center text-sm">
    Copyright © {new Date().getFullYear()} Nexus Ventures. All Rights Reserved. 
   </div>
   </div>
  )
}
