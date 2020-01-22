import React from 'react';
import Axios from "axios";
import { WorldContext, BookContext } from "../context";
import { api } from "../Constants";

class BookProvider extends React.Component {
    static contextType = WorldContext;
    state = {
        bookTitle: "",
        bookCover: "",
        book: { id: "1"},
        books: [],
        refreshBooks: () => {
            if(this.context.world.id !== "1")
                Axios.get(api.getBooks + "/" + 
                    this.context.world.id).then((response) => {
                    this.setState({
                        books: response.data
                    })
                });
        },
        handleChange: (event) => {
            const {name,value} = event.target;
            var eventVal = value;
            if( name === "book")
                eventVal = this.getBook(value);
            this.setState({
                [name]: eventVal,
            });
            if(window.innerWidth <= 550)
                this.props.toggleNav();
        },
        saveBook: () => {
            const addBook = [{
                title: this.state.bookTitle, 
                worldId: this.context.world.id,
                cover: this.state.bookCover
            }];
            Axios.post(api.postBooks, addBook).then(
                (response) => {
                this.state.refreshBooks();
                this.setState({
                    postBook: ""
                })
            })
        }
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