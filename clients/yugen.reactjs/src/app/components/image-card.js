import React from 'react'
//import '../styles/components/image-card.scss'

export default function ImageCard (props) {
    return <div className="image-card">
        {props.children}
    </div>
}