import React from "react"
import kochav from '../images/star.png'
import makom from '../images/01Pisa.jpg'

export default function Card() {
    return (
        <div className="card">
            <img src={makom} className="card--image" />
            <div className="card--stats">
                <img src={kochav} className="card--star" />
                <span> 5.0 </span>
                <span className="gray">(6) • </span>
                <span className="gray">Italy</span>
            </div>
            <p>Come and see Pisa Tower</p>
            <p><span className="bold">From $136</span> / person</p>
        </div>
    )
}

/* 
const Card = () => {
    return (
        <div className="card">
            <img src={makom} className="card--image" />
            <div className="card--stats">
                <img src={kochav} className="card--star" />
                <span> 5.0 </span>
                <span className="gray">(6) • </span>
                <span className="gray">Italy</span>
            </div>
            <p>Come and see Pisa Tower</p>
            <p><span className="bold">From $136</span> / person</p>
        </div>
    )
}

export default Card */