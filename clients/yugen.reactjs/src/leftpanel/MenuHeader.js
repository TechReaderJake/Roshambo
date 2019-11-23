import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function MenuHeader (props){
    return (
        <div className="ls-panel-header">
            {/* <div className="ls-panel-logo">
                <NavLink href="#">
                    <FontAwesomeIcon icon="plus" /> Yugen Write
                </NavLink>
            </div> */}
            <FontAwesomeIcon icon="times" className="ls-panel-close" onClick={props.toggleNav} />
            {props.children}
        </div>
    );
}