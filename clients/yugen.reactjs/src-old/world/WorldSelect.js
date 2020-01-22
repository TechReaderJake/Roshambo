import React from "react";
import { FormGroup, Input, Label, Button, InputGroupAddon, InputGroup } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { WorldContext } from "../app/context";
import AddWorld from "./AddWorld";

class WorldSelect extends React.Component {
    static contextType = WorldContext;
    state = {
        modal: false
    } 
    toggle = () => {
        this.setState((prevState) => ({
            modal: !prevState.modal
        }));
    }
    render(){
        const worlds = this.context.worlds.map((el) => 
            <option key={el.id} value={el.id}>{el.title}</option>
        );
        return (
            <FormGroup>
                <Label for="worlds">Worlds</Label>
                <InputGroup>
                <Input type="select" name="world"
                    value={this.context.world.id}
                    onChange={this.context.handleChange}
                >
                    <option value="1" disabled>Select World ({this.context.worlds.length})</option>
                    {worlds}
                </Input>
                <InputGroupAddon addonType="append">
                    <Button 
                        className="btn-sm"
                        onClick={this.toggle}>
                            <FontAwesomeIcon icon="plus"/>
                    </Button>
                    <AddWorld toggle={this.toggle} modal={this.state.modal} />
                </InputGroupAddon>
                </InputGroup>
            </FormGroup>
        );
    }
}

export default WorldSelect;