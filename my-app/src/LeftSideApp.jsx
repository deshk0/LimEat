import React from 'react'
import ReactDOM from 'react-dom';
import {AppDishes} from './components/AppDishesInput'
import {AppTotal} from './components/AppTotal'
import {AppCharacteristics} from './components/AppCharacteristics'


export class LeftSideApp extends React.Component{
    constructor(){
        super()

        this.state = {

            cCal1:0,
            cCal2:0,
            cCal3:0,
            cCal4:0,

            Carbohydrates1: 0,
            Carbohydrates2: 0,
            Carbohydrates3: 0,
            Carbohydrates4: 0,

            Fats1: 0,
            Fats2: 0,
            Fats3: 0,
            Fats4: 0,

            Proteins1: 0,
            Proteins2: 0,
            Proteins3: 0,
            Proteins4: 0,


            
            totalCcal: 0,
            totalCarbohydrates: 0,
            totalFats: 0,
            totalProteins: 0,




        }
    }
    setTotalCcal1(totalCcal){    
        this.setState({
            cCal1: totalCcal 
        })

    }
    setTotalCcal2(totalCcal){    
        this.setState({
            cCal2: totalCcal 
        })

    }
    setTotalCcal3(totalCcal){    
        this.setState({
            cCal3: totalCcal 
        })

    }
    setTotalCcal4(totalCcal){    
        this.setState({
            cCal4: totalCcal 
        })

    }

    setTotalCarbohydrates1(totalCarbohydrates){
        this.setState({
            Carbohydrates1: totalCarbohydrates
        })

    }
    
    setTotalCarbohydrates2(totalCarbohydrates){
        this.setState({
            Carbohydrates2: totalCarbohydrates
        })

    }
    
    setTotalCarbohydrates3(totalCarbohydrates){
        this.setState({
            Carbohydrates3: totalCarbohydrates
        })

    }
    
    setTotalCarbohydrates4(totalCarbohydrates){
        this.setState({
            Carbohydrates4: totalCarbohydrates
        })

    }
    setTotalFats1(totalFats){
        this.setState({
            Fats1: totalFats
        })

    }
    setTotalFats2(totalFats){
        this.setState({
            Fats2: totalFats
        })

    }
    setTotalFats3(totalFats){
        this.setState({
            Fats3: totalFats
        })

    }
    setTotalFats4(totalFats){
        this.setState({
            Fats4: totalFats
        })

    }
    setTotalProteins1(totalProteins){
        this.setState({
            Proteins1: totalProteins
        })

    }
    setTotalProteins2(totalProteins){
        this.setState({
            Proteins2: totalProteins
        })

    }
    setTotalProteins3(totalProteins){
        this.setState({
            Proteins3: totalProteins
        })

    }
    setTotalProteins4(totalProteins){
        this.setState({
            Proteins4: totalProteins
        })

    }

    setTotal(){    
        this.setState({
            totalCcal: this.state.cCal1 + this.state.cCal2 +this.state.cCal3 + this.state.cCal4,
            totalCarbohydrates: this.state.Carbohydrates1 + this.state.Carbohydrates2 +this.state.Carbohydrates3 + this.state.Carbohydrates4,
            totalFats: this.state.Fats1 + this.state.Fats2 +this.state.Fats3 + this.state.Fats4,
            totalProteins: this.state.Proteins1 + this.state.Proteins2 +this.state.Proteins3 + this.state.Proteins4,

        })

    }

    render(){
        return(
            <div class="leftBlock">
                <div>
                    <div><AppDishes
                        name={'Завтрак'} 
                        totalCcal={this.setTotalCcal1.bind(this)}
                        totalCarbohydrates={this.setTotalCarbohydrates1.bind(this)} 
                        totalFats={this.setTotalFats1.bind(this)} 
                        totalProteins={this.setTotalProteins1.bind(this)}
                        />
                    </div>
                    <div><AppDishes 
                        name={'Обед'}
                        totalCcal={this.setTotalCcal2.bind(this)}
                        totalCarbohydrates={this.setTotalCarbohydrates2.bind(this)} 
                        totalFats={this.setTotalFats2.bind(this)} 
                        totalProteins={this.setTotalProteins2.bind(this)} 
                        />
                    </div>
                    <div><AppDishes 
                        name={'Полудник'}
                        totalCcal={this.setTotalCcal3.bind(this)}
                        totalCarbohydrates={this.setTotalCarbohydrates3.bind(this)} 
                        totalFats={this.setTotalFats3.bind(this)} 
                        totalProteins={this.setTotalProteins3.bind(this)}   
                        />
                    </div>
                    <div><AppDishes 
                        name={'Ужин'}
                        totalCcal={this.setTotalCcal4.bind(this)}
                        totalCarbohydrates={this.setTotalCarbohydrates4.bind(this)} 
                        totalFats={this.setTotalFats4.bind(this)} 
                        totalProteins={this.setTotalProteins4.bind(this)}
                        />
                    </div>
                </div>

                <div class="rightBlock">

                    <div style={{margin:'10px'}}>
                    <div id="your-statistics">
                    <div style={{marginTop:"0px", display:'flex', justifyContent:'center',fontSize:'28px'}}>Всего каллорий
                    <button onClick={this.setTotal.bind(this)}>Рассчитать</button>
                    </div>
                    <div id="your-statistics-up">
                        <div id="your-statistics-rectengle">
                            <div style={{fontSize: '48px', textAlign: 'center', marginTop:"50px"}}>
                                {this.state.totalCcal}
                            </div>
                        </div>
                    </div>
                    <div style={{height:"2px", marginLeft:"22px", width:"495px", backgroundColor:"white"}}></div>
                    <div id="your-statistics-lower">
                        
                        <div class="useful-material">
                            <div style={{fontSize:"24px"}}>Углеводы</div>
                            <div style={{height:"6px", width:"138px", borderRadius:"5px",backgroundColor:"white", marginTop:"17px",marginBottom:"17px"}}></div>
                            <div>{this.state.totalCarbohydrates}</div>
                        </div>

                        <div class="useful-material">
                            <div style={{fontSize:"24px"}}>Белки</div>
                            <div style={{height:"6px", width:"138px", borderRadius:"5px",backgroundColor:"white", marginTop:"17px",marginBottom:"17px"}}></div>
                            <div>{this.state.totalProteins}</div>
                        </div>

                        <div class="useful-material">
                            <div style={{fontSize:"24px"}}>Жиры</div>
                            <div style={{height:"6px", width:"138px", borderRadius:"5px",backgroundColor:"white", marginTop:"17px",marginBottom:"17px"}}></div>
                            <div>{this.state.totalFats}</div>
                        </div>
                    </div>
                </div>
                        
                    </div>
                    
                    <div style={{margin:'10px'}}>
                        <AppCharacteristics />
                    </div>
                    
                </div>
            </div>
        )
    }
    
}
{/* 
<div id="boxBreakfast">
    <div class="box-title">
        <div>Завтрак</div>
        <div style={{display:'flex'}}>
            <div>
                <AppDishes />
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
                <AppDishes />
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
                <AppDishes />
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
*/}



{/* 
<div id="calendar">
    <button class="day-Of-Week">Пн</button>
    <button class="day-Of-Week">Вт</button>
    <button class="day-Of-Week">Ср</button>
    <button class="day-Of-Week">Чт</button>
    <button class="day-Of-Week">Пт</button>
    <button class="day-Of-Week">Сб</button>
    <button class="day-Of-Week">Вс</button>
</div>
*/}