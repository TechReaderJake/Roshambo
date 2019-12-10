import React from "react";
import { Form } from 'reactstrap';

import WorldSelect from '../world/WorldSelect';
import BookSelect from '../book/BookSelect';

function MenuSelect () {
    return (
        <Form className="ls-panel-select">
            <WorldSelect />
            <BookSelect />
        </Form>
    );
}
export default MenuSelect;