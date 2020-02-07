import React from 'react'
import {
  BrowserRouter as Router
} from 'react-router-dom'
import Routing from './components/routing'
import ControlCenter from './components/control-center'
import Banner from './layouts/banner'
import './styles/app.scss'

class App extends React.Component {
  render() {
    return ( 
    <div className='app'>
      <Router>
        <ControlCenter />
        <Banner />
        <Routing />
      </Router>
    </div>
    )
  }
}

export default App