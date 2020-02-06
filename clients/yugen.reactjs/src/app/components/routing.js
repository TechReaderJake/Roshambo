import React from 'react'
import { Link, Router } from '@reach/router'
import { MdHome, MdSettings, MdInfo, MdWeb, MdEmail, MdAssignment } from 'react-icons/md'
import Breadcrumb from './breadcrumb'
import Card from './card'

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

const Routing = () => (
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
)

export default Routing
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
        <Card cardType="world-card" img="https://via.placeholder.com/900x900?text=Cover" />
        <Card cardType="world-card" />
        <Card cardType="world-card" />
        <Card cardType="world-card" />
        <Card cardType="world-card" />
        <Card cardType="world-card" img="https://via.placeholder.com/900x900?text=Cover" />
        <Card cardType="world-card" />
        <Card cardType="world-card" img="https://via.placeholder.com/900x900?text=Cover" />
        <Card cardType="world-card" action={true}/>
      </div>
    )
}
function About() {
    return <h2>About</h2>;
}

function Users() {
    return <h2>Users</h2>;
}