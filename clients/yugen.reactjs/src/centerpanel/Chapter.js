import React from 'react';
import { Card, CardHeader, CardFooter, CardBody, CardText, NavLink } from 'reactstrap'; 

export default function Chapter(props) {
    
    return (
    <Card>
        <CardHeader>
            <NavLink href={"#" + props.chapter.id}>
                {props.chapter.title}
            </NavLink>
        </CardHeader>
        <CardBody> 
            <CardText>
                {props.chapter.content}
            </CardText>        
        </CardBody>
        <CardFooter>{props.chapter.footer}</CardFooter>
    </Card>
    );
}