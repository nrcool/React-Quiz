import React from 'react';
import js from "./images/quiz.png";
import "./main.css"
import Questions from './questions';


export default class Main extends React.Component {
        state={
            data:[]
        }
        componentDidMount(){
            fetch("https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple")
            .then(res=>res.json()).then(data=>{
               this.setState({
                   data:data.results
               })
            })
        }
    render(){
        return (
        <section className="mainbox">
            <div className="leftbox">
                <h1>1</h1>
                <div className="image">
                    <img src={js} alt="imagename" />
                </div>
            </div>
            <div className="rightbox">
            <Questions data={this.state.data}/>
            </div>
        </section>
    )
}

    }
    