import React from 'react';
import {WorldContext} from "../Context/Index";
import { api } from "../Constants";
import Axios from "axios";

class WorldProvider extends React.Component {
    state = {
        defaultWorld: { id: "1", title: "1" },
        selectedWorld: { id: "1", title: "1" },
        worlds: [],
        refreshWorlds: this.refreshWorlds,
        selectWorld: this.selectWorld
    }
    componentDidMount() { this.refreshWorlds(); }
    refreshWorlds() {
        Axios.get(api.getWorlds).then((response) => {
            this.setState({
                worlds: response.data
            })
        });
    }
    selectWorld(id){
        const worlds = Object.assign({}, this.state.books);
        this.setState({
            world: worlds[id]
        })
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