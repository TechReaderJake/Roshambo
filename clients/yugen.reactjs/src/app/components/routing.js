import React from 'react'
import { Link, Switch, Route, NavLink } from 'react-router-dom'
//import { Link, Router } from '@reach/router'
import { MdHome, MdSettings, MdInfo, MdWeb, MdEmail, MdAssignment, MdAdd } from 'react-icons/md'
import { GridRow, GridItem } from './grid'
import Breadcrumb from './breadcrumb'

// const NavLink = props => (
//     <Link
//       {...props}
//       getProps={({ isCurrent }) => {
//         // the object returned here is passed to the
//         // anchor element's props
//         return {
//           style: {
//             color: isCurrent ? "red" : "blue"
//           }
//         };
//       }}
//     />
// );

const options = {
icons: {
    Worlds: MdHome,
    Users: MdSettings,
    About: MdInfo,
    Blog: MdWeb,
    Contact: MdEmail,
    Dashboard: MdAssignment,
},
items: [
    { to: '/', label: 'Worlds' },
    { to: '/users', label: 'Users' },
    { to: '/dashboard/about', label: 'About' },
    { to: '/blog', label: 'Blog'},
    { to: '/contact', label: 'Contact'},
    { to: '/dashboard', label: 'Dashboard'},
],
}

const Routing = () => (
    <div className='content'>
        <Breadcrumb separator="/">
          {options.items.map(({ to, label }) => {
            const Icon = options.icons[label]
            return (
              <div key={to} className='d-flex'>
                {Icon && <Icon />}
                <NavLink to={to}>{label}</NavLink>
              </div>
            )
          })}
        </Breadcrumb>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path={options.items[1].to}>
            <Users />
          </Route>
          <Route path={options.items[2].to}>
            <About />
          </Route>
          <Route path={options.items[3].to}>
            <About />
          </Route>
          <Route path={options.items[4].to}>
            <About />
          </Route>
          <Route path={options.items[4].to}>
            <About />
          </Route>
        </Switch>
    </div>
)

export default Routing

function Home() {
    return (
      <h1>Hello Home!</h1>
    )
}
function About() {
    return (
      <div className="grid-row">
        <div className="grid-item">
            <div className="action-btn" title="Create World">
              <MdAdd />
            </div>
        </div>
        <div className="grid-item">
          <Link className="wrapping-link" to="https://www.dell.com/learn/us/en/555/campaigns/xps-linux-laptop_us"></Link>
          <div className="grid-item-wrapper">
            <div className="grid-item-container">
              <div className="grid-image-top sputnik">
                <span className="centered project-image-bg sputnik-image"></span>
              </div>
              <div className="grid-item-content">
                <span className="item-title">Sputnik</span>
                <span className="item-category">Developer System</span>
                <span className="item-excerpt">A developer focused laptop with a pre-installed and fully support Ubuntu im...</span>
                <span className="more-info">View Project <i className="fas fa-long-arrow-alt-right"></i></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

class Users extends React.Component {
  
  state = {
    worlds: [
      { name: "Laughter in the night at the academy", type: "world", image: "https://images.pexels.com/photos/3645370/pexels-photo-3645370.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"},
      { name: "Smiles", type: "world", image: "https://images.pexels.com/photos/3584992/pexels-photo-3584992.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},
      { name: "Choices", type: "world", image: "https://images.pexels.com/photos/3361200/pexels-photo-3361200.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},
      { name: "Ensign", type: "world", image: "https://images.pexels.com/photos/3497181/pexels-photo-3497181.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},
      { name: "Alamania", type: "world", image: "https://images.pexels.com/photos/3457299/pexels-photo-3457299.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"},
    ],
  }

  componentDidUpdate() {

  }

  addItem = () => {
    this.state.worlds.push({ 
      name: "Laughter in the night at the academy", 
      type: "world", 
      image: "https://images.pexels.com/photos/3645370/pexels-photo-3645370.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    })
    this.setState((prevState) => ({
      worlds: prevState.worlds
    }))
    console.log(this.state.worlds)
  }

  render() {
    let gridItems = {
      action: {
        title: "World Create",
        click: this.addItem
      }      
    }
    return (
      <GridRow action={gridItems.action}>
        {this.state.worlds.map(( child, index ) => {
            return (
              <GridItem key={index} item={child} />
            )
        })}
      </GridRow>
    );
  }
}