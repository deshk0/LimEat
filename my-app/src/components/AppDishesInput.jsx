import React from 'react'
import ReactDOM from 'react-dom'


export class AppDishesInput extends React.Component{

    constructor() {
        super();
        this.state = { 
            text: ''
         }
         
        this.dishesChange = this.dishesChange.bind(this);

    }

    dishesChange(e) {
        const value = e.target.value
        this.setState({ 
            text: value
         });
        
        this.props.dishesValue(value)
        
    }

    render(){
        return(
            <div>
                <span class="thin">Продукты</span><br />
                <input 
                class="box-inputs" 
                type="text"
                onChange={this.dishesChange}
                />
            </div>
        )
    }
}