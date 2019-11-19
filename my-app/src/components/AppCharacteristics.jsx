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
        super(

        )

        this.state = {
            //index = 0
        }
    }

    indexFormule(weight, height){
        const index = weight/height*height
        
        this.props.index = index 
        return index
    }



    render(){
        return(
            <div>
                <div style={{fontSize:"20px", color:"blue",fontWeight:"600",marginBottom:"16px",marginLeft:"62px", marginTop:"20px"}}>Результат</div>
                    <div style={{fontSize:"20px", color:"black",fontWeight:"400",marginBottom:"16px",marginLeft:"62px"}}>
                    Индекс массы тела:
                    </div>
                <div style={{fontSize:"20px", color:"black",fontWeight:"400",marginBottom:"16px",marginLeft:"62px"}}>
                    Суточная норма калорий: кКал
                </div>
                <div style={{fontSize:"20px", color:"black",fontWeight:"400",marginBottom:"16px",marginLeft:"62px"}}>
                    Нормальный вес: от кг
                </div>
        </div>
        )
    }
}



