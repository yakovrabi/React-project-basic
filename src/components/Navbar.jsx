import React from "react"
import hevra from '../images/airbnb-logo.png'

export default function Navbar() {
    return (
        <nav>
            <img src={hevra} className="nav--logo" />
        </nav>
    )
}