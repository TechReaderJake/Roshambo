import React from 'react'
import useBreadcrumb from './useBreadcrumb'
import BreadcrumbCollapser from './breadcrumbCollapser'

const BreadcrumbItem = ({ children, ...props }) => (
  <li className='breadcrumb-item' {...props}>
    {children}
  </li>
)

const BreadcrumbSeparator = ({ children, ...props }) => (
  <li className='breadcrumb-separator' {...props}>
    {children}
  </li>
)

const Breadcrumb = ({ separator = '/', collapse = {}, ...props }) => {
  let children = React.Children.toArray(props.children)

  const { expanded, open } = useBreadcrumb()

  const { itemsBefore = 2, itemsAfter = 2, max = 4 } = collapse

  let totalItems = children.length
  let lastIndex = totalItems - 1

  children = children.map((child, index) => (
    <BreadcrumbItem key={`breadcrumb_item${index}`}>{child}</BreadcrumbItem>
  ))

  children = children.reduce((acc, child, index) => {
    const notLast = index < lastIndex
    if (notLast) {
      acc.push(
        child,
        <BreadcrumbSeparator key={`breadcrumb_sep${index}`}>
          {separator}
        </BreadcrumbSeparator>,
      )
    } else {
      acc.push(child)
    }
    return acc
  }, [])

  totalItems = children.length

  if (!expanded && totalItems >= max) {
    console.log("TotalItems: " + totalItems)
    console.log("Total - After Items: " + (totalItems - itemsAfter))
    children = [
      ...children.slice(0, itemsBefore), 
      <BreadcrumbCollapser
        title='Expand'
        key='collapsed-seperator'
        onClick={open}
      />,
      ...children.slice((totalItems - itemsAfter), totalItems),
    ]
  }

  return (
    <nav id="breadcrumb-nav">
      <ul className="breadcrumb">
        {children}
      </ul>
    </nav>
  )
}

export default Breadcrumb