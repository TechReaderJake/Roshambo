import React from 'react';
import { BookContext } from "../Context/Index";
import { api } from "../Constants";
import Axios from "axios";
import { WorldContext } from "../Context/Index";

class BookProvider extends React.Component {
    static contextType = WorldContext;
    state = {
        book: { id: "1"},
        books: [],
        refreshBooks: () => {
            if(this.context.world.id !== "1")
                Axios.get(api.getBooks + "/" + this.context.world.id).then((response) => {
                    this.setState({
                        books: response.data
                    })
                });
        },
        selectBook: (event) => {
            const {value} = event.target;
            this.setState({
                book: this.getBook(value),
            });
            if(window.innerWidth <= 550)
                this.props.toggleNav();
        },
    }
    componentDidMount() {
        this.prevWorld = this.context.world;
        this.state.refreshBooks();
    }
    componentDidUpdate(){
        if(this.prevWorld.id !== this.context.world.id){
            this.state.refreshBooks();
            this.setState({
                book: {id: "1"}
            });
        }
        this.prevWorld = this.context.world;
    }
    getBook(id){
        return this.state.books.find((element) => element.id === id);
    }

    render() {
        return (
            <BookContext.Provider value={this.state}>
                {this.props.children}
            </BookContext.Provider>
        );
    }
}
export default BookProvider;