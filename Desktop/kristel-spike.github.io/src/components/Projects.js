import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import Tile from '../components/Tile';

import github from '../assets/images/github.jpg';
import behance from '../assets/images/behance.jpg';
import portfolio from '../assets/images/portfolio.jpg';
import insta1 from '../assets/images/insta1.jpg';

class Projects extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'FavLinks',
                    subTitle: 'React Project that captures your favorite link and displays it.',
                    imgSrc: github,
                    link: 'https://github.com/kristel-spike/favLinks',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Behance',
                    subTitle: 'Check out my other graphic design work.',
                    imgSrc: behance,
                    link: 'https://www.behance.net/kristelb',
                    selected: false 
                },
                {
                    id: 2,
                    title: 'Portfolio',
                    subTitle: 'This site. ',
                    imgSrc: portfolio,
                    link: '/',
                    selected: false 
                },
                {
                    id: 3,
                    title: 'Instagram',
                    subTitle: 'Peep my design Instagram.',
                    imgSrc: insta1,
                    link: 'https://instagram.com/kab.mmdesigns?igshid=19hrd4qvv1v07',
                    selected: false 
                },
            ]
        }
    }
    
    handleWorksClick = (id, tile) => {

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

    makeWorksItems = (items) => {
        return items.map(item => {
            return <Tile item={item} click={(e => this.handleWorksClick(item.id , e))} key={item.id} />    
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeWorksItems(this.state.items)}
                </Row>
            </Container>
        )
    }
}

export default Projects;