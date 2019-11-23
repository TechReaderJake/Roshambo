import React from "react";
import { FormGroup, Input, Label, Button, InputGroupAddon, InputGroup } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function BookSelect (props) {
    let books = props.books.filter( (book) => {
        return book.world_id === props.world;
    }).map( (book) => {
        return <option key={book.id} value={book.name}>{book.name}</option>;
    });

    // if(books.length == 0)
    // {
    //     books = <option value="" selected disabled hidden>No Books</option>;
    // }
    return (
        <FormGroup>
        <Label for="books">Select Book</Label>
            <InputGroup>
        <Input type="select" name="book"
            value={props.book.id}
            onChange={props.handleChange}
        >
            {books}
        </Input>
        <InputGroupAddon addonType="append">
            <Button className="btn-sm"><FontAwesomeIcon icon="plus"/></Button>
        </InputGroupAddon>
        </InputGroup>
        </FormGroup>
    );
}