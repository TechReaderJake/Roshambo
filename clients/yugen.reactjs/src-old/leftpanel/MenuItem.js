import React from 'react';
import MenuAccord from './MenuItemAccordion';
import { NavItem, NavLink, Badge } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {CapFirstLetter} from '../app/Functions';

class MenuItem extends React.Component {
    
    render(){
        var navLink = null;
        var subItems = null;
        var expanded = this.props.expanded ? true : false;
        var url = this.props.url != null ? this.props.url : "#";
        var btn = <FontAwesomeIcon icon={this.props.icon} />;
        var linkName = CapFirstLetter(this.props.name);
        
        if (this.props.subItems != null && 
            this.props.subItems.length >= 0)
        {
            navLink =
            <NavLink 
                href="#" 
                data-toggle="collapse" 
                data-target={"#" + this.props.name} 
                aria-expanded={expanded}>
                {btn} {linkName} { }
                <Badge pill>{this.props.subItems.length}</Badge>
            </NavLink>;
            subItems = 
            <MenuAccord 
                id={this.props.name} 
                items={this.props.subItems}
                filterText={this.props.filterText}
                expanded={expanded} />;
        }
        else {
            navLink = 
            <NavLink href={url}>
                {btn} {linkName}
            </NavLink>;
        }
    return (
        <NavItem>
            {navLink}
            {subItems}
        </NavItem>
    );
    }
}

export default MenuItem;