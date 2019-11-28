import React from 'react'
import ReactDOM from 'react-dom'

const API_KEY = "bE5jkB34hMsZTgFN80jBrYa138RbukvmUiOMSCLe";


{/*
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
 */}

export class AppDishes extends React.Component{
    constructor(){
        super()  
        
        
        this.state = {
            totalGramm: 0,

            cCal:0,
            Carbohydrates: 0,
            Fats: 0,
            Proteins: 0,

            totalCcal: 0,
            totalCarbohydrates: 0,
            totalFats: 0,
            totalProteins: 0,

            items: []
        }
    }

    setTotalGramm(value){
        this.setState({
            totalGramm: value
        })

    }

    setTotalCcal(totalCcal){    
        this.setState({
            cCal: totalCcal
        })

    }
    setTotalCarbohydrates(totalCarbohydrates){
        this.setState({
            Carbohydrates: totalCarbohydrates
        })

    }
    setTotalFats(totalFats){
        this.setState({
            Fats: totalFats
        })

    }
    setTotalProteins(totalProteins){
        this.setState({
            Proteins: totalProteins
        })

    }
    setTotal(){
        this.setState({
            totalCcal: this.state.totalCcal + this.state.cCal,
            totalCarbohydrates: this.state.totalCarbohydrates + this.state.Carbohydrates,
            totalFats: this.state.totalFats + this.state.Fats,
            totalProteins: this.state.totalProteins + this.state.Proteins,
        })   
        console.log(this.state.totalCcal)
        console.log(this.state.totalCarbohydrates)
        console.log(this.state.totalFats)
        console.log(this.state.totalProteins)
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
                <div style={{marginBottom:'15px'}}>{this.props.name}</div>
            </div>

            <AppDishesBoxList 
                items={this.state.items}

                totalCcal={this.setTotalCcal.bind(this)}
                totalCarbohydrates={this.setTotalCarbohydrates.bind(this)}
                totalFats={this.setTotalFats.bind(this)}
                totalProteins={this.setTotalProteins.bind(this)}
             
             />

            <div style={{display:'flex', justifyContent:'center'}}>
                <button onClick={this.handleSubmit.bind(this)} class='addProduct'>
                    +Добавить продукт
                </button>
            </div>

            <div style={{fontSize:'34px'}}>
                Итого <button onClick={this.setTotal.bind(this)}>BAM</button>
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
    
    setTotalCcal(totalCcal){
        
        this.props.totalCcal(totalCcal)
    }
    setTotalCarbohydrates(totalCarbohydrates){
        
        this.props.totalCarbohydrates(totalCarbohydrates)
    }
    setTotalFats(totalFats){
        
        this.props.totalFats(totalFats)
    }
    setTotalProteins(totalProteins){
        
        this.props.totalProteins(totalProteins)
    }

    render(){
        return(
            <div>
                {this.props.items.map(item => (
                    <AppDishesProductBox 
                        name={item.id}

                        totalCcal={this.setTotalCcal.bind(this)}
                        totalCarbohydrates={this.setTotalCarbohydrates.bind(this)}
                        totalFats={this.setTotalFats.bind(this)}
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
            Carbohydrates:0,
            Fats:0,
            Proteins:0,

            totalCcal: 0,
            totalCarbohydrates: 0,
            totalFats: 0,
            totalProteins: 0,

            check: false
        }
        this.setGramm = this.setGramm.bind(this)
        this.setCcal = this.setCcal.bind(this)
        this.setCarbohydrates = this.setCarbohydrates.bind(this)
        this.setFats = this.setFats.bind(this)
        this.setProteins = this.setProteins.bind(this)
        this.setTotal = this.setTotal.bind(this)
    }

    setGramm(value){
        this.setState({
            totalGramm: value
        })

    }
    setCcal(value){
        this.setState({
            cCal: value/100
        })

    }
    setCarbohydrates(value){
        this.setState({
            Carbohydrates: value/100
        })

    }
    setFats(value){
        this.setState({
            Fats: value/100
        })

    }
    setProteins(value){
        this.setState({
            Proteins: value/100
        })

    }
    setTotal(){
        this.setState({
            totalCcal: this.state.cCal * this.state.totalGramm,
            totalCarbohydrates: this.state.Carbohydrates * this.state.totalGramm,
            totalFats: this.state.Fats * this.state.totalGramm,
            totalProteins: this.state.Proteins * this.state.totalGramm,
        })

        const totalCcal = this.state.totalCcal
        const totalCarbohydrates = this.state.totalCarbohydrates
        const totalFats = this.state.totalFats
        const totalProteins = this.state.totalProteins

        this.props.totalCcal(totalCcal)    
        this.props.totalCarbohydrates(totalCarbohydrates)
        this.props.totalFats(totalFats)
        this.props.totalProteins(totalProteins)

        console.log(totalCcal)
        console.log(totalCarbohydrates)
        console.log(totalFats)
        console.log(totalProteins)




        //this.props.check()
        
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
                            <AppDishesInputGramm onValue={this.setGramm} />
                            <AppDishesInputCcal onValue={this.setCcal} />
                            <button onClick={this.setTotal}>bum</button>
                        </div>
                    </div>
                <div class="inputContainer">
                    <div class="inputContainer-up">
                        <AppDishesInputCarbohydrates onValue={this.setCarbohydrates} />
                        <AppDishesInputFats onValue={this.setFats} />
                        <AppDishesInputProteins onValue={this.setProteins} />
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