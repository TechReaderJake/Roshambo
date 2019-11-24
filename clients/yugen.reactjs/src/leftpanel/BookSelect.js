import React from "react";
import { FormGroup, Input, Label, Button, InputGroupAddon, InputGroup } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { api } from "../app/Constants";
import Axios from "axios";

class BookSelect extends React.Component {
    state = {
        books: []
    }
    componentDidMount()
    {
        this.refreshBooks();
    }
    componentDidUpdate(prevProps){

        if(this.props.world !== prevProps.world)
        {
            this.refreshBooks();
        }
    }
    refreshBooks() {
        if(this.props.world !== "1")
        {
            Axios.get(api.getBooks + "/" + this.props.world).then((response) => {
                this.setState({
                    books: response.data
                })
            });
        }
    }

    render(){
        // let books = props.books.filter( (book) => {
        //     return book.world_id === this.props.world;
        // }).map( (book) => {
        //     return <option key={book.id} value={book.name}>{book.name}</option>;
        // });
        let books = this.state.books.map( (book) => {
            return <option key={book.id} value={book.title}>{book.title}</option>;
        });

        return (
            <FormGroup>
            <Label for="books">Books</Label>
                <InputGroup>
            <Input type="select" name="book"
                value={this.props.book}
                onChange={this.props.handleChange}
            >
                <option value="1" disabled>Select Book</option>
                {books}
            </Input>
            <InputGroupAddon addonType="append">
                <Button className="btn-sm"><FontAwesomeIcon icon="plus"/></Button>
            </InputGroupAddon>
            </InputGroup>
            </FormGroup>
        );
    }
}
export default BookSelect;