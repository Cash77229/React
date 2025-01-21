import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import HeroSection from '../hero/HeroSection'

const Contact = () => {

    const navigate = useNavigate()

    const heroSection = () => {
          navigate('/')
    }

    return (
        <>

            <div>
                <h1>Contact Us</h1>
                <button onClick={() => heroSection()}>Go To HOME PAGE</button>

            </div>

            <Outlet />
        </>
    )
}

export default Contact
