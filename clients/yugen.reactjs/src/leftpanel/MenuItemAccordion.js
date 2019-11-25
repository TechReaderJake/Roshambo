import React from 'react'
import {ListGroup, ListGroupItem, NavLink} from 'reactstrap';

export default function MenuItemAccordion (props) {
    const items = []
    props.items.forEach(element => {
        if(element.name != null){
            var item = 
                <ListGroupItem key={element.id}>
                    <NavLink href={"#" + element.name}>{element.name}</NavLink>
                </ListGroupItem>;
            items.push(item);
        }
    });
    items.push(                
        <ListGroupItem key={props.id}>
            <NavLink href="#">Manage</NavLink>
        </ListGroupItem>
    );
    return (
        <ListGroup id={props.id} className={props.expanded ? "collapse show" : "collapse"}>
            {items}
        </ListGroup>
    );
}