import React from "react";
import { Form, FormGroup, Input, Label, Button,
        Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { BookContext } from "../app/context";

class AddBook extends React.Component {
    static contextType = BookContext;
    saveBook = (event) => {
        this.context.saveBook(event);
        this.props.toggle();
    }
    render() {
        const {
            className,
            toggle,
            modal,
          } = this.props;
        return (
        <Modal 
            isOpen={modal} 
            toggle={toggle} 
            className={className}>
            <ModalHeader 
                toggle={toggle}>
                    Add Book
            </ModalHeader>
            <ModalBody>
            <Form>
                <FormGroup>
                    <Label for="bookTitle">Title</Label>
                    <Input 
                        type="text" 
                        name="bookTitle" 
                        onChange={this.context.handleChange}
                        value={this.context.bookTitle} 
                    />
                    <Label for="bookCover">Cover URL</Label>
                    <Input 
                        type="text" 
                        name="bookCover" 
                        onChange={this.context.handleChange}
                        value={this.context.bookCover} 
                    />
                </FormGroup>
            </Form>
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={this.saveBook}>Add</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
        )
    }
}
export default AddBook;