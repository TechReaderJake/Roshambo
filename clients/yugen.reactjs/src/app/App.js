import React from 'react';
import { Container } from 'reactstrap';
import { themes } from './Themes';
import LeftPanel from '../leftpanel/Index';
import TopPanel from '../toppanel/Index';
import CenterPanel from '../centerpanel/Index';
import { data } from './Data';


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
    world: data.worlds[0].name,
    book: data.books[0].name,
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
  }
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState((prevState) => {
      if(name === "theme"){
        document.body.classList.remove(prevState.theme);
        document.body.classList.add(value);
      }
      if(name === "book" && window.innerWidth <= 550)
      {
        this.toggleNav();
      }
      return {[name]: value};
    });
  }
  render() {
      return (
      <Container fluid>
        <LeftPanel
          isNavOpen={this.state.navopen} 
          toggleNav={this.toggleNav}
          handleChange={this.handleChange}
          book={this.state.book}
          world={this.state.world} />
        <TopPanel
          isNavOpen={this.state.navopen}
          toggleNav={this.toggleNav}
          theme={this.state.theme}
          handleChange={this.handleChange}
          book={this.state.book} />
        <CenterPanel
          isNavOpen={this.state.navopen}
          book={this.state.book}
         />
      </Container>
    );
  }
}

export default App;
