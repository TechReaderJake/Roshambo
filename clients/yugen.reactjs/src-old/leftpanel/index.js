import React from 'react';
import MenuHeader from './MenuHeader';
import MenuNav from './MenuNav';

export default class Index extends React.Component {
    render() {
        let open = this.props.isNavOpen ? "open" : "";
        let showing = this.props.isNavOpen ? "" : "d-none";

        return (
            <div id="ls-panel" className={open}>
                <div className={showing}>
                    <MenuHeader 
                        toggleNav={this.props.toggleNav} />
                    <MenuNav />
                </div>
            </div>
        );
    }
}