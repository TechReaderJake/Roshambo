import React from 'react'
import { Link } from '@reach/router'
import { MdArrowForward, MdAdd } from 'react-icons/md'

const GridRow = ({action, ...props}) => {
    let children = React.Children.toArray(props.children)
    const actionBtn = <div className="grid-item" key="action-btn">
        <div className="action-btn" title={action.title} onClick={action.click}>
            <MdAdd />
        </div>
    </div>
    children.unshift(actionBtn)
    return <div className="grid-row">{children}</div>
}

const GridItem = ({ item, ...props}) => {
    const {name, type, image} = item
    //WorldName / BookName / ItemType / ItemName
    // /alamania/mirror-of-revealing/character/alinaan-orderfew
    const styles = { backgroundImage: `url(${image})` }
    return (
      <div className={"grid-item " + type}>
        <Link className="wrapping-link" to={"/" + type + "/" + name} />
        <div className="grid-item-wrapper"> 
          <div className="grid-item-container">
            <div className="grid-image-top rex-ray">
              <span className="grid-image" style={styles}></span>
            </div>
            <div className="grid-item-content">
              <span className="item-title">{name}</span>
              <span className="more-info">View {type} <i><MdArrowForward /></i></span>
            </div>
          </div>
        </div>
      </div>
    )
}

export {
    GridRow,
    GridItem
}