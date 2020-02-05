import React from 'react'
import { Link, Router } from '@reach/router'
import { MdHome, MdSettings, MdInfo, MdWeb, MdEmail, MdAssignment } from 'react-icons/md'
import ControlCenter from './components/control-center'
import Banner from './layouts/banner'
import Breadcrumb from './components/breadcrumb'
import Card from './components/card'
import './styles/app.scss'

const NavLink = props => (
  <Link
    {...props}
    getProps={({ isCurrent }) => {
      // the object returned here is passed to the
      // anchor element's props
      return {
        style: {
          color: isCurrent ? "red" : "blue"
        }
      };
    }}
  />
);

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

class App extends React.Component {
  render() {
    return ( 
    <div className='app'>
      <ControlCenter />
      <Banner />
      <div className='content'>
        <Breadcrumb separator='/'>
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
        <Router>
          <Home path='/' />
          <Users path={options.items[1].to} />
          <About path={options.items[2].to} />
          <About path={options.items[3].to} />
          <About path={options.items[4].to} />
          <About path={options.items[5].to} />
        </Router>
      </div>
    </div>
    )
  }
}

// const CardImg = ({img, ...props}) => {
//   if (img)
//     return <img src={img} alt={alt} />
//   return <img src="https://via.placeholder.com/900x900?text=Default" alt="default" />
// }
// const Card = ({children, ...props}) => ( 
//     <div className='card' {...props}>
//       {children}
//     </div>
// )

// const CardWrapper = ({ type, ...props}) => {
//   let children = React.Children.toArray(props.children)
//   children.push(
//     <Card>
//       <button className="action-btn" title="Add Card Action">+</button>
//     </Card>
//   )
//   return (
//     <div className="card-container" {...type}>
//       {children}
//     </div>
//   )
// }

// function Test() {
//   return (
//     <CardWrapper type="world">
//       {worlds.map(({id, img, name}) => {
//         return (
//           <NavLink key={id} to={"/worlds/" + id}>
//             <Card>
//                 <figure>
//                   <CardImg img={img} alt={name} />
//                   <figcaption>{name}</figcaption>
//                 </figure>
//             </Card>
//           </NavLink>
//         )
//       })}
//     </CardWrapper>
//   )
// }

function Home() {
  return (
    <div className="card-container">
      <Card img="https://via.placeholder.com/900x900?text=Cover" />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card img="https://via.placeholder.com/900x900?text=Cover" />
      <Card />
      <Card img="https://via.placeholder.com/900x900?text=Cover" />
      <Card action={true}/>
    </div>
  )
}
function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;
