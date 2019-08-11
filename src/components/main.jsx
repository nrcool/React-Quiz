import React from 'react';
import js from "./images/quiz.png";
import "./main.css"
import Questions from './questions';


export default class Main extends React.Component {
        state={
            data:[],
            start:false
        }
        componentDidMount(){
            fetch(`https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple`)
            .then(res=>res.json()).then(data=>{
               this.setState({
                   data:data.results
               })
            })
        }
        startgame=()=>{
            this.setState({
                start:true
            })
        }
        restart=()=>{
           
            this.setState({
                data:[],
                start:false
            }) 
            this.componentDidMount();
        }
    render(){
        console.log(this.state.data)
        return (
        <section className="mainbox">
            <div className="leftbox">
                <h1>1</h1>
                <div className="image">
                    <img src={js} alt="imagename" />
                </div>
            </div>
            <div className="rightbox">
                {this.state.start?(<Questions restart={this.restart} data={this.state.data}/> ):(<button type="button" onClick={this.startgame} className="btn start btn-warning m-2">START</button>)}
           
            </div>
        </section>
    )
}

    }
    