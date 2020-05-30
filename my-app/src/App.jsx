import React from 'react'
import ReactDOM from 'react-dom';
import { LeftSideApp } from './LeftSideApp.jsx';
import { RightSideApp } from './RightSideApp.jsx';




export class MyApp extends React.Component{
    render(){
        return(
            <div class="wrapper">
                <div style={{color:'black'}}>Opa</div>
                <Full />
            </div>
        )
    }
    
}
class Full extends React.Component{
    render(){
        return(
            <div class="main">
                <div><LeftSideApp /></div>
                <div><RightSideApp /></div>
            </div>
        )
    }
}

class MyApp2 extends React.Component{
    render(){
        return
    }
}
