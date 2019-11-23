import React from 'react';
import MenuItem from './MenuItem';
import { Nav, Form, FormGroup, Input } from 'reactstrap';


export default class MenuNav extends React.Component
{
    render() {
        const subItems = this.props.data;
        const menuList = [];
        for (let key in subItems) {
            if(subItems.hasOwnProperty(key)){
            menuList.push(
                <MenuItem 
                    id={key} 
                    key={key} 
                    name={key} 
                    icon="book"
                    subItems={subItems[key]}
                />
            )
            }
        }
        return (
            <Nav vertical>
                <Form>
                    <FormGroup className="mx-2 my-1">
                        <Input type="search" name="filter" id="sideFilter" placeholder="Filter" className="mt-2" />
                    </FormGroup>
                </Form>
                <MenuItem name="Front Matter" icon="info-circle" />
                {menuList}
            </Nav>
        );
    }
}