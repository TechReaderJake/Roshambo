import React from 'react';
import MenuHeader from './MenuHeader';
import MenuNav from './MenuNav';
import MenuSelect from './MenuSelect';
import WorldSelect from './WorldSelect';
import BookSelect from './BookSelect';

export default class Index extends React.Component {
c     
    render() {
        let open = this.props.isNavOpen ? "open" : "";
        let showing = this.props.isNavOpen ? "" : "d-none";

        return (
            <div id="ls-panel" className={open}>
                <div className={showing}>
                    <MenuHeader 
                        toggleNav={this.props.toggleNav}>
                        <MenuSelect>
                            <WorldSelect
                                world={this.props.world}
                                handleChange={this.props.handleChange}
                            />
                            <BookSelect
                                world={this.props.world}
                                handleChange={this.props.handleChange}
                            />
                        </MenuSelect>
                    </MenuHeader>
                    <MenuNav
                        handleChange={this.props.handleChange}
                        world={this.props.world}
                        book={this.props.book}
                    />
                </div>
            </div>
        );
    }
}