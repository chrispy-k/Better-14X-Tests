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
                </div>
                </div>
        </div>
    )
}