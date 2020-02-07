import React from 'react'
import { MdArrowForward } from 'react-icons/md'

const GridRow = ({...props}) => {
    let children = React.Children.toArray(props.children)

    children = children.map((child, index))
}

const GridItem = ({gridItemObj, ...props}) => {


    return (
        <h1>Temp</h1>
    )
}

export default GridItem