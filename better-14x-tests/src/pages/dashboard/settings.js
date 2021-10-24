import React from 'react';
import Sidebar from '../../components/Sidebar'
import '../css/settings.css';

export default function Settings() {
    return (
        <div>
            <div class ="flex-container">
                <div class = "flex-child 1">
                    <Sidebar />
                </div>
                <div class = "flex-class-dash">
                <h1>Settings</h1>
                <ol>
                    <ul>Full name: John Johnson</ul>
                    <ul>Display name: johnsonj</ul>
                    <ul>Time zone: Pacific Standard Time</ul>
                    <ul>UW email: johnsonj@uw.edu</ul>
                </ol>
                </div>
                </div>
        </div>
    )
}