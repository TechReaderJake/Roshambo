import React from "react";
import { Form } from 'reactstrap';

import WorldSelect from './WorldSelect';
import BookSelect from './BookSelect';

function MenuSelect () {
    return (
        <Form className="ls-panel-select">
            <WorldSelect />
            <BookSelect />
        </Form>
    );
}
export default MenuSelect;