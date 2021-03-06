import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Title(props){

    return(
        <Jumbotron className="jumbotron-fluid p-0"> 
            <Container fluid={true}>
                <Row className="justify-content-center py-5">
                    <Col md={8} sm={12}>
                        {props.title && <h1 className="display-3 font-weight-bold">{props.title}</h1>}
                        {props.subTitle && <h3 className="display-5 font-weight-light">{props.subTitle}</h3>}
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default Title;