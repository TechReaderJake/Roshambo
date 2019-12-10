import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MenuCover from './MenuCover';
import MenuSelect from './MenuSelect';

export default function MenuHeader (props){
    return (
        <div className="ls-panel-header">
            <FontAwesomeIcon 
                icon="times" 
                className="ls-panel-close" 
                onClick={props.toggleNav} />
            <MenuCover />
            <MenuSelect />
        </div>
    );
}