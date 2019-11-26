import React from 'react';
import {BookContext} from '../app/Context/Index';

class MenuCover extends React.Component  {
    static contextType = BookContext;
    render() {
        const bookCoverDefault = "https://ibf.org/site_assets/img/placeholder-book-cover-default.png";
        console.log(this.context.book.cover);
        return (
            <div className="ls-panel-cover">
                <div className="ls-panel-img-shade"></div>
                <img className="img-fluid" 
                    src={this.context.book.cover !== undefined ? this.context.book.cover : bookCoverDefault}
                    alt="cover" />
            </div>
        );
    }
}
export default MenuCover;