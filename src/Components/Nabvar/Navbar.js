import React from 'react'
import './navbar.css'
export const Navbar = () => {
    return (
        <div className='navMain'>
            <nav className="navbar px-5">
                <div className="container-fluid">
                    <a className="navbar-brand nav-logo">Jobseekr.com</a>

                    <div className='d-flex'>
                        <button className="btn btn-danger mx-2" >Recruiter Login</button>
                        <button className="btn btn-outline-success mx-2" >Jobseeker Login</button>
                    </div>
                </div>
            </nav>
        </div>
    )
}
