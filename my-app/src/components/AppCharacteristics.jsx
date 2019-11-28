import React from 'react'
import ReactDOM from 'react-dom'

//export class AppCharacteristics extends React.Component{
//    constructor(){
//        super()
//
//        
//    }
//
//
//
//    render(){
//        return(
//            <div>
//                <Form />
//                <Result />
//            </div>
//        )
//    }
//}
export class AppCharacteristics extends React.Component{
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
            gender: '',
            activity: 0,

            age: 0,
            height: 0,
            weight: 0,
            
            index: 0,
            dailyNormal: 0,
            normalWeight: ''
        }
        this.dailyNormal = this.dailyNormal.bind(this)
        this.indexFormule = this.indexFormule.bind(this)
    }

    setGender(value){
        
        value = value
        if(value === 'М'){
            this.setState({
                gender: 'man'
            })
        }else if(value === 'Ж'){
            this.setState({
                gender: 'woman'
            })
        }
        console.log(this.state.gender)
    }
    setActivity(value){
        value = value
        if(value === 'very low'){
            this.setState({
                activity: 1.2
            })
        }else if(value === 'low'){
            this.setState({
                activity: 1.375
            })
        }else if(value === 'normal'){
            this.setState({
                activity: 1.55
            })
        }else if(value === 'hight'){
            this.setState({
                activity: 1.725
            })
        }else if(value === 'very hight'){
            this.setState({
                activity: 1.9
            })
        }
    }

    onClickHeight(value){
        console.log(value)
        

        value = value
        this.setState({
            height: value
        })
        

    }
    onClickWeight(value){
        console.log(value)
        

        value = value
        this.setState({
            weight: value
        })
    }
    onClickAge(value){
        console.log(value)
        

        value = value
        this.setState({
            age: value
        })
    }



    indexFormule(){

        const w = this.state.weight
        const h = this.state.height / 100 * this.state.height / 100
        

        const index = w/h
        console.log(index)

        this.setState({
            index: Math.round(index) 
        })
    }

    normalWeight(){

    }

    dailyNormal(){
        const gender = this.state.gender
        console.log(gender)

        if(gender === 'man'){
            
            const bmr = 88.36 + 13.4 * this.state.weight + 4.8*this.state.height - 5.7*this.state.age
            const dailyNormal = bmr * this.state.activity
            this.setState({
                dailyNormal: Math.round(dailyNormal) 
            })

        }else if(gender === 'woman'){

            const bmr = 447.6 + 9.2 * this.state.weight + 3.1*this.state.height - 4.3*this.state.age
            const dailyNormal = bmr * this.state.activity
            this.setState({
                dailyNormal: Math.round(dailyNormal) 
            })

        }

    }



    render(){
        return(
            <div class="characteristic-container">
                
                <div class="characteristic-container-characteristic">
                    <div style={{display:"flex"}}>
                        <CharacteristicsInputHeight name={'Рост'} onValue={this.onClickHeight.bind(this)}  />
                        <CharacteristicsInputWeight name={'Вес'} onValue={this.onClickWeight.bind(this)}  />
                        <CharacteristicsInputAge name={'Возраст'} onValue={this.onClickAge.bind(this)}  />
                        
                        {/*<CharacteristicsForm

                            name={'Рост'}
                            AnyValue={this.onClick.bind(this)}
                        />
                        <CharacteristicsForm

                            name={'Вес'}
                            AnyValue={this.onClick.bind(this)}

                        />
                        <CharacteristicsForm

                            name={'Возраст'}
                            AnyValue={this.onClick.bind(this)}

                        />
                        */}
                        <div class="characteristic-container-traning">
                            <div style={{fontSize:"20px", color:"blue",fontWeight:"600",marginBottom:"16px"}}>Уровень дневной активности</div>
                            <CharacteristicsInputActivity onValue={this.setActivity.bind(this)} />
                            <CharacteristicsInputGender onValue={this.setGender.bind(this)} />
                            <button onClick={(event) => {this.indexFormule(event); this.dailyNormal(event)}} > РАссчитать</button>
                        </div>
                    </div>
                
                
                <div>
 
                    <div style={{fontSize:"20px", color:"blue",fontWeight:"600",marginBottom:"16px",marginLeft:"62px", marginTop:"20px"}}>Результат</div>
                        <div style={{fontSize:"20px", color:"black",fontWeight:"400",marginBottom:"16px",marginLeft:"62px"}}>
                        Индекс массы тела: {this.state.index} {this.state.normalWeight}
                        </div>
                    <div style={{fontSize:"20px", color:"black",fontWeight:"400",marginBottom:"16px",marginLeft:"62px"}}>
                        Суточная норма калорий: {this.state.dailyNormal} кКал 
                    </div>
                    {/*
                    <div style={{fontSize:"20px", color:"black",fontWeight:"400",marginBottom:"16px",marginLeft:"62px"}}>
                        Нормальный вес: от {this.state.normalWeight} кг
                    </div>
                    */}
                </div>
                </div>
            </div>
        )
    }
}





