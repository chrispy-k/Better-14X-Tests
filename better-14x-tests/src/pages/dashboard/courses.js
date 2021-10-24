import React from 'react';
import Sidebar from '../../components/Sidebar'
import '../css/courses.css';

export default function Courses() {
    return (
        <div>
            <div class ="flex-container">
                <div class = "flex-child 1">
                    <Sidebar />
                </div>
                <div class = "flex-class-dash">
                <h1>Courses</h1>
                <ol>
                    <ul>CSE 142</ul>
                    <ul>CSE 143</ul>
                    <ul>CSE 373</ul>
                </ol>
                </div>
                </div>
        </div>
    )
}