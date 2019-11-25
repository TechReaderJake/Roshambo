import React from 'react';
import { Container } from 'reactstrap';
import { themes } from './Themes';
import LeftPanel from '../leftpanel/Index';
import TopPanel from '../toppanel/Index';
import CenterPanel from '../centerpanel/Index';
import WorldProvider from './Providers/WorldProvider';
import BookProvider from './Providers/BookProvider';


import { library } from '@fortawesome/fontawesome-svg-core';
import { faBook, faUser, faInfoCircle, faPlus, faTimes, faBars, faUserCircle } from '@fortawesome/free-solid-svg-icons'

library.add(
  faBook,
  faUser,
  faInfoCircle,
  faPlus,
  faTimes,
  faBars,
  faUserCircle
  // more icons go here
);

class App extends React.Component {
  state = {
    navopen: true,
    theme: themes.night,
  }

  componentDidMount(){
    document.body.classList.add(this.state.theme);
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  resize() {
    let currentHideNav = (window.innerWidth >= 550);
    if(currentHideNav !== this.state.navopen){
      this.setState({navopen: currentHideNav})
    }
  }

  toggleNav = () => {
    this.setState((state) => ({
      navopen: !state.navopen
    }));
    if(window.innerWidth <= 550){
      document.body.classList.toggle("overflow-hidden");
    }
  }
  
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => {
      if(name === "theme"){
        document.body.classList.remove(prevState.theme);
        document.body.classList.add(value);
      }
      return {[name]: value};
    });
  }
  render() {
      return (
        <Container fluid>
          <WorldProvider>
            <BookProvider toggleNav={this.toggleNav}>
              <LeftPanel
                isNavOpen={this.state.navopen} 
                toggleNav={this.toggleNav}
                handleChange={this.handleChange} />
              <TopPanel
                isNavOpen={this.state.navopen}
                toggleNav={this.toggleNav}
                theme={this.state.theme}
                handleChange={this.handleChange} />
              <CenterPanel
                isNavOpen={this.state.navopen}
              />
            </BookProvider>
          </WorldProvider>
        </Container>
    );
  }
}

export default App;
