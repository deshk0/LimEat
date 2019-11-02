import React from 'react'
import ReactDOM from 'react-dom';
import { LeftSideApp } from './LeftSideApp.jsx';
import { RightSideApp } from './RightSideApp.jsx';




export class MyApp extends React.Component{
    render(){
        return(
            <div class="wrapper">
                <div class="main">
                    <div><LeftSideApp /></div>
                    <div><RightSideApp /></div>
                </div>
            </div>
        )
    }
    
}