class CharacteristicsForm extends React.Component{
    constructor(props){
        super(props)
    }

    setValue(value){

        this.props.AnyValue(value)
        console.log(`${value}`)
    }

    

    render(){
        return(
            <div>
                <div class="black-d">{this.props.name}</div>
                <CharacteristicsInput 
                    
                    onValue={this.setValue.bind(this)}
                    onChange={this.setValue.bind(this)}

                />
            </div>
        )
    }
}

class CharacteristicsInput extends React.Component{
    constructor(props){
        super(props)
    }

    onChange(event){
        const value = event.target.value
        console.log(value);
        

        this.props.onValue(value)
    }

    render(){
        return(
            <input 
                type="text"    
                class="characteristic-input"
                onChange={this.onChange.bind(this)}
            
            />
        )
    }
}
class CharacteristicsInputHeight extends React.Component{
    constructor(props){
        super(props)
    }

    onChange(event){
        const value = event.target.value
        const name = 'Height'

        //console.log(value);
        //console.log(name);
        

        this.props.onValue(value)
        //this.props.onName(name)
    }

    render(){
        return(
            <div>
                <div class="black-d">{this.props.name}</div>
                <input 
            
                    type="text"    
                    class="characteristic-input"
                    onChange={this.onChange.bind(this)}
        
                />
            </div>
        )
    }
}
class CharacteristicsInputWeight extends React.Component{
    constructor(props){
        super(props)
    }

    onChange(event){
        const value = event.target.value
        const name = 'Weight'

        //console.log(value);
        //console.log(name);
        

        this.props.onValue(value)
        //this.props.onName(name)
    }

    render(){
        return(
            <div>
                <div class="black-d">{this.props.name}</div>
                <input 
                
                    type="text"    
                    class="characteristic-input"
                    onChange={this.onChange.bind(this)}
            
                />
            </div>
        )
    }
}
class CharacteristicsInputAge extends React.Component{
    constructor(props){
        super(props)
    }

    onChange(event){
        const value = event.target.value
        const name = 'Age'

        //console.log(value);
        //console.log(name);
        

        this.props.onValue(value)
        //this.props.onName(name)
    }

    render(){
        return(
            <div>
                <div class="black-d">{this.props.name}</div>
                <input 
                
                    type="text"    
                    class="characteristic-input"
                    onChange={this.onChange.bind(this)}
            
                />
            </div>
        )
    }
}

class CharacteristicsInputGender extends React.Component{
    constructor(){
        super()
    }

    onChange(event){
        const value = event.target.value
        console.log(value)
        this.props.onValue(value)
    }


    render(){
        return(
            <select onChange={this.onChange.bind(this)}  id="characteristic-container-select">
                <option value="">Выберите что-нибудь</option>
                <option value='М'>М</option>
                <option value='Ж'>Ж</option>
            </select>
        )
    }
}
class CharacteristicsInputActivity extends React.Component{
    constructor(){
        super()
    }

    onChange(event){
        const value = event.target.value
        console.log(value)
        this.props.onValue(value)
    }


    render(){
        return(
            <select onChange={this.onChange.bind(this)}  id="characteristic-container-select">
                <option value="very low">Минимальный уровень активности</option>
                <option value="low">Низкий уровень активности</option>
                <option value="normal">Средний уровень активности</option>
                <option value="hight">Высокий уровень активности</option>
                <option value="very hight">Очень высокий уровень активности</option>
            </select>
        )
    }
}