import React from 'react';
import {BookContext} from '../app/context';

class MenuCover extends React.Component  {
    static contextType = BookContext;
    render() {
        const bookCoverDefault = "https://ibf.org/site_assets/img/placeholder-book-cover-default.png";
        const cover = this.context.book.cover;
        return (
            <div className="ls-panel-cover">
                <div className="ls-panel-img-shade"></div>
                <img className="img-fluid" 
                    src={cover !== undefined && cover !== null ? this.context.book.cover : bookCoverDefault}
                    alt="cover" />
            </div>
        );
    }
}
export default MenuCover;