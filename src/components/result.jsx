import React from 'react'

export default function Result(props) {
    return (
        <div className="resultbox">
        <p className="question"><strong>RESULT</strong></p>
        <div className="mcq">
            <h2>You got {props.score}/10 </h2>
        
        </div>

        <button type="button" onClick={props.restart} className="btn btn-warning m-2">NEXT</button><br/>
        </div>
      )
}
