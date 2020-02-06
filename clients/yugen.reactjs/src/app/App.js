import React from 'react'
import Routing from './components/routing'
import ControlCenter from './components/control-center'
import Banner from './layouts/banner'
import './styles/app.scss'

class App extends React.Component {
  render() {
    return ( 
    <div className='app'>
      <ControlCenter />
      <Banner />
      <Routing />
    </div>
    )
  }
}

export default App