import React from 'react'
import ReactDOM from 'react-dom';


export class LeftSideApp extends React.Component{
    render(){
        return(
            <div class="leftBlock">
                <div id="calendar">
                    1 2 3 4 5 6 7
                </div>
                <div id="boxBreakfast">
                Завтрак
                    <div class="inputBox">
                        <div>
                            <span>Продукты</span><br />
                            <input></input>
                        </div>
                    </div>
                </div>
                <div id="boxLunch">
                    Обед
                </div>
                <div id="boxSnack">
                    Полудник
                </div>
                <div id="boxDinner">
                    Ужин
                </div>
        </div>
        )
    }
    
}