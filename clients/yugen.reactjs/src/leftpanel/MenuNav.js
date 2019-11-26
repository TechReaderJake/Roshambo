import React from 'react';
import MenuItem from './MenuItem';
import { Nav, Form, FormGroup, Input } from 'reactstrap';
import { api } from "../app/Constants";
import Axios from 'axios';
import { BookContext } from "../app/context";

class MenuNav extends React.Component
{
    static contextType = BookContext;
    state = {
        chapters: []
    }
    componentDidMount(){ 
        this.prevBook = this.context.book;
        this.refreshChapters();
    }
    componentDidUpdate(){
        if(this.prevBook.id !== this.context.book.id)
        {
            this.refreshChapters();
        }
        this.prevBook = this.context.book;
    }
    refreshChapters() {
        if(this.context.book.id !== "1"){
            Axios.get(api.getChapters + "/" + this.context.book.id).then((response) => {
                this.setState({
                    chapters: response.data
                })
            })
        }
        else {this.setState({chapters: []})}
    }
    render() {
        return (
        <Nav vertical>
            <Form>
                <FormGroup className="mx-2 my-1">
                    <Input type="search" name="filter" id="sideFilter" placeholder="Filter" className="mt-2" />
                </FormGroup>
            </Form>
            <MenuItem 
                name="Front Matter" 
                icon="info-circle" />
            <MenuItem
                name="chapters"
                icon="book"
                expanded
                subItems={this.state.chapters} />
        </Nav>
        );
    }
}

export default MenuNav;
// const subItems = data2
// const menuList = [];
// for (let key in subItems) {
//     if(subItems.hasOwnProperty(key)){
//     menuList.push(
//         <MenuItem 
//             id={key} 
//             key={key} 
//             name={key} 
//             icon="book"
//             subItems={subItems[key]}
//         />
// )}}