import React from 'react'

export default function Tooltip (props) {
    let classValue = "tooltip-top";
    switch(props.position)
    {
        case "right":
            classValue = "tooltip-right"
            break
        case "bottom":
            classValue = "tooltip-bottom"
            break
        case "left":
            classValue = "tooltip-left"
            break
        default:
            break
    }
    return ( 
        <div className="tooltip">
            {props.children}
            <span className={"tooltiptext " + classValue}>
                {props.msg}
            </span>
        </div>
    )
}