import React from "react";
import { FormGroup, Input, Label, Button, InputGroupAddon, InputGroup } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { WorldContext } from "../app/Context/Index";

class WorldSelect extends React.Component {
    static contextType = WorldContext;
    render(){
        const worlds = this.context.worlds.map((el) => 
            <option key={el.id} value={el.id}>{el.title}</option>
        );
        return (
            <FormGroup>
                <Label for="worlds">Worlds</Label>
                <InputGroup>
                <Input type="select" name="world"
                    value={this.props.world}
                    onChange={this.props.handleChange}
                >
                    <option value="1" disabled>Select World ({this.context.worlds.length})</option>
                    {worlds}
                </Input>
                <InputGroupAddon addonType="append">
                <Button className="btn-sm"><FontAwesomeIcon icon="plus"/></Button>
                </InputGroupAddon>
                </InputGroup>
            </FormGroup>
        );
    }
}

export default WorldSelect;