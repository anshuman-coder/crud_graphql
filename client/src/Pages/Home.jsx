import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom"

const Home = () => {

  const navigate = useNavigate();
  useEffect(() => { 
    //checking the token
    const localKey = process.env.REACT_APP_LOCAL;
    const user = JSON.parse(localStorage.getItem(localKey))
    console.log(user)
    if (!user?.token) { 
      return navigate("/login");
    }
  })

  return (
    <div>Home</div>
  )
}

export default Home