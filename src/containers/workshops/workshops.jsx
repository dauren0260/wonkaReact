import React, { Component } from 'react'
import { connect } from 'react-redux'
import InnerBanner from '../../components/inner_banner/inner_banner'
import {
    pageOn,
} from '../../redux/actions';

import WorkshopsCourse from '../../components/workshops_course/workshops_course'

import feature1 from '../../assets/workshop/feature-1.jpg';
import feature2 from '../../assets/workshop/feature-2.jpg';
import feature3 from '../../assets/workshop/feature-3.jpg';
import courseJpg from '../../assets/workshop/course-pic-1.jpg';
import courseJpg2 from '../../assets/workshop/course-pic-2.jpg';
import courseJpg3 from '../../assets/workshop/course-pic-3.jpg';

import banner from '../../assets/workshop/banner-work.jpg'

class Workshops extends Component {

    state = {
        banner:{
            src: banner,
            pageName: "Workshops"
        },
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
            {
                key: "course3",
                name:"Back to School Workshop",
                startHour: "14:00",
                endHour: "17:00",
                chef: "Christina",
                location: "Evrendeki toz",
                price: "300",
                month: "July",
                date:"28",
                src: courseJpg3
            },
        ]
    }

    componentDidMount(){
        this.props.pageOn("workshops")
    }

    render() {
        const {banner, workshops} = this.state
        return (
            <div className="workshops">
                <InnerBanner banner={banner}/>
                <div className="title">
                    <h3>Our Features</h3>
                </div>
                <div className="features">
                    <div className="container-features">
                        <img src={feature1} alt="features" />
                        <p>Years of Pratical Experience</p>
                    </div>
                    <div className="container-features">
                        <img src={feature2} alt="features" />
                        <p>Easy Way to Learn for Beginners</p>
                    </div>
                    <div className="container-features">
                        <img src={feature3} alt="features" />
                        <p>Award Wining Chocolatier</p>
                    </div>
                </div>
                <div className="workshop-course">
                    <WorkshopsCourse workshops={workshops}/>
                </div>
            </div>
        )
    }
}

export default connect(
    state => ({

    }),
    {
        pageOn
    }
)(Workshops)