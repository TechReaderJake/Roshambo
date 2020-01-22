import React from 'react';
import Axios from "axios";
import { api } from "../app/Constants";
import { BookContext } from "../app/context";
import Chapter from "./Chapter";

class Index extends React.Component {
    static contextType = BookContext;
    state = {
        chapters: [],
        refreshChapters: () => {
            if(this.context.book.id !== "1")
                Axios.get(api.getChapters + "/" + 
                    this.context.book.id).then((response) => {
                    this.setState({
                        chapters: response.data
                    })
                });
        },
    }
    componentDidMount() {
        this.prevBook = this.context.book;
        this.state.refreshChapters();
    }
    componentDidUpdate(){
        if(this.prevBook.id !== this.context.book.id){
            this.state.refreshChapters();
            this.setState({
                chapters: []
            })
        }
        this.prevBook = this.context.book;
    }
    render() {
        let open = this.props.isNavOpen ? "open" : "";
        let chapters = this.state.chapters.map((chapter) => {
            return <Chapter key={chapter.id} chapter={chapter} />;
        });
        return (
        <div id="ce-panel" className={open}>
            <div className="content">
                {chapters}
            </div>
        </div>
    );
    }
}
export default Index;