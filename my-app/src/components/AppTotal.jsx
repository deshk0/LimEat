import React from 'react'
import ReactDOM from 'react-dom'

export class AppTotal extends React.Component{


    render(){
        return(
            <div id="your-statistics">
                    <div style={{marginTop:"0px", display:'flex', justifyContent:'center',fontSize:'28px'}}>Всего каллорий</div>
                    <div id="your-statistics-up">
                        <div id="your-statistics-rectengle">
                            <div style={{fontSize: '48px', textAlign: 'center', marginTop:"50px"}}>
                                1000
                            </div>
                        </div>
                    </div>
                    <div style={{height:"2px", marginLeft:"22px", width:"495px", backgroundColor:"white"}}></div>
                    <div id="your-statistics-lower">
                        
                        <div class="useful-material">
                            <div style={{fontSize:"24px"}}>Углеводы</div>
                            <div style={{height:"6px", width:"138px", borderRadius:"5px",backgroundColor:"white", marginTop:"17px",marginBottom:"17px"}}></div>
                            <div>204/204</div>
                        </div>

                        <div class="useful-material">
                            <div style={{fontSize:"24px"}}>Белки</div>
                            <div style={{height:"6px", width:"138px", borderRadius:"5px",backgroundColor:"white", marginTop:"17px",marginBottom:"17px"}}></div>
                            <div>31/81</div>
                        </div>

                        <div class="useful-material">
                            <div style={{fontSize:"24px"}}>Жиры</div>
                            <div style={{height:"6px", width:"138px", borderRadius:"5px",backgroundColor:"white", marginTop:"17px",marginBottom:"17px"}}></div>
                            <div>43/54</div>
                        </div>
                    </div>
                </div>
        )
    }
}