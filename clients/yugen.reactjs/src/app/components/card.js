import React from 'react'
import { Link } from '@reach/router'

const Card = ({ action, img, cardType, ...props}) => {
    let classNames = "card"
    let output = <img src="https://via.placeholder.com/900x900?text=Default" alt="default" />
    output = img !== undefined ? <img src={img} alt="cover" /> : output
    return <Link to="/about">
            <div className={classNames + " " + cardType}>
            <figure>
                {output}
            {/* Can only handle 14 characters on small screen, 24 on large */}
                <figcaption>Some Caption s</figcaption>
            </figure>
            </div>
    </Link>
}

export default Card



// let classNames = "card book-card"
// if(props.action !== undefined)
// {
//     return <div className={classNames}><button className="action-btn" title="Add Card Action">+</button></div>
// }

// let output = "https://via.placeholder.com/900x900?text=Default"
// output = props.img !== undefined ? props.img : output

// return (
// <div className="card" style={{width: 200 + 'px'}}>
//     <img className="card-img-top img-fluid" src={output} alt="Card" />
//     <div className="card-body">
//         <NavLink to="/about" className="stretched-link">
//             <p className="card-title">John Doe</p>
//         </NavLink>
//     </div>
// </div>)