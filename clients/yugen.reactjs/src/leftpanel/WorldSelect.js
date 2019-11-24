import React from "react";
import { FormGroup, Input, Label, Button, InputGroupAddon, InputGroup } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { api } from '../app/Constants';
import Axios from "axios";

class WorldSelect extends React.Component {
    state = {
        worlds: []
    }
    componentDidMount() {
        this.refreshWorlds();
    }
    refreshWorlds() {
        Axios.get(api.getWorlds).then((response) => {
            this.setState({
                worlds: response.data
            })
        });
    }
    render(){
        const worlds = this.state.worlds.map((el) => 
            <option key={el.id} value={el.id}>{el.title}</option>
        );
        return (
            <FormGroup>
                <Label for="worlds">Worlds</Label>
                <InputGroup>
                <Input type="select" name="world"
                    defaultValue={this.props.world}
                    onChange={this.props.handleChange}
                >
                    <option value="1" disabled>Select World</option>
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