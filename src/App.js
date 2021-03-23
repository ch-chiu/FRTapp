import React from "react";
import axios from 'axios';


const api = axios.create({
    baseURL: "http://data.fixer.io/api/latest?access_key=fe3a9b3f9ac173a3e51d8ea22951cf95"
    
})
class App extends React.Component {
    state = {
        rates: []
    }
    constructor(){
        super();

        api.get('').then(res=>{
            this.setState({rates: res.data.rates})  
        });
        console.log(this.rates);

    }

    Style = {
        margin: '10px',
        padding: '10px',
        
    };

    getColor = (key, num) => {
        if (key === "HKD" || checkEven(num)) return '2px solid red';
        return '1px solid black';
    };

    


    render(){
        return(
            <div className="App" style ={this.Style}>
                <h1>Forex Rates Table</h1>
                <style>{`
                    table, th, td{
                        border:1px solid black;
                    }
                `}</style>
                <div>
                <table>
                    <thead>
                        <tr>
                            <td>INDEX</td>
                            <td>VALUE</td>
                            <td>NEW_VALUE</td>
                        </tr>
                    </thead>
                    <tbody>
                {
                    Object.keys(this.state.rates).map((key,i)=>(
                    <tr key={i}>
                        <td style={{border: this.getColor(key, 1)}}>{key} </td>
                        <td style={{border: this.getColor(key,this.state.rates[key])}}>{this.state.rates[key]} </td>
                        <td style={{border: this.getColor(key,(this.state.rates[key]+10.0002).toFixed(6))}}>{(this.state.rates[key]+10.0002).toFixed(6)}</td>
                    </tr>
                    ))
                }
                </tbody>
                </table>
        
        
                </div>
                
               
            </div>
        );
    }
}
function checkEven(num) {
    var intvalue = Math.floor(num);
    if (intvalue%2 === 0) return true;
    else return false;

}
  export default App;
