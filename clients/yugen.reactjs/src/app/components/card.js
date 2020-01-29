import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Card (props) {
    let classNames = "card book-card"
    let output = <img src="https://via.placeholder.com/900x900?text=Default" alt="default" />
    if(props.action !== undefined)
    {
        return <div className={classNames}><button className="action-btn" title="Add Card Action">+</button></div>
    }
    output = props.img !== undefined ? <img src={props.img} alt="cover" /> : output
    return <NavLink to="/about">
        <div className={classNames}>
            {output}
        </div>
    </NavLink>
}