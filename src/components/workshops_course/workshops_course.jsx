import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Icon from '@material-ui/core/Icon';
import FaceIcon from '@material-ui/icons/Face';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import LocationOnIcon from '@material-ui/icons/LocationOn';


export default class WorkshopsCourse extends Component {
    render() {
        return (
            this.props.workshops.map((item)=>{
                return (
                    <div className="course-item" key={item.key}>
                        <div className="date">
                            <p>{item.date}</p>
                            <p>{item.month}</p>
                        </div>
                        
                        <Link to="/courseInfo">
                            <img src={item.src} alt="lava cake" />
                            <div className="class-info">
                                <p>{item.name}</p>
                                <p>It’s a pratical, fun workshop in a light and fun atmosphere.</p>
                                <div className="class-detail">
                                    <div className="content">
                                        <Icon component={AccessAlarmIcon}></Icon>
                                        <div className="text">
                                            <span>Hour</span>
                                            <span>{item.startHour} - {item.endHour}</span>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <Icon component={FaceIcon}></Icon>
                                        <div className="text">
                                            <span>Chef</span>
                                            <span>{item.chef}</span>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <Icon component={LocationOnIcon}></Icon>
                                        <div className="text">
                                            <span>Location</span>
                                            <span>{item.location}</span>
                                        </div>
                                    </div>
                                    <div className="content">
                                        <Icon component={AttachMoneyIcon}></Icon>
                                        <div className="text">
                                            <span>Price</span>
                                            <span>${item.price}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                )
            })
        )
    }
}
