import React from 'react';
import Axios from "axios";
import { WorldContext } from "../context";
import { api } from "../Constants";

class WorldProvider extends React.Component {
    state = {
        postWorld: "",
        world: { id: "1" },
        worlds: [],
        refreshWorlds: () => {
            Axios.get(api.getWorlds).then((response) => {
                this.setState({
                    worlds: response.data
                })
            });
        },
        handleChange: (event) => {
            const {name,value} = event.target;
            var eventVal = value;
            if ( name === "world")
                eventVal = this.getWorld(value);
            this.setState({
                [name]: eventVal,
            });
        },
        saveWorld: () => {
            const addWorld = [{
                title: this.state.postWorld
            }];
            Axios.post(api.postWorlds, addWorld).then(
                (response) => {
                this.state.refreshWorlds();
                this.setState({
                    postWorld: ""
                })
            })
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