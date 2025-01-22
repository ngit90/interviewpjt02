import React from 'react'
import Footer from '../Homepage/Footer';
import logo2 from "../../assets/logo2.png"; 
import loginp from "../../assets/loginpage.png"; 
import { useDispatch } from 'react-redux';
import { logouts } from "../../redux/authslice";
import { useNavigate } from 'react-router-dom';

export default function Videopage() {
    const dispatch = useDispatch();
    const Navigate = useNavigate();
const videos = [1,2,3,4,5,6,7,8,9,10,11,12];
const handleclick = ()=>{
    dispatch(logouts());
    Navigate('/');
}
    
  return (
    <div className="min-h-screen bg-gray-100">
    <header className="bg-blue-900 text-white p-4 flex justify-between items-center">
         <div>
            <img src={logo2} alt="PASIL"/></div>
      <div>
        <button className="bg-blue-700 px-4 py-2 rounded mr-2">My Videos</button>
        <button className="bg-yellow-500 px-4 py-2 rounded">Virton Plus</button>
        <button className="ml-2 text-sm" onClick={handleclick}>Sign Out</button>
      </div>
    </header>

    <div className="p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {videos.map((video, index) => (
         <div
         key={index}
         className="bg-white rounded shadow overflow-hidden hover:shadow-lg transition-shadow duration-300">
         <img
           src={loginp}
           alt="Video Name"
           className="w-full h-60 sm:h-48 md:h-52 lg:h-40 object-cover"
         />
         <div className="p-4">
           <h2 className="text-base sm:text-lg md:text-xl font-bold truncate">
             Video Title
           </h2>
           <p className="text-gray-600 text-xs sm:text-sm md:text-base truncate">
             Video Author
           </p>
         </div>
       </div>
        ))}
      </div>
    </div>

   <Footer imgsrc={logo2}/>
  </div>
  )
}
