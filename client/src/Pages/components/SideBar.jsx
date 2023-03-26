import React from 'react';
import { useDispatch } from "react-redux";
import { logoutUser } from '../../Redux/actions/loginSignUp.action'; 

const SideBar = () => {
  const dispatch = useDispatch();

  const handleLogout = async () => { 
    await dispatch(logoutUser())
    window.location.reload()
  }

  return (
    <div className="flex flex-col h-screen bg-gray-200 w-48 pt-8">
      <ul className="flex-1">
        <li className="px-6 py-2 hover:bg-gray-300 cursor-pointer">Explore</li>
        <li className="px-6 py-2 hover:bg-gray-300 cursor-pointer">My Cars</li>
      </ul>
      <div className="pb-4">
        <li onClick={handleLogout} className="px-6 py-2 hover:bg-gray-300 cursor-pointer">logout</li>
      </div>
    </div>
  );
};

export default SideBar