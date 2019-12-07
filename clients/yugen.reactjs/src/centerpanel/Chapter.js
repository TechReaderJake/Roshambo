import React from 'react';
import { Card, CardHeader, CardFooter, CardBody, CardText } from 'reactstrap'; 

export default function Chapter(props) {
    console.log(props.chapter);
    return (
    <Card>
        <CardHeader id={props.chapter.id}>
            {props.chapter.name}
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