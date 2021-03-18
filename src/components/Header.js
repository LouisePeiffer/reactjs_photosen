import React from 'react'
import Navigation from './Navigation'

export default function Header() {
    return (
        <div className="header">
            <h1 className="photosen">Photosen</h1>
            <Navigation/>
            <div className="divIcones">
                <a href=""><i class="fab fa-facebook-f"></i></a>
                <a href=""><i class="fab fa-twitter"></i></a>
                <a href=""><i class="fab fa-instagram"></i></a>
                <a href=""><i class="fab fa-youtube"></i></a>
            </div>
        </div>
    )
}
