import React, { useState } from 'react';
import { Form, Input, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {themes} from '../app/Themes'

export default function Index(props) {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);
    const themeOptions = [];
    for (let key in themes) {
        if(themes.hasOwnProperty(key)){
        themeOptions.push(<option key={themes[key]} value={themes[key]}>{key.charAt(0).toUpperCase() + key.slice(1)}</option>)
        }
    }
    const title = props.book === "1" ? "" : props.book;
    return (        
    <div id="ts-panel" className={props.isNavOpen ? "open" : ""}>
        <div className="left">
            <FontAwesomeIcon icon="bars" onClick={props.toggleNav} className="menu-icon" />
        </div>
        <div className="center">
            {title}
        </div>
        <div className="right">
            <Form>
            <Input type="select" name="theme"
                value={props.theme}
                onChange={props.handleChange}>
                {themeOptions}
            </Input>
            </Form>
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
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