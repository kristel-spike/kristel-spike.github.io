import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Tile from '../components/Tile';

import spike from '../assets/images/spike.jpg';
import circles from '../assets/images/circles.jpg';
import contact from '../assets/images/contact.jpg';

class Carousel extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'About Me',
                    subTitle: 'Who is she???',
                    imgSrc: spike,
                    link: '/about',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Works',
                    subTitle: 'GitHub, Multimedia Design, Art',
                    imgSrc: circles,
                    link: '/works',
                    selected: false 
                },
                {
                    id: 2,
                    title: 'Contact Me',
                    subTitle: 'Get in Touch!',
                    imgSrc: contact,
                    link: '/contact',
                    selected: false 
                },
            ]
        }
    }
    
    handleTileClick = (id, tile) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selcted = false;
            }
        });

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Tile item={item} click={(e => this.handleTileClick(item.id , e))} key={item.id} />    
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        )
    }
}

export default Carousel;