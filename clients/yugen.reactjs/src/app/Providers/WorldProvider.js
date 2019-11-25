import React from 'react';
import {WorldContext} from "../Context/Index";
import { api } from "../Constants";
import Axios from "axios";

class WorldProvider extends React.Component {
    state = {
        world: { id: "1" },
        worlds: [],
        refreshWorlds: () => {
            Axios.get(api.getWorlds).then((response) => {
                this.setState({
                    worlds: response.data
                })
            });
        },
        selectWorld: (event) => {
            const {value} = event.target;
            this.setState({
                world: this.getWorld(value),
            });
        }
    }
    componentDidMount() { this.state.refreshWorlds(); }
    getWorld(id){
        return this.state.worlds.find((element) => element.id === id);
    }

    render() {
        return (
            <WorldContext.Provider value={this.state}>
                {this.props.children}
            </WorldContext.Provider>
        )
    }
}

export default WorldProvider;