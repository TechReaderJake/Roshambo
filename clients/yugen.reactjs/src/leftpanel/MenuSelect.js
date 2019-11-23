import React from "react";
import { Form } from 'reactstrap';

export default function MenuSelect (props) {
    return (
        <div>
        <div className="ls-panel-cover">
            <div className="ls-panel-image"></div>
            <img className="img-fluid" src="http://fantasy-faction.com/wp-content/uploads/2014/12/Vagrant.jpg" alt="img" />
        </div>
        <Form className="ls-panel-select">
            {props.children}
        </Form>
        </div>
    );
}