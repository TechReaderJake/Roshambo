import React from 'react'
import {ListGroup, ListGroupItem, NavLink} from 'reactstrap';

export default function MenuItemAccordion (props) {
    const items = []
    props.items.forEach(element => {
        let found = null;
        if(element.name != null){
            found = element.name.toLowerCase().indexOf(props.filterText);
            if(found === -1) 
            { return; }
            var item = 
                <ListGroupItem key={element.id}>
                    <NavLink href={"#" + element.id}>{element.name}</NavLink>
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