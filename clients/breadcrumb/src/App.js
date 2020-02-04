import React from 'react'
import { Link, Router } from '@reach/router'
import { MdHome, MdSettings, MdEmail, MdInfo, MdWeb } from 'react-icons/md'
import Home from './pages/home'
import Dashboard from './pages/dashboard'
import Contact from './pages/contact'
import About from './pages/about'
import Blog from './pages/blog'
import Breadcrumb from './breadcrumb'

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

const Separator = ({ children, ...props }) => (
  <span style={{ color: 'teal' }} {...props}>
    {children}
  </span>
)

const options = {
  icons: {
    Home: MdHome,
    Dashboard: MdSettings,
    Contact: MdEmail,
    About: MdInfo,
    Blog: MdWeb,
  },
  items: [
    { to: '/', label: 'Home' },
    { to: '/dashboard', label: 'Dashboard' },
    { to: '/dashboard/contact', label: 'Contact' },
    { to: '/dashboard/contact/about', label: 'About' },
    { to: '/dashboard/contact/about/blog', label: 'Blog' },
  ],
}

const App = () => (
  <div className='app'>
    <Breadcrumb separator={<Separator>/</Separator>}>
      {options.items.map(({ to, label }) => {
        const Icon = options.icons[label]
        return (
          <div key={to} className='some-custom-classname'>
            {Icon && <Icon />}
            <NavLink to={to}>{label}</NavLink>
          </div>
        )
      })}
    </Breadcrumb>
    <Router>
      <Home path='/' />
      <Dashboard path={options.items[1].to} />
      <Contact path={options.items[2].to} />
      <About path={options.items[3].to} />
      <Blog path={options.items[4].to} />
    </Router>
  </div>
)

export default App