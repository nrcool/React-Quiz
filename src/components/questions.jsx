import React from 'react';
import "./questions.css";
import Result from "./result";

export default class Questions extends React.Component{
  state={
    checked:[false,false,false,false],
    index:0,
    score:0,
    useranswer:""
  }
  checkbox=(i,answer)=>{
    console.log(i)
    let array=this.state.checked;
    array[i]=!this.state.checked[i];
    this.setState({
      checked:array,
      useranswer:answer
    })
  }
  nextQuestion=()=>{
    if(this.state.useranswer===this.props.data[this.state.index].correct_answer){
     this.setState({
       score:this.state.score+1
     })
    }
       this.setState({
      index:this.state.index+1,
      checked:[false,false,false,false]
    })
   this.props.datafromchild(this.state.index);
  }
  restart=()=>{
   this.props.restart();
  }
  render(){
    let newarray=[];
    if(this.state.index<10){
       newarray=[...this.props.data[this.state.index].incorrect_answers,this.props.data[this.state.index].correct_answer];
  /* newarray.sort(()=>(Math.round(Math.random())-0.5))  */
    }
   
  return (<div>
    {this.state.index<10?( <div className="questionbox">
                    <p className="question"><strong>Question:</strong>{this.props.data[this.state.index].question}</p>
                    <div className="mcq">
                      {newarray.map((option,i)=>{
                        return(
                          <>
                      <input type="checkbox" 
                      id={i} 
                      value={option}
                      checked={this.state.checked[i]} 
                      onChange={()=>this.checkbox(i,option)}
                      style={{display:"none"}}
                      />
                        <label className="option" htmlFor={i}><strong className="a">{i+1}</strong><span>{option}</span> 
                      </label>
                      </>
                        )
                      })}
                  
                    </div>

                    <button type="button" onClick={this.nextQuestion} className="btn btn-warning m-2">NEXT</button><br/>
                    </div> ):(<Result score={this.state.score} restart={this.restart}/>)}
                    </div>)
}
}