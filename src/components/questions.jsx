import React from 'react';
import "./questions.css";
export default class Questions extends React.Component{
  state={
    checked:false,
    index:0
  }
  checkbox=()=>{
    this.setState({
      checked:!this.state.checked
    })
  }
  nextQuestion=()=>{
    this.setState({
      index:this.state.index+1
    })
  }
  render(){
    const newarray=[...this.props.data[this.state.index].incorrect_answers,this.props.data[this.state.index].incorrect_answers]
    return (
                    <div className="questionbox">
                    <p className="question"><strong>Question:</strong>{this.props.data[this.state.index].question}</p>
                    <div className="mcq">
                      {newarray.map(option=>{
                        return(
                          <>
                      <input type="checkbox" id="A" checked={this.state.checked} onChange={this.checkbox}/>
                        <label className="option" htmlFor="A"><span className="a">A</span><span>{option}</span> 
                      </label>
                      </>
                        )
                      })}
                  
                    </div>

                    <button type="button" onClick={this.nextQuestion} className="btn btn-warning m-2">NEXT</button><br/>
                    </div>
                  )
}
}