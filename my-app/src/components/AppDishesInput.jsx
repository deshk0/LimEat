import React from 'react'
import ReactDOM from 'react-dom'

const API_KEY = "bE5jkB34hMsZTgFN80jBrYa138RbukvmUiOMSCLe";



export class AppDishes extends React.Component{
    constructor(){
        super()   
    }

    render(){
        return(
            <div>
                <Result />
            </div>
        )
    }
}

class Result extends React.Component{
    constructor(){
        super()  
        
        
        this.state = {
            totalGramm: 0,
            cCal:0,
            totalCcal: 0,
            totalCarbohydrates: 0,
            totalFats: 0,
            totalProteins: 0,

            items: []
        }
    }
    setCcal(value){
        
        this.setState({
            cCal: value/100
        })

    }
    setTotalGramm(value){
        this.setState({
            totalGramm: value
        })

    }
    setTotalCcal(){
        
        this.setState({
            totalCcal: this.state.cCal * this.state.totalGramm
        })

    }
    setTotalCarbohydrates(value){
        this.setState({
            totalCarbohydrates: value/100
        })

    }
    setTotalFats(value){
        this.setState({
            totalFats: value/100
        })

    }
    setTotalProteins(value){
        this.setState({
            totalProteins: value
        })

    }
    handleSubmit() {
        const newItem = {
          id: ''
        };
        this.setState(state => ({
          items: state.items.concat(newItem),
          
        }));
    }
    


    render(){
        return(
            <div id="boxBreakfast">
            <div class="box-title">
                <div style={{marginBottom:'15px'}}>Завтрак</div>
            </div>

            <AppDishesBoxList 
             items={this.state.items}
             totalProteins={this.setTotalProteins.bind(this)}
             />

            <div style={{display:'flex', justifyContent:'center'}}>
                <button onClick={this.handleSubmit.bind(this)} class='addProduct'>
                    +Добавить продукт
                </button>
            </div>

            <div style={{fontSize:'34px'}}>
                Итого
            </div>

            <div style={{display:'flex', fontSize:'34px',justifyContent:'center'}}>
                <div style={{marginRight:'20px', fontSize:'24px'}}>кКалл: {this.state.totalCcal}</div>
                <div style={{marginRight:'20px', fontSize:'24px'}}>Углеводов: {this.state.totalCarbohydrates}</div>
                <div style={{marginRight:'20px', fontSize:'24px'}}>Жиров: {this.state.totalFats}</div>
                <div style={{marginRight:'20px', fontSize:'24px'}}>Белков: {this.state.totalProteins}</div>
            </div>
        </div>
        )
    }
}

class AppDishesBoxList extends React.Component{
    constructor(){
        super()
    }
    
    setTotalProteins(value){
        
        this.props.totalProteins(value)
    }

    render(){
        return(
            <div>
                {this.props.items.map(item => (
                    <AppDishesProductBox 
                        name={item.id}
                        totalProteins={this.setTotalProteins.bind(this)}

                    />

                ))}
            </div>
        )
    }
}

class AppDishesProductBox extends React.Component{
    constructor(){
        super()  
        
        
        this.state = {
            totalGramm: 0,
            cCal:0,
            totalCcal: 0,
            totalCarbohydrates: 0,
            totalFats: 0,
            totalProteins: 0
        }
    }
    setCcal(value){
        
        this.setState({
            cCal: value/100
        })

    }
    setTotalGramm(value){
        this.setState({
            totalGramm: value
        })

    }
    setTotalCcal(){
        
        this.setState({
            totalCcal: this.state.cCal * this.state.totalGramm
        })

    }
    setTotalCarbohydrates(value){
        this.setState({
            totalCarbohydrates: value/100
        })

    }
    setTotalFats(value){
        value = value/100
        this.props.totalFats(value)
        
        //this.setState({
        //    totalFats: value/100
        //})

    }
    setTotalProteins(value){
        value = value/100
        this.props.totalProteins(value)
        
        //this.setState({
        //    totalProteins: value/100
        //})

    }

