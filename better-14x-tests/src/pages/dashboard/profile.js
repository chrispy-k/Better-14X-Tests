import React from 'react';
import Sidebar from '../../components/Sidebar'
import ProfilePic from '../../images/testing.png';

export default function Profile() {
    return (
        <div>
            <div class ="flex-container">
                <div class = "flex-child 1">
                    <Sidebar />
                </div>
                <div class = "flex-class-dash">
                <img src={ProfilePic} alt="stock profile pic" />
                </div>
                <div class = "flex-class-dash">
                    <p>John Johnson</p>
                    <p>johnsonj@uw.edu</p>
                </div>
                </div>
        </div>
    )
}