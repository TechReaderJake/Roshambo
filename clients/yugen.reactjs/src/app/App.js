import React from 'react'
import Banner from './layouts/banner'
import Card from './components/card'
import Toolbar from './components/toolbar'
import Tooltip from './components/tooltip'
import './styles/app.scss'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Router>
      <div>
        <Toolbar />
        <Banner />
        <nav className="container">
          <ul className="breadcrumb">
            <li>
              <NavLink to="/">Worlds</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/users">Users</NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
              <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    )
  }
}
function Home() {
  return <div className="container"><div className="card-container">
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
</div>
}
function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;
