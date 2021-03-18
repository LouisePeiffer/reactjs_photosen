import React,{ Fragment } from 'react'
import { NavLink } from 'react-router-dom'

export default function Navigation() {
    return (
        <Fragment>
            <div className="divNavLink">
                <NavLink to='/' className="navlink">Home</NavLink>
                <NavLink to='/gallery1' className="navlink">Gallery <i class="fas fa-angle-down"></i></NavLink>
                <NavLink to='/' className="navlink">Services</NavLink>
                <NavLink to='/' className="navlink">About</NavLink>
                <NavLink to='/contact' className="navlink">Contact</NavLink>
            </div>
        </Fragment>
    )
}
