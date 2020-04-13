import React from 'react';

import spike from '../assets/images/spike.jpg';
import circles from '../assets/images/circles.png';
import phone from '../assets/images/phone.jpg';

class Carousel extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            items: [
                {
                    id:0,
                    title: 'About Me',
                    subTitle: 'Who is she???',
                    imgSrc: spike,
                    link: '',
                    selected: false
                },
                {
                    id:1,
                    title: 'Works',
                    subTitle: 'GitHub, Multimedia Design, Art',
                    imgSrc: circles,
                    link: 'https://www.behance.net/kristelb',
                    selected: false 
                },
                {
                    id:3,
                    title: 'Contact Me',
                    subTitle: 'Get in Touch!',
                    imgSrc: phone,
                    link: '',
                    selected: false 
                }
            ]
        }
    }
    
    handleTileClick = (id, tile) => {
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if (item.id !== id) {
                item.selcted = false;
            }
        });

        this.setState({
            items
        })
    }




    render() {
        return(
            <p>Carousel works!</p>
        )
    }
}

export default Carousel;