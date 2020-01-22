import React from "react";
import { Button, FormGroup, Input, 
    Label, InputGroupAddon, InputGroup } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BookContext, WorldContext } from "../app/context";
import AddBook from "./AddBook";



class BookSelect extends React.Component {
    static contextType = BookContext;
    state = {
        modal: false
    } 
    toggle = () => {
        this.setState((prevState) => ({
            modal: !prevState.modal
        }));
    }
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
                onChange={this.context.handleChange}>
                <option value="1" disabled>
                    Select Book ({this.context.books.length})
                </option>
                {books}
            </Input>
            <InputGroupAddon addonType="append">
                <WorldContext.Consumer>
                {({world}) => (
                    <Button 
                        className="btn-sm"
                        onClick={this.toggle}
                        disabled={world.id === "1"?true:false}>
                            <FontAwesomeIcon icon="plus"/>
                    </Button>
                )}
                </WorldContext.Consumer>
                <AddBook toggle={this.toggle} modal={this.state.modal} />
            </InputGroupAddon>
            </InputGroup>
            </FormGroup>
        );
    }
}
export default BookSelect;