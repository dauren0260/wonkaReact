import React, { Component } from 'react'
import { connect } from 'react-redux'
import {createGlobalStyle } from 'styled-components';

import fontUrl from '../../assets/fonts/ITCKRIST.TTF';
import Carousel from '../carousel/carousel';
import Productdemo from '../main_product/main_product';
import NewArrivals from '../../components/main_newArrivals/main_newArrivals';
import WorkshopsCourse from '../../components/workshops_course/workshops_course'
import MainFactory from '../../components/main_factory/main_factory';

import {
    pageOn
} from '../../redux/actions'

import workshopBg from '../../assets/workshop_bg.jpg';
import courseJpg from '../../assets/workshop/course-pic-1.jpg';
import courseJpg2 from '../../assets/workshop/course-pic-2.jpg';



const GlobalStyles = createGlobalStyle`
body {
    @font-face {
        font-family: kristen;
        src: url(${fontUrl});
    }

    font-family: 'Molengo', 'kristen', sans-serif;
}
`

class Main extends Component {

    state = {
        workshops:[
            {
                key: "course1",
                name:"Chocolate Addicted Workshop",
                startHour: "13:00",
                endHour: "16:00",
                chef: "Ronan Appello",
                location: "Yıldızların",
                price: "280",
                month: "June",
                date:"23",
                src: courseJpg
            },
            {
                key: "course2",
                name:"The Art of Bean to Bar Workshop",
                startHour: "14:00",
                endHour: "17:00",
                chef: "Ronan Appello",
                location: "Ay gezegeni",
                price: "250",
                month: "July",
                date:"15",
                src: courseJpg2
            },
        ]
    }

    componentDidMount(){
        this.props.pageOn("")
    }

    render() {
        const {workshops} = this.state;
        return (
            <div className="index">
                <GlobalStyles />
                <Carousel/>
                <div className="title">
                    <h3>Products</h3>
                </div>
                <Productdemo/>
                <div className="title">
                    <h3>New arrivals</h3>
                </div>
                <NewArrivals/>
                <div className="title">
                    <h3>Workshops</h3>
                </div>
                <div className="slogan" style={{backgroundImage:`url(${workshopBg})`}}>
                    <p>Chocolate &nbsp;Workshops &nbsp;for &nbsp;a &nbsp;variety &nbsp;of &nbsp;audiences</p>
                </div>
                <div className="workshop-course">
                    <WorkshopsCourse workshops={workshops}/>
                    <button className="btn">More</button>
                </div>
                <div className="title">
                    <h3>Factory Tour</h3>
                    <p className="caption">We invite you to a wonderful world that is overflowing with love for chocolate.</p>
                </div>
                <MainFactory/>
                <p className="open-time">Opening Time : Tue - Sun | 09:00 - 18:00</p>
                <div className="moreinfo-factory">
                    <button className="btn tickets">Tickets</button>
                    <button className="btn access">Access</button>
                </div>
            </div>
        )
    }
}


export default connect(
    state => ({
        pageOnState: state.pageOnReducer
    }),
    {
        pageOn
    }
)(Main)
