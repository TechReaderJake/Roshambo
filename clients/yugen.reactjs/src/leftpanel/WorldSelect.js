import React from "react";
import { FormGroup, Input, Label, Button, InputGroupAddon, InputGroup } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function WorldSelect (props) {
    const worlds = props.worlds.map((el) => 
        <option key={el.id} value={el.name}>{el.name}</option>
    );
    return (
        <FormGroup>
            <Label for="worlds">Select World</Label>
            <InputGroup>
            <Input type="select" name="world"
                value={props.world}
                onChange={props.handleChange}
            >
                {worlds}
            </Input>
            <InputGroupAddon addonType="append">
            <Button className="btn-sm"><FontAwesomeIcon icon="plus"/></Button>
            </InputGroupAddon>
            </InputGroup>
        </FormGroup>
    );
}