import React from 'react'
import ReactDOM from 'react-dom'

const API_KEY = "bE5jkB34hMsZTgFN80jBrYa138RbukvmUiOMSCLe";


export class AppDishesInput extends React.Component{

    constructor() {
        super();
        this.state = { 
            text: '',
            open: false,
         }
         
        this.dishesChange = this.dishesChange.bind(this);
         this.dishes = [
            { name: 'banana' },
            { name: 'apple' },
            { name: 'meat' },
         ];
    }

    gettingDishes = async () =>{
        const api_url = await fetch(`https://developer.nrel.gov/api/alt-fuel-stations/v1/nearest.json?api_key=${API_KEY}&location=Denver+CO`,{
            method: 'POST',
            headers:{
                "Content-Type" :"application/json",
                "generalSearchInput":"Cheddar cheese"
            },
            
        })
        const data = await api_url.json()
        console.log(data)
    }

    dishesChange(e) {
        const value = e.target.value
        this.setState({ 
            text: value,
            open: true,
         });
    }

    renderDropDown() {
        if (this.state.open) {
            const filteredItems = this.dishes.filter(item => item.name.indexOf(this.state.text) === 0)
            return (
                <div className="box-dropdown">
                    {filteredItems.map(item => (
                        <div style={{ color: 'black' }}>{item.name}</div>
                    ))}
                </div>
            );
        }
    }

    render(){
        return(
            <div style={{ position: 'relative' }}>
                <span class="thin">Продукты</span><br />
                <input 
                class="box-inputs" 
                type="text"
                onChange={this.dishesChange}
                onBlur={() => this.setState({ open: false })}
                />
                {this.renderDropDown()}
                
            </div>
        )
    }
}
//<button onClick={this.gettingDishes}>bats</button>