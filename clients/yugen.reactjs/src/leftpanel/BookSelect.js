import React from "react";
import { FormGroup, Input, Label, Button, InputGroupAddon, InputGroup } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BookContext } from "../app/Context/Index";


class BookSelect extends React.Component {

    static contextType = BookContext;
    render(){

        let books = this.context.books.map( (book, index) => {
            return <option key={index} value={book.id}>{book.title}</option>;
        });
        
        return (
            <FormGroup>
            <Label for="books">Books</Label>
                <InputGroup>
            <Input type="select" name="book"
                value={this.context.book.id}
                onChange={this.context.selectBook}
            >
    <option value="1" disabled>Select Book ({this.context.books.length})</option>
                {books}
            </Input>
            <InputGroupAddon addonType="append">
                <Button 
                    className="btn-sm" 
                    disabled={this.props.world === "1"?true:false}>
                        <FontAwesomeIcon icon="plus"/>
                </Button>
            </InputGroupAddon>
            </InputGroup>
            </FormGroup>
        );
    }
}
export default BookSelect;