    render(){
        return(
            <div>
                <div style={{display:'flex'}}>
                        <div>
                            <span class="thin">Продукт{this.props.name}</span><br />
                            <AppDishesInput />
                        </div>
                        <div style={{display:'flex'}}>
                            <AppDishesInputGramm onValue={this.setTotalGramm.bind(this)} />
                            <AppDishesInputCcal onValue={this.setCcal.bind(this)} />
                            <button onClick={this.setTotalCcal.bind(this)}>bum</button>
                        </div>
                    </div>
                <div class="inputContainer">
                    <div class="inputContainer-up">
                        <AppDishesInputCarbohydrates onValue={this.setTotalCarbohydrates.bind(this)} />
                        <AppDishesInputFats onValue={this.setTotalFats.bind(this)} />
                        <AppDishesInputProteins onValue={this.setTotalProteins.bind(this)} />
                        {/*
                        <div class="inputContainer-box">
                            <span>Итого кКал: </span><br />
                            <input class="box-inputs-small" type="text" />
                        </div>
                        */}
                    </div>
                </div>
            </div>
        )
    }
}


class AppDishesInput extends React.Component{
    constructor(props){
        super(props)
    }

    onChange(event){
        const value = event.target.value
        //console.log(value);
        //console.log(name);
        

        this.props.onValue(value)
        //this.props.onName(name)
    }

    render(){
        return(
            <div>
                
                <input 
                
                    type="text"    
                    class="box-inputs"
                    //onChange={this.onChange.bind(this)}
            
                />
            </div>
        )
    }
}
class AppDishesInputGramm extends React.Component{
    constructor(props){
        super(props)
    }

    onChange(event){
        const value = event.target.value
        //console.log(value);
        //console.log(name);
        

        this.props.onValue(value)
        //this.props.onName(name)
    }

    render(){
        return(
        <div class="inputContainer-box">
            <span>Грамм</span><br />
            <input onChange={this.onChange.bind(this)} class="box-inputs-small" type="text" />
        </div>
        )
    }
}
class AppDishesInputCcal extends React.Component{
    constructor(props){
        super(props)
    }

    onChange(event){
        const value = event.target.value
        //console.log(value);
        //console.log(name);
        

        this.props.onValue(value)
        //this.props.onName(name)
    }

    render(){
        return(
        <div class="inputContainer-box">
            <span>кКал/100г.</span><br />
            <input onChange={this.onChange.bind(this)} class="box-inputs-small" type="text" />
        </div>
        )
    }
}
class AppDishesInputCarbohydrates extends React.Component{
    constructor(props){
        super(props)
    }

    onChange(event){
        const value = event.target.value
        //console.log(value);
        //console.log(name);
        

        this.props.onValue(value)
        //this.props.onName(name)
    }

    render(){
        return(
        <div class="inputContainer-box">
            <span>Углеводы/100г. </span><br />
            <input onChange={this.onChange.bind(this)} class="box-inputs-small" type="text" />
        </div>
        )
    }
}
class AppDishesInputFats extends React.Component{
    constructor(props){
        super(props)
    }

    onChange(event){
        const value = event.target.value
        //console.log(value);
        //console.log(name);
        

        this.props.onValue(value)
        //this.props.onName(name)
    }

    render(){
        return(
        <div class="inputContainer-box">
            <span>Жиры/100г. </span><br />
            <input onChange={this.onChange.bind(this)} class="box-inputs-small" type="text" />
        </div>
        )
    }
}
class AppDishesInputProteins extends React.Component{
    constructor(props){
        super(props)
    }

    onChange(event){
        const value = event.target.value
        //console.log(value);
        //console.log(name);
        

        this.props.onValue(value)
        //this.props.onName(name)
    }

    render(){
        return(
            <div class="inputContainer-box">
                <span>Белки/100г. </span><br />
                <input onChange={this.onChange.bind(this)} class="box-inputs-small" type="text" />
            </div>
        )
    }
}
class AppDishesInputTotal extends React.Component{
    constructor(props){
        super(props)
    }

    onChange(event){
        const value = event.target.value
        //console.log(value);
        //console.log(name);
        

        this.props.onValue(value)
        //this.props.onName(name)
    }

    render(){
        return(
        <div class="inputContainer-box">
            <span>Итого кКал: </span><br />
            <input onChange={this.onChange.bind(this)} class="box-inputs-small" type="text" />
        </div>
        )
    }
}


//<button onClick={this.gettingDishes}>bats</button>