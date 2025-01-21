import React, { useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';

export default function AboutSection() {

    const navigate = useNavigate();
    const contactpage = ()=>{
      navigate("/contact")
    }

    return (
        <>
        <div>
        <h1>About Us</h1>  
        <button onClick={() => contactpage()}>Click here to Contact page</button> 
        <button onClick={() =>{ navigate(-1);}}>Go Back</button> 
      </div>
      <Outlet/>
      </>
    )
}