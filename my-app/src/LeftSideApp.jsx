import React from 'react'
import ReactDOM from 'react-dom';
import {AppDishesInput} from './components/AppDishesInput'


export class LeftSideApp extends React.Component{
    render(){
        return(
            <div class="leftBlock">
                <div id="calendar">
                    <button class="day-Of-Week">Пн</button>
                    <button class="day-Of-Week">Вт</button>
                    <button class="day-Of-Week">Ср</button>
                    <button class="day-Of-Week">Чт</button>
                    <button class="day-Of-Week">Пт</button>
                    <button class="day-Of-Week">Сб</button>
                    <button class="day-Of-Week">Вс</button>
                </div>
                
                <div id="boxBreakfast">
                    <div class="box-title">
                        <div>Завтрак</div>
                        <div style={{display:'flex'}}>
                            <div>
                                <AppDishesInput />
                            </div>
                            <div style={{display:'flex'}}>
                                <div class="inputContainer-box">
                                    <span>Грамм</span><br />
                                    <input class="box-inputs-small" type="text" />
                                </div>
                                <div class="inputContainer-box">
                                    <span>кКал/100г.</span><br />
                                    <input class="box-inputs-small" type="text" />
                                </div>
                            </div>
                        </div>


                    </div>
                    <div class="inputContainer">
                        <div class="inputContainer-up">
  
                            <div class="inputContainer-box">
                                <span>Углеводы/100г. </span><br />
                                <input class="box-inputs-small" type="text" />
                            </div>
                            <div class="inputContainer-box">
                                <span>Жиры/100г. </span><br />
                                <input class="box-inputs-small" type="text" />
                            </div>
                            <div class="inputContainer-box">
                                <span>Белки/100г. </span><br />
                                <input class="box-inputs-small" type="text" />
                            </div>
                            <div class="inputContainer-box">
                                <span>Итого кКал:</span><br />
                                <input class="box-inputs-small" type="text" />
                            </div>
                            <div class="inputContainer-lower">

                            </div>
                        </div>

                    </div>
                    <button class='addProduct'>+Добавить продукт</button>
                    <div style={{fontSize:'34px'}}>
                        Итого
                    </div>
                    <div style={{display:'flex', fontSize:'34px',justifyContent:'center'}}>
                        <div style={{marginRight:'20px', fontSize:'24px'}}>кКалл: 0</div>
                        <div style={{marginRight:'20px', fontSize:'24px'}}>Углеводов: 0</div>
                        <div style={{marginRight:'20px', fontSize:'24px'}}>Жиров: 0</div>
                        <div style={{marginRight:'20px', fontSize:'24px'}}>Белков: 0</div>
                    </div>
                </div>
                <div id="boxLunch">
                    <div class="box-title">
                        <div>Обед</div>
                        <div style={{display:'flex'}}>
                            <div>
                                <AppDishesInput />
                            </div>
                            <div style={{display:'flex'}}>
                                <div class="inputContainer-box">
                                    <span>Грамм</span><br />
                                    <input class="box-inputs-small" type="text" />
                                </div>
                                <div class="inputContainer-box">
                                    <span>кКал/100г.</span><br />
                                    <input class="box-inputs-small" type="text" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="inputContainer">
                        <div class="inputContainer-box">
                            <span>Углеводы/100г. </span><br />
                            <input class="box-inputs-small" type="text" />
                        </div>
                        <div class="inputContainer-box">
                            <span>Жиры/100г. </span><br />
                            <input class="box-inputs-small" type="text" />
                        </div>
                        <div class="inputContainer-box">
                                <span>Белки/100г. </span><br />
                                <input class="box-inputs-small" type="text" />
                            </div>
                            <div class="inputContainer-box">
                                <span>Итого кКал:</span><br />
                                <input class="box-inputs-small" type="text" />
                            </div>
                    </div>
                    <div style={{display:'flex'}}>
                            <div>
                                <AppDishesInput />
                            </div>
                            <div style={{display:'flex'}}>
                                <div class="inputContainer-box">
                                    <span>Грамм</span><br />
                                    <input class="box-inputs-small" type="text" />
                                </div>
                                <div class="inputContainer-box">
                                    <span>кКал/100г.</span><br />
                                    <input class="box-inputs-small" type="text" />
                                </div>
                            </div>
                        </div>
                    <div class="inputContainer">
                        <div class="inputContainer-box">
                            <span>Углеводы/100г. </span><br />
                            <input class="box-inputs-small" type="text" />
                        </div>
                        <div class="inputContainer-box">
                            <span>Жиры/100г. </span><br />
                            <input class="box-inputs-small" type="text" />
                        </div>
                        <div class="inputContainer-box">
                                <span>Белки/100г. </span><br />
                                <input class="box-inputs-small" type="text" />
                            </div>
                            <div class="inputContainer-box">
                                <span>Итого кКал:</span><br />
                                <input class="box-inputs-small" type="text" />
                            </div>
                    </div>
                    <button class='addProduct'>+Добавить продукт</button>
                    <div style={{fontSize:'34px'}}>
                        Итого
                    </div>
                    <div style={{display:'flex', fontSize:'34px',justifyContent:'center'}}>
                        <div style={{marginRight:'20px', fontSize:'24px'}}>кКалл: 0</div>
                        <div style={{marginRight:'20px', fontSize:'24px'}}>Углеводов: 0</div>
                        <div style={{marginRight:'20px', fontSize:'24px'}}>Жиров: 0</div>
                        <div style={{marginRight:'20px', fontSize:'24px'}}>Белков: 0</div>
                    </div>
                    
                </div>
                <div id="boxSnack">
                <div class="box-title">
                        <div>Полудник</div>
                        <div>
                            <span class="thin">Продукты</span><br />
                            <input class="box-inputs" type="text" />
                        </div>
                    </div>
                    <div class="inputContainer">
                        <div class="inputContainer-box">
                            <span>Грамм</span><br />
                            <input class="box-inputs-small" type="text" />
                        </div>
                        <div class="inputContainer-box">
                            <span>кКал/100г.</span><br />
                            <input class="box-inputs-small" type="text" />
                        </div>
                        <div class="inputContainer-box">
                            <span>Углеводы/100г. </span><br />
                            <input class="box-inputs-small" type="text" />
                        </div>
                        <div class="inputContainer-box">
                            <span>Жиры/100г. </span><br />
                            <input class="box-inputs-small" type="text" />
                        </div>
                    </div>
                    <button class='addProduct'>+Добавить продукт</button>
                </div>
                <div id="boxDinner">
                <div class="box-title">
                        <div>Ужин</div>
                        <div>
                            <span class="thin">Продукты</span><br />
                            <input class="box-inputs" type="text" />
                        </div>
                    </div>
                    <div class="inputContainer">
                        <div class="inputContainer-box">
                            <span>Грамм</span><br />
                            <input class="box-inputs-small" type="text" />
                        </div>
                        <div class="inputContainer-box">
                            <span>кКал/100г.</span><br />
                            <input class="box-inputs-small" type="text" />
                        </div>
                        <div class="inputContainer-box">
                            <span>Углеводы/100г. </span><br />
                            <input class="box-inputs-small" type="text" />
                        </div>
                        <div class="inputContainer-box">
                            <span>Жиры/100г. </span><br />
                            <input class="box-inputs-small" type="text" />
                        </div>
                    </div>
                    <button class='addProduct'>+Добавить продукт</button>
                </div>
            
            </div>
        )
    }
    
}