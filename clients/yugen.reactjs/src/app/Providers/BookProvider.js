import React from 'react';
import { BookContext } from "../Context/Index";
import { api } from "../Constants";
import Axios from "axios";
import WorldContext from "../Context/WorldContext";

class BookProvider extends React.Component {
    static contextType = WorldContext;
    state = {
        book: { id: "1"},
        books: [],
        refreshBooks: () => {
            if(this.props.world !== "1")
                Axios.get(api.getBooks + "/" + this.props.world).then((response) => {
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
    componentDidMount() {this.state.refreshBooks();}
    componentDidUpdate(prevProps){
        if(this.props.world !== prevProps.world){
            this.state.refreshBooks();
            this.setState({
                book: {id: "1"}
            });
        }
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