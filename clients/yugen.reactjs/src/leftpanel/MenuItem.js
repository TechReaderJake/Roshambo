import React from 'react';
import MenuGroup from './MenuGroup';
import { NavItem, NavLink, Badge } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class MenuItem extends React.Component {
    
    render(){
        var expanded = this.props.expanded ? true : false;
        var haveSubItems = this.props.subItems != null && this.props.subItems.length > 0;
        var numSubItems = null;
        var stat = null;
        var navLink = null;
        var subItems = null;
        var btn = <FontAwesomeIcon icon={this.props.icon} />;
        var linkName = this.props.name.charAt(0).toUpperCase() + this.props.name.slice(1);
        
        if (haveSubItems)
        {
            numSubItems = this.props.subItems.length;
            stat = numSubItems > 0 ? <Badge pill>{numSubItems}</Badge> : "";
            navLink =
            <NavLink 
                href="#" 
                data-toggle="collapse" 
                data-target={"#" + this.props.id} 
                aria-expanded={expanded}>
                {btn} {linkName} {stat}
            </NavLink>;
            subItems = <MenuGroup id={this.props.id} items={this.props.subItems} expanded={expanded} />;
        }
        else {
            navLink = this.props.url != null ? 
                <NavLink href={this.props.url}>
                    {btn} {linkName}
                </NavLink> : 
                <NavLink href="#">
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