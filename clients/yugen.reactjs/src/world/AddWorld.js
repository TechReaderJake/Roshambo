import React from "react";
import { Form, FormGroup, Input, Label, Button,
        Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { WorldContext } from "../app/context";

class AddWorld extends React.Component {
    static contextType = WorldContext;
    saveWorld = (event) => {
        this.context.saveWorld(event);
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
                    Add World
            </ModalHeader>
            <ModalBody>
            <Form>
                <FormGroup>
                    <Label for="worldTitle">Title</Label>
                    <Input 
                        type="text" 
                        name="postWorld" 
                        onChange={this.context.handleChange}
                        value={this.context.postWorld} 
                    />
                </FormGroup>
            </Form>
            </ModalBody>
            <ModalFooter>
            <Button color="primary" onClick={this.saveWorld}>Add</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
        )
    }
}
export default AddWorld;