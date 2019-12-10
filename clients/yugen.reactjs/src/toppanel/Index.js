import React from 'react';
import { Form, Input, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CapFirstLetter } from '../app/Functions';
import {themes} from '../app/Themes';
import { BookContext } from "../app/context";

class Index extends React.Component {
    static contextType = BookContext;
    state = {
        dropdownOpen: false,
    }
    toggle = () => {
        this.setState((prevState) => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }
    render (){
    const themeOptions = [];

    for (let key in themes) {
        if(themes.hasOwnProperty(key)){
        themeOptions.push(<option key={themes[key]} value={themes[key]}>{CapFirstLetter(key)}</option>)
        }
    }
    const title = this.context.book.title === "1" ? "" : this.context.book.title;
    
    return (        
    <div id="ts-panel" className={this.props.isNavOpen ? "open" : ""}>
        <div className="left">
            <FontAwesomeIcon icon="bars" onClick={this.props.toggleNav} className="menu-icon" />
        </div>
        <div className="center">
            {title}
        </div>
        <div className="right">
            <Form>
            <Input type="select" name="theme"
                value={this.props.theme}
                onChange={this.props.handleChange}>
                {themeOptions}
            </Input>
            </Form>
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle nav>
                <FontAwesomeIcon icon="user-circle" />
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem>Word Goals</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Profile</DropdownItem>
                    <DropdownItem>Settings</DropdownItem>
                    <DropdownItem>Account</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Help</DropdownItem>
                    <DropdownItem>User Agreement</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Signout</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    </div>);
    }
}

export default Index